import { Phone, MapPin, AlertTriangle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const helplines = [
  { name: "Women Helpline", number: "181", desc: "24/7 support for women in distress" },
  { name: "Police", number: "100", desc: "Emergency police assistance" },
  { name: "Legal Aid", number: "15100", desc: "Free legal aid and advice" },
  { name: "Domestic Violence", number: "1091", desc: "Domestic violence helpline" },
  { name: "Child Helpline", number: "1098", desc: "Child abuse and protection" },
  { name: "Cyber Crime", number: "1930", desc: "Report cyber crimes" },
];

const Emergency = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1 py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* SOS */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-full bg-emergency mx-auto flex items-center justify-center mb-4 emergency-pulse">
            <AlertTriangle className="w-10 h-10 text-emergency-foreground" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-emergency mb-2">Emergency Assistance</h1>
          <p className="text-muted-foreground">Get immediate help. Your safety is our priority.</p>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <Button variant="emergency" size="lg" className="h-16 text-base" onClick={() => window.open("tel:181")}>
            <Phone className="w-5 h-5" /> Call Helpline
          </Button>
          <Button variant="teal" size="lg" className="h-16 text-base">
            <MapPin className="w-5 h-5" /> Share Location
          </Button>
          <Button variant="default" size="lg" className="h-16 text-base">
            <Shield className="w-5 h-5" /> Report Incident
          </Button>
        </div>

        {/* Helpline cards */}
        <h2 className="font-heading text-xl font-semibold mb-4">Helpline Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {helplines.map((h) => (
            <div key={h.number} className="bg-card rounded-xl border border-border p-4 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-semibold text-foreground">{h.name}</h3>
                <p className="text-xs text-muted-foreground">{h.desc}</p>
              </div>
              <Button variant="emergency" size="sm" onClick={() => window.open(`tel:${h.number}`)}>
                <Phone className="w-4 h-4" /> {h.number}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Emergency;
