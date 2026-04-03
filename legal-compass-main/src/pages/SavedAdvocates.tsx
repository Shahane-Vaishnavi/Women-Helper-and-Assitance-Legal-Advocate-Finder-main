import { Bookmark } from "lucide-react";
import AdvocateCard from "@/components/AdvocateCard";

const savedAdvocates = [
  { id: "1", name: "Priya Sharma", specialization: "Family Law", experience: 12, location: "Mumbai", rating: 4.8 },
  { id: "3", name: "Meera Patel", specialization: "Cyber Crime", experience: 5, location: "Bangalore", rating: 4.9 },
];

const SavedAdvocates = () => (
  <div className="space-y-6">
    <div>
      <h1 className="font-heading text-2xl font-bold mb-2">Saved Advocates</h1>
      <p className="text-muted-foreground">Your bookmarked advocates for quick access.</p>
    </div>
    {savedAdvocates.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedAdvocates.map((a) => <AdvocateCard key={a.id} {...a} />)}
      </div>
    ) : (
      <div className="text-center py-12">
        <Bookmark className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
        <p className="text-muted-foreground">No saved advocates yet.</p>
      </div>
    )}
  </div>
);

export default SavedAdvocates;
