import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdvocateCard from "@/components/AdvocateCard";

const allAdvocates = [
  { id: "1", name: "Priya Sharma", specialization: "Family Law", experience: 12, location: "Mumbai", rating: 4.8 },
  { id: "2", name: "Anita Desai", specialization: "Criminal Law", experience: 8, location: "Delhi", rating: 4.6 },
  { id: "3", name: "Meera Patel", specialization: "Cyber Crime", experience: 5, location: "Bangalore", rating: 4.9 },
  { id: "4", name: "Sunita Verma", specialization: "Domestic Violence", experience: 15, location: "Chennai", rating: 4.7 },
  { id: "5", name: "Kavita Singh", specialization: "Property Rights", experience: 10, location: "Hyderabad", rating: 4.5 },
  { id: "6", name: "Ranjana Joshi", specialization: "Workplace Harassment", experience: 7, location: "Pune", rating: 4.4 },
];

const specializations = ["All", "Family Law", "Criminal Law", "Cyber Crime", "Domestic Violence", "Property Rights", "Workplace Harassment"];

const AdvocateSearch = () => {
  const [search, setSearch] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("All");

  const filtered = allAdvocates.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.location.toLowerCase().includes(search.toLowerCase());
    const matchSpec = selectedSpec === "All" || a.specialization === selectedSpec;
    return matchSearch && matchSpec;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold mb-2">Find an Advocate</h1>
        <p className="text-muted-foreground">Search verified legal advocates by specialization, location, or name.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or location..."
            className="w-full h-11 pl-12 pr-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2">
        {specializations.map((s) => (
          <button
            key={s}
            onClick={() => setSelectedSpec(s)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedSpec === s ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">{filtered.length} advocates found</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((a) => <AdvocateCard key={a.id} {...a} />)}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
          <p className="text-muted-foreground">No advocates found. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
};

export default AdvocateSearch;
