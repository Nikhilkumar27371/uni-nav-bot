import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Bot, 
  MessageSquare, 
  Calendar, 
  Clock, 
  Utensils, 
  BookOpen, 
  FileText,
  GraduationCap
} from "lucide-react";

interface NavigationProps {
  onSectionClick: (section: string) => void;
}

export const Navigation = ({ onSectionClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "chat", label: "AI Chat", icon: MessageSquare },
    { id: "academic", label: "Academic", icon: GraduationCap },
    { id: "facilities", label: "Facilities", icon: Clock },
    { id: "events", label: "Events", icon: Calendar },
    { id: "dining", label: "Dining", icon: Utensils },
    { id: "library", label: "Library", icon: BookOpen },
    { id: "admin", label: "Admin", icon: FileText },
  ];

  const handleItemClick = (id: string) => {
    onSectionClick(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-foreground">Campus AI</h1>
              <p className="text-xs text-muted-foreground">Information System</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleItemClick(item.id)}
                  className="flex items-center gap-2 hover:bg-primary/10 transition-colors"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden xl:inline">{item.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Status Badge */}
          <div className="hidden md:flex items-center gap-3">
            <Badge variant="default" className="bg-success text-success-foreground">
              <div className="w-2 h-2 bg-success-foreground rounded-full mr-2 animate-pulse"></div>
              Online
            </Badge>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleItemClick(item.id)}
                    className="w-full justify-start gap-3 hover:bg-primary/10"
                  >
                    <IconComponent className="w-4 h-4" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};