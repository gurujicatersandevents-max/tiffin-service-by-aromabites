"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles, MessageSquare, ArrowRight, Utensils, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: string[];
}

interface FloatingChatbotProps {
  onOpenPlan: (plan?: string) => void;
}

export default function FloatingChatbot({ onOpenPlan }: FloatingChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "bot",
      text: "Namaste! 🙏 I'm your Aroma Bites AI Food Assistant. How can I help you choose the best meal plan today?",
      options: [
        "View Meal Plans",
        "Delivery Areas",
        "Food & Ingredients",
        "Customize My Plan",
      ],
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");

    // Simulate AI response logic
    setTimeout(() => {
      const lower = text.toLowerCase();
      let botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "",
      };

      if (lower.includes("plan") || lower.includes("price") || lower.includes("cost") || lower.includes("rate")) {
        botResponse.text = "We offer 3 flexible plans with fresh daily cooking:\n• Silver (Essential) @ ₹199/meal\n• Gold (Most Popular) @ ₹249/meal\n• Platinum (Gourmet) @ ₹279/meal\n\nAll plans include zero preservatives & free on-time delivery!";
        botResponse.options = ["Book Tasting / Plan", "What is included?"];
      } else if (lower.includes("delivery") || lower.includes("area") || lower.includes("location") || lower.includes("where")) {
        botResponse.text = "We deliver freshly prepared meals across East Delhi (Dilshad Garden, Vivek Vihar, Preet Vihar, Mayur Vihar, Laxmi Nagar) and Ghaziabad (Indirapuram, Vaishali, Vasundhara, Shalimar Garden, Kaushambi).";
        botResponse.options = ["View Meal Plans", "Contact Support"];
      } else if (lower.includes("ingredient") || lower.includes("oil") || lower.includes("quality") || lower.includes("healthy") || lower.includes("ghee")) {
        botResponse.text = "We prioritize 100% fresh cooking every single day using Desi Ghee & refined soyabean oil, farm-fresh vegetables, and ZERO added preservatives or artificial colors.";
        botResponse.options = ["View Meal Plans", "Customize My Plan"];
      } else if (lower.includes("custom") || lower.includes("book") || lower.includes("order") || lower.includes("start")) {
        botResponse.text = "Awesome! Click below to create your personalized meal plan tailored to your dietary goals, calories, and delivery time slot.";
        botResponse.options = ["Open Plan Form", "Chat on WhatsApp"];
      } else {
        botResponse.text = "Thank you for reaching out! You can easily select your meal plan, pause/cancel anytime, and customize your diet with Aroma Bites.";
        botResponse.options = ["View Meal Plans", "Delivery Areas", "Book Tasting / Plan"];
      }

      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  const handleOptionClick = (option: string) => {
    if (option === "Book Tasting / Plan" || option === "Open Plan Form" || option === "Customize My Plan") {
      onOpenPlan();
      setIsOpen(false);
      return;
    }
    if (option === "Chat on WhatsApp" || option === "Contact Support") {
      window.open(
        "https://wa.me/919958585172?text=Hi%20AromaBites,%20I%20have%20a%20question%20about%20your%20meal%20services!",
        "_blank"
      );
      return;
    }
    handleSend(option);
  };

  return (
    <>
      {/* Floating Trigger Button (Placed directly above the WhatsApp button at bottom-24) */}
      <div className="fixed bottom-24 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-gradient-to-r from-[#E87524] to-[#F4B000] text-white p-3.5 rounded-full shadow-[0_10px_25px_rgba(232,117,36,0.45)] hover:shadow-[0_12px_30px_rgba(232,117,36,0.6)] hover:scale-105 transition-all duration-300 border-2 border-white/30 flex items-center justify-center group cursor-pointer"
          title="Chat with AI Food Assistant"
          aria-label="Open AI Chatbot"
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
          ) : (
            <>
              <Bot className="w-6 h-6 animate-pulse" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38864B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#38864B] text-[9px] font-bold text-white items-center justify-center">
                    1
                  </span>
                </span>
              )}
            </>
          )}
        </button>

        {/* Small tooltip tag when closed */}
        {!isOpen && hasUnread && (
          <div className="hidden sm:flex absolute right-16 top-1/2 -translate-y-1/2 bg-[#402000] text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-lg border border-white/10 items-center gap-1.5 pointer-events-none animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B000]" />
            Ask Aroma AI
          </div>
        )}
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] h-[520px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-[#F0E5CF] flex flex-col overflow-hidden font-poppins"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#402000] to-[#5a2e04] text-white p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#E87524] to-[#F4B000] flex items-center justify-center text-white shadow-md">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                    Aroma Bites AI
                    <span className="w-2 h-2 rounded-full bg-[#38864B] inline-block animate-ping" />
                  </h3>
                  <p className="text-[11px] text-[#FBE4AC]">Instant Meal Assistant</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-full text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#FFFDF7]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs ${
                      msg.sender === "user"
                        ? "bg-[#E87524] text-white rounded-tr-xs"
                        : "bg-white text-[#402000] border border-[#F0E5CF] rounded-tl-xs"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>

                  {/* Quick Reply Pills */}
                  {msg.options && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(opt)}
                          className="bg-[#FFF9EB] hover:bg-[#FBE4AC] text-[#402000] border border-[#F4B000]/40 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer shadow-2xs hover:scale-102 flex items-center gap-1"
                        >
                          <Sparkles className="w-3 h-3 text-[#E87524]" />
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Footer Bar */}
            <div className="bg-[#FFF9EB] px-4 py-2 border-t border-[#F0E5CF] flex items-center justify-between">
              <span className="text-[11px] text-[#806F5C] font-medium">Need instant human help?</span>
              <a
                href="https://wa.me/919958585172"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-[#38864B] hover:underline flex items-center gap-1"
              >
                WhatsApp Us →
              </a>
            </div>

            {/* Chat Input Field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputVal);
              }}
              className="p-3 bg-white border-t border-[#F0E5CF] flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about meal plans, locations..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 bg-[#FFFDF7] border border-[#F0E5CF] rounded-full px-4 py-2 text-xs sm:text-sm text-[#402000] placeholder-[#806F5C]/70 focus:outline-none focus:border-[#E87524] transition-colors"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="p-2.5 bg-[#E87524] disabled:bg-[#E87524]/40 text-white rounded-full transition-all shadow-md hover:scale-105 cursor-pointer disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
