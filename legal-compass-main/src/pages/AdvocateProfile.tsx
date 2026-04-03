import { useParams } from "react-router-dom";
import { MapPin, Briefcase, Star, Globe, Clock, MessageSquare, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AdvocateProfile = () => {
  const { id } = useParams();

  // Mock data
  const advocate = {
    name: "Priya Sharma",
    specialization: "Family Law",
    experience: 12,
    location: "Mumbai, Maharashtra",
    languages: ["English", "Hindi", "Marathi"],
    rating: 4.8,
    bio: "Adv. Priya Sharma is a seasoned family law practitioner with over 12 years of experience handling divorce, child custody, domestic violence, and maintenance cases. She is passionate about ensuring justice and support for women facing legal challenges.",
    availability: "Mon–Fri, 10 AM – 6 PM",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card rounded-xl border border-border p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <span className="font-heading font-bold text-3xl text-secondary-foreground">{advocate.name[0]}</span>
              </div>
              <div className="flex-1">
                <h1 className="font-heading text-2xl font-bold mb-1">{advocate.name}</h1>
                <p className="text-accent font-medium mb-3">{advocate.specialization}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {advocate.location}</span>
                  <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {advocate.experience} years</span>
                  <span className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-500" /> {advocate.rating}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="font-heading font-semibold mb-2">About</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{advocate.bio}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <span className="flex items-center gap-2 text-sm font-medium mb-1"><Globe className="w-4 h-4" /> Languages</span>
                  <p className="text-sm text-muted-foreground">{advocate.languages.join(", ")}</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <span className="flex items-center gap-2 text-sm font-medium mb-1"><Clock className="w-4 h-4" /> Availability</span>
                  <p className="text-sm text-muted-foreground">{advocate.availability}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="teal" size="lg" className="flex-1">
                  <MessageSquare className="w-4 h-4" /> Request Consultation
                </Button>
                <Button variant="outline" size="lg">
                  <Bookmark className="w-4 h-4" /> Save Advocate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdvocateProfile;
