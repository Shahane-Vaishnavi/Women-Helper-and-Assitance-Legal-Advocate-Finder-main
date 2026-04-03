import { Eye, MessageSquare, FileText, Edit, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { label: "Profile Views", value: "1,247", icon: Eye },
  { label: "Consultations", value: "38", icon: MessageSquare },
  { label: "Articles Published", value: "12", icon: FileText },
];

const AdvocateDashboard = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1 py-8">
      <div className="container mx-auto px-4 max-w-5xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">Advocate Dashboard</h1>
            <p className="text-muted-foreground text-sm">Manage your profile, consultations, and articles.</p>
          </div>
          <Button variant="outline"><Edit className="w-4 h-4" /> Edit Profile</Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Consultations */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="font-heading font-semibold mb-4">Recent Consultation Requests</h2>
          <div className="space-y-3">
            {["Rina M. — Domestic Violence", "Sana K. — Divorce Consultation", "Pooja R. — Workplace Issue"].map((req, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-sm">{req}</span>
                </div>
                <Button variant="teal" size="sm">Respond</Button>
              </div>
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-semibold">Your Articles</h2>
            <Button variant="default" size="sm"><FileText className="w-4 h-4" /> Write Article</Button>
          </div>
          <div className="space-y-3">
            {["Understanding the Domestic Violence Act", "Workplace Harassment: Know Your Rights"].map((title, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <span className="text-sm">{title}</span>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default AdvocateDashboard;
