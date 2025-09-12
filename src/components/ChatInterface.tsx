import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your campus AI assistant. I can help you with academic schedules, facility timings, campus events, dining services, library resources, and administrative procedures. What would you like to know?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const simulateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("dining") || lowerMessage.includes("food") || lowerMessage.includes("cafeteria")) {
      return "The main dining hall is open from 7:00 AM to 9:00 PM. Café Central closes at 6:00 PM. Today's specials include vegetarian pasta and grilled chicken. You can also check the weekly menu on the campus app.";
    }
    
    if (lowerMessage.includes("library") || lowerMessage.includes("books") || lowerMessage.includes("study")) {
      return "The main library is open 24/7 during exam periods, regular hours are 6:00 AM to 11:00 PM. You can reserve study rooms online, access digital resources through the portal, and check book availability in the catalog.";
    }
    
    if (lowerMessage.includes("schedule") || lowerMessage.includes("class") || lowerMessage.includes("academic")) {
      return "You can view your academic schedule through the student portal. Class registration for next semester opens on March 15th. Don't forget to meet with your academic advisor before registration!";
    }
    
    if (lowerMessage.includes("event") || lowerMessage.includes("activities")) {
      return "Upcoming events include: Spring Career Fair (March 20th), Student Film Festival (March 25th), and Guest Lecture Series every Wednesday at 4:00 PM in the main auditorium.";
    }
    
    if (lowerMessage.includes("admin") || lowerMessage.includes("office") || lowerMessage.includes("registrar")) {
      return "The registrar's office is open Monday-Friday, 9:00 AM to 5:00 PM. For transcripts, you can request them online. Financial aid office hours are Tuesday-Thursday, 10:00 AM to 4:00 PM.";
    }
    
    return "I'm here to help with campus information! Ask me about dining, library services, academic schedules, campus events, or administrative procedures.";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: simulateAIResponse(input),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <Card className="h-[600px] flex flex-col bg-gradient-card shadow-medium">
      <div className="p-4 border-b bg-gradient-primary text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold">Campus AI Assistant</h3>
            <p className="text-sm text-white/80">Always here to help with campus info</p>
          </div>
        </div>
      </div>

      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 animate-slide-in ${
                message.sender === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.sender === "user" 
                  ? "bg-chat-bubble-user text-chat-bubble-user-foreground" 
                  : "bg-chat-bubble-ai text-chat-bubble-ai-foreground"
              }`}>
                {message.sender === "user" ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Bot className="w-4 h-4" />
                )}
              </div>
              
              <div className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === "user"
                  ? "bg-chat-bubble-user text-chat-bubble-user-foreground ml-auto"
                  : "bg-chat-bubble-ai text-chat-bubble-ai-foreground"
              }`}>
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-start gap-3 animate-slide-in">
              <div className="w-8 h-8 rounded-full bg-chat-bubble-ai text-chat-bubble-ai-foreground flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-chat-bubble-ai text-chat-bubble-ai-foreground rounded-lg p-3">
                <div className="flex items-center gap-1">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Assistant is typing...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-4 border-t bg-background">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about campus services..."
            className="flex-1"
            disabled={isTyping}
          />
          <Button type="submit" disabled={isTyping || !input.trim()} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </Card>
  );
};