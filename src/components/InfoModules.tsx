import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Utensils, 
  BookOpen, 
  FileText,
  Users,
  GraduationCap
} from "lucide-react";

const modules = [
  {
    id: "academic",
    title: "Academic Schedules",
    description: "Class timetables, exam schedules, and academic calendar",
    icon: GraduationCap,
    color: "bg-primary",
    items: [
      { label: "Spring Registration", date: "March 15-20", status: "upcoming" },
      { label: "Midterm Exams", date: "March 25-29", status: "upcoming" },
      { label: "Spring Break", date: "April 8-12", status: "upcoming" },
    ]
  },
  {
    id: "facilities",
    title: "Facility Timings",
    description: "Operating hours for campus facilities and services",
    icon: Clock,
    color: "bg-accent",
    items: [
      { label: "Main Library", time: "6:00 AM - 11:00 PM", status: "open" },
      { label: "Recreation Center", time: "5:00 AM - 10:00 PM", status: "open" },
      { label: "Student Health Center", time: "8:00 AM - 6:00 PM", status: "open" },
    ]
  },
  {
    id: "events",
    title: "Campus Events",
    description: "Upcoming events, workshops, and activities",
    icon: Calendar,
    color: "bg-gradient-primary",
    items: [
      { label: "Career Fair", date: "March 20", time: "10:00 AM - 4:00 PM" },
      { label: "Film Festival", date: "March 25", time: "7:00 PM" },
      { label: "Guest Lecture", date: "Every Wednesday", time: "4:00 PM" },
    ]
  },
  {
    id: "dining",
    title: "Dining Services",
    description: "Meal plans, menus, and dining hall information",
    icon: Utensils,
    color: "bg-warning",
    items: [
      { label: "Main Dining Hall", time: "7:00 AM - 9:00 PM", special: "Italian Night" },
      { label: "Café Central", time: "8:00 AM - 6:00 PM", special: "Fresh Pastries" },
      { label: "Food Trucks", time: "11:00 AM - 3:00 PM", special: "Asian Fusion" },
    ]
  },
  {
    id: "library",
    title: "Library Resources",
    description: "Study spaces, research databases, and book reservations",
    icon: BookOpen,
    color: "bg-success",
    items: [
      { label: "Study Rooms Available", count: "12/20", status: "available" },
      { label: "Digital Resources", count: "500+", status: "active" },
      { label: "Interlibrary Loans", time: "3-5 business days", status: "active" },
    ]
  },
  {
    id: "admin",
    title: "Administrative Services",
    description: "Registrar, financial aid, and student services",
    icon: FileText,
    color: "bg-primary-dark",
    items: [
      { label: "Registrar Office", time: "9:00 AM - 5:00 PM", status: "open" },
      { label: "Financial Aid", time: "10:00 AM - 4:00 PM", days: "Tue-Thu" },
      { label: "Student Services", time: "8:00 AM - 6:00 PM", status: "open" },
    ]
  },
];

export const InfoModules = () => {
  const getStatusBadge = (status?: string) => {
    switch (status) {
      case "open":
        return <Badge variant="default" className="bg-success text-success-foreground">Open</Badge>;
      case "upcoming":
        return <Badge variant="secondary">Upcoming</Badge>;
      case "available":
        return <Badge variant="default" className="bg-accent text-accent-foreground">Available</Badge>;
      case "active":
        return <Badge variant="default" className="bg-primary text-primary-foreground">Active</Badge>;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Campus Information Modules
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quick access to essential campus services and information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Card 
                key={module.id} 
                className="hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${module.color} text-white`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {module.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  {module.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{item.label}</span>
                          {item.status && getStatusBadge(item.status)}
                        </div>
                        <div className="text-xs text-muted-foreground space-x-3">
                          {item.date && <span className="inline-flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.date}
                          </span>}
                          {item.time && <span className="inline-flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.time}
                          </span>}
                          {item.count && <span className="inline-flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {item.count}
                          </span>}
                          {item.days && <span className="text-accent font-medium">
                            {item.days}
                          </span>}
                        </div>
                        {item.special && (
                          <div className="text-xs text-accent font-medium mt-1">
                            Today's Special: {item.special}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};