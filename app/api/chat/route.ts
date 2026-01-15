import { NextRequest, NextResponse } from "next/server";
import { processUserMessage } from "@/lib/nlp";

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    // Get the last user message
    const lastUserMessage = messages.filter((msg: { role: string }) => msg.role === "user").pop();
    if (!lastUserMessage) {
      return NextResponse.json(
        { error: "No user message found" },
        { status: 400 }
      );
    }

    const { message } = await processUserMessage(lastUserMessage.content);

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

