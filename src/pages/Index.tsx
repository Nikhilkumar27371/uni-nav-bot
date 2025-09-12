import { useState, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ChatInterface } from "@/components/ChatInterface";
import { InfoModules } from "@/components/InfoModules";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const chatRef = useRef<HTMLDivElement>(null);
  const modulesRef = useRef<HTMLDivElement>(null);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    
    if (section === "chat") {
      chatRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section !== "hero") {
      modulesRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleStartChat = () => {
    setActiveSection("chat");
    setTimeout(() => {
      chatRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSectionClick={handleSectionClick} />
      
      {/* Add top padding to account for fixed navigation */}
      <div className="pt-16">
        <HeroSection onStartChat={handleStartChat} />
        
        {/* Chat Section */}
        <section 
          ref={chatRef}
          className="py-16 px-4 bg-gradient-to-b from-background to-muted/20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Chat with Your AI Assistant
              </h2>
              <p className="text-muted-foreground text-lg">
                Ask questions about any aspect of campus life and get instant, accurate answers
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ChatInterface />
            </div>
          </div>
        </section>

        {/* Information Modules */}
        <div ref={modulesRef}>
          <InfoModules />
        </div>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Campus AI Information System</h3>
              <p className="text-primary-foreground/80">
                Your intelligent companion for campus life
              </p>
            </div>
            <div className="text-sm text-primary-foreground/60">
              © 2024 Campus AI. Designed to make student life easier.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
