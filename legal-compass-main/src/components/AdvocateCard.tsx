import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Star, Bookmark } from "lucide-react";

interface AdvocateCardProps {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  location: string;
  rating?: number;
  imageUrl?: string;
}

const AdvocateCard = ({ id, name, specialization, experience, location, rating = 4.5, imageUrl }: AdvocateCardProps) => (
  <div className="bg-card rounded-lg border border-border p-5 hover:shadow-lg transition-shadow">
    <div className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-14 h-14 rounded-full object-cover" />
        ) : (
          <span className="font-heading font-bold text-lg text-secondary-foreground">{name[0]}</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-heading font-semibold text-foreground truncate">{name}</h3>
        <p className="text-sm text-accent font-medium">{specialization}</p>
        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {location}</span>
          <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {experience} yrs</span>
          <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-500" /> {rating}</span>
        </div>
      </div>
      <button className="text-muted-foreground hover:text-primary transition-colors">
        <Bookmark className="w-4 h-4" />
      </button>
    </div>
    <div className="flex gap-2 mt-4">
      <Link to={`/advocate/${id}`} className="flex-1">
        <Button variant="outline" size="sm" className="w-full">View Profile</Button>
      </Link>
      <Button variant="teal" size="sm" className="flex-1">Consult</Button>
    </div>
  </div>
);

export default AdvocateCard;
