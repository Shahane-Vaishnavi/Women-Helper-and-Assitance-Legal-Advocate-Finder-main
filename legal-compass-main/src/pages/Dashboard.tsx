import { Link } from "react-router-dom";
import { Search, Shield, Scale, Briefcase, Home as HomeIcon, Laptop, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdvocateCard from "@/components/AdvocateCard";
import ArticleCard from "@/components/ArticleCard";

const categories = [
  { icon: Shield, label: "Domestic Violence", color: "text-emergency" },
  { icon: Scale, label: "Divorce & Family Law", color: "text-primary" },
  { icon: Briefcase, label: "Workplace Harassment", color: "text-accent" },
  { icon: HomeIcon, label: "Property Rights", color: "text-primary" },
  { icon: Laptop, label: "Cyber Crime", color: "text-accent" },
  { icon: Users, label: "Child Protection", color: "text-emergency" },
];

const mockAdvocates = [
  { id: "1", name: "Priya Sharma", specialization: "Family Law", experience: 12, location: "Mumbai", rating: 4.8 },
  { id: "2", name: "Anita Desai", specialization: "Criminal Law", experience: 8, location: "Delhi", rating: 4.6 },
  { id: "3", name: "Meera Patel", specialization: "Cyber Crime", experience: 5, location: "Bangalore", rating: 4.9 },
];

const mockArticles = [
  { id: "1", title: "Understanding Your Rights Under the Domestic Violence Act", author: "Adv. Priya Sharma", date: "Mar 5, 2026", tags: ["Domestic Violence", "Legal Rights"], excerpt: "A comprehensive guide to understanding your rights and the protections available under the law." },
  { id: "2", title: "Workplace Harassment: How to File a Complaint", author: "Adv. Anita Desai", date: "Mar 1, 2026", tags: ["Workplace", "Harassment"], excerpt: "Step-by-step guide on how to file a complaint and what to expect during the process." },
];

const Dashboard = () => (
  <div className="space-y-8">
    <div>
      <h1 className="font-heading text-2xl md:text-3xl font-bold mb-2">Welcome Back</h1>
      <p className="text-muted-foreground">Find trusted legal advocates and get the help you need.</p>
    </div>

    {/* Search */}
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search advocates by name, location, or specialization..."
        className="w-full h-12 pl-12 pr-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>

    {/* Categories */}
    <div>
      <h2 className="font-heading font-semibold text-lg mb-4">Legal Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map(({ icon: Icon, label, color }) => (
          <Link
            key={label}
            to={`/search?category=${encodeURIComponent(label)}`}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:shadow-md transition-shadow text-center"
          >
            <Icon className={`w-6 h-6 ${color}`} />
            <span className="text-xs font-medium text-foreground">{label}</span>
          </Link>
        ))}
      </div>
    </div>

    {/* Recommended Advocates */}
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading font-semibold text-lg">Recommended Advocates</h2>
        <Link to="/search" className="text-sm text-accent hover:underline">View all</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockAdvocates.map((a) => <AdvocateCard key={a.id} {...a} />)}
      </div>
    </div>

    {/* Articles */}
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading font-semibold text-lg">Latest Articles</h2>
        <Link to="/articles" className="text-sm text-accent hover:underline">View all</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockArticles.map((a) => <ArticleCard key={a.id} {...a} />)}
      </div>
    </div>
  </div>
);

export default Dashboard;
