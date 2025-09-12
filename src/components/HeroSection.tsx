import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, MessageSquare, Clock, Users, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onStartChat: () => void;
}

export const HeroSection = ({ onStartChat }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Campus Assistant
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Intelligent
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Campus Companion
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get instant answers about academic schedules, facility timings, campus events, 
            dining services, library resources, and administrative procedures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={onStartChat}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-large text-lg px-8 py-6 h-auto"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Chatting
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
            >
              Browse Information
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">AI-Powered</h3>
                <p className="text-white/80 text-sm">
                  Advanced AI understands your queries and provides accurate, helpful responses
                </p>
              </div>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">24/7 Available</h3>
                <p className="text-white/80 text-sm">
                  Get campus information anytime, anywhere with our always-on assistant
                </p>
              </div>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Student-Focused</h3>
                <p className="text-white/80 text-sm">
                  Designed specifically for students with comprehensive campus knowledge
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};