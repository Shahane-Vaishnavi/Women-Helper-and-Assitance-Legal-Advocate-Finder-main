import { User, Mail, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdvocateCard from "@/components/AdvocateCard";

const savedAdvocates = [
  { id: "1", name: "Priya Sharma", specialization: "Family Law", experience: 12, location: "Mumbai", rating: 4.8 },
  { id: "3", name: "Meera Patel", specialization: "Cyber Crime", experience: 5, location: "Bangalore", rating: 4.9 },
];

const UserProfile = () => (
  <div className="space-y-8 max-w-3xl">
    <h1 className="font-heading text-2xl font-bold">My Profile</h1>

    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
          <User className="w-8 h-8 text-secondary-foreground" />
        </div>
        <div>
          <h2 className="font-heading font-semibold text-lg">Anjali Mehta</h2>
          <p className="text-sm text-muted-foreground flex items-center gap-1"><Mail className="w-3 h-3" /> anjali@example.com</p>
        </div>
      </div>
      <Button variant="outline" size="sm">Edit Profile</Button>
    </div>

    <div>
      <h2 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2"><Bookmark className="w-5 h-5" /> Saved Advocates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {savedAdvocates.map((a) => <AdvocateCard key={a.id} {...a} />)}
      </div>
    </div>

    <div className="bg-card rounded-xl border border-border p-6">
      <h2 className="font-heading font-semibold mb-4">Consultation History</h2>
      <div className="space-y-3">
        {["Consultation with Adv. Priya Sharma — Family Law — Feb 28, 2026", "Consultation with Adv. Meera Patel — Cyber Crime — Feb 15, 2026"].map((item, i) => (
          <div key={i} className="py-2 border-b border-border last:border-0 text-sm text-muted-foreground">{item}</div>
        ))}
      </div>
    </div>
  </div>
);

export default UserProfile;
