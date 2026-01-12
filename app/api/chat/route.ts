import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { personalInfo, experiences, projects } from "@/lib/data";

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API key not configured. Please set GEMINI_API_KEY in your environment variables." },
        { status: 500 }
      );
    }

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    // Create context about the portfolio
    const portfolioContext = `You are an AI assistant representing ${personalInfo.name}, a ${personalInfo.title}.

About ${personalInfo.name}:
${personalInfo.bio}

Experience:
${experiences.map((exp) => {
  let descriptionText = "";
  if (exp.description && exp.description.length > 0) {
    descriptionText = exp.description.join(" ");
  } else if (exp.plants && exp.plants.length > 0) {
    descriptionText = exp.plants.map((plant) => 
      `${plant.plant}: ${plant.description.join(" ")}`
    ).join(" | ");
  }
  return `- ${exp.role} at ${exp.company} (${exp.period}): ${descriptionText}`;
}).join("\n")}

Projects:
${projects.map((proj) => `- ${proj.title}: ${proj.description}. Tech: ${proj.techStack.join(", ")}`).join("\n")}

Answer questions about ${personalInfo.name}'s experience, projects, and expertise in a friendly and professional manner. Keep responses concise and relevant.`;

    // Get the last user message
    const lastUserMessage = messages.filter((msg: { role: string }) => msg.role === "user").pop();
    if (!lastUserMessage) {
      return NextResponse.json(
        { error: "No user message found" },
        { status: 400 }
      );
    }

    // Build conversation history for context
    const conversationHistory = messages
      .slice(0, -1) // Exclude the last message
      .map((msg: { role: string; content: string }) => {
        if (msg.role === "user") {
          return `User: ${msg.content}`;
        } else if (msg.role === "assistant") {
          return `Assistant: ${msg.content}`;
        }
        return null;
      })
      .filter(Boolean)
      .join("\n");

    const prompt = conversationHistory 
      ? `${portfolioContext}\n\nPrevious conversation:\n${conversationHistory}\n\nUser: ${lastUserMessage.content}\nAssistant:`
      : `${portfolioContext}\n\nUser: ${lastUserMessage.content}\nAssistant:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const message = response.text() || "Sorry, I couldn't generate a response.";

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Chat API error:", error);
    
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

