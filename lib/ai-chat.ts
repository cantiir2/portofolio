export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export const predefinedQuestions = [
  "What did you build at your previous company?",
  "Tell me about your projects and experience.",
  "What kind of problems do you like to work on?",
  "Tell me about your technical expertise.",
];

export async function sendChatMessage(
  messages: ChatMessage[]
): Promise<string> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to get response");
    }

    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error("Chat error:", error);
    throw error;
  }
}

