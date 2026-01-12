"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, SkipForward, Loader2 } from "lucide-react";
import { predefinedQuestions, sendChatMessage, ChatMessage } from "@/lib/ai-chat";

export default function AvatarChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || input.trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await sendChatMessage([...messages, userMessage]);
      const assistantMessage: ChatMessage = { role: "assistant", content: response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to get response";
      setError(errorMessage);
      const errorResponse: ChatMessage = {
        role: "assistant",
        content: `Sorry, I encountered an error: ${errorMessage}. Please check your API configuration.`,
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkip = () => {
    const element = document.querySelector("#experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Strip bold markers (e.g., **text**) so output tampil tanpa tanda bintang
  const sanitizeMessage = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1");

  return (
    <section id="avatar-chat" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ask the Avatar (Experimental)
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar Section */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-accent/30 overflow-hidden bg-card relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/Cinematic_Portrait_Video_Generation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="mt-4 space-y-2">
                <p className="text-foreground/70 text-sm">
                  Experimental: If you have a minute, you can ask my avatar about my work. For a quick overview, feel free to skip this and use the sections above.
                </p>
                <button
                  onClick={handleSkip}
                  className="flex items-center gap-2 text-foreground hover:text-accent transition-colors text-sm"
                >
                  <SkipForward size={16} />
                  Skip to experience
                </button>
              </div>
            </div>

            {/* Chat Section */}
            <div className="flex-1 bg-card rounded-lg p-6 space-y-4 flex flex-col min-h-[400px]">
              {/* Messages */}
              <div className="flex-1 space-y-4 overflow-y-auto max-h-[300px] pr-2">
                {messages.length === 0 ? (
                  <div className="space-y-3">
                    <p className="text-foreground/70 text-sm mb-4">Try asking:</p>
                    {predefinedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(question)}
                        className="block w-full text-left px-4 py-2 bg-background hover:bg-card-hover rounded-lg text-foreground text-sm transition-colors"
                      >
                        &quot;{question}&quot;
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            msg.role === "user"
                              ? "bg-accent text-white"
                              : "bg-background text-foreground"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">
                            {sanitizeMessage(msg.content)}
                          </p>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-background rounded-lg px-4 py-2">
                          <Loader2 className="animate-spin" size={16} />
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>

              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg px-4 py-2">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my experience..."
                  className="flex-1 px-4 py-2 bg-background border border-card-hover rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

