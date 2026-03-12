import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

interface ArticleCardProps {
  id: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  excerpt: string;
}

const ArticleCard = ({ id, title, author, date, tags, excerpt }: ArticleCardProps) => (
  <Link to={`/articles/${id}`} className="block bg-card rounded-lg border border-border p-5 hover:shadow-lg transition-shadow">
    <div className="flex flex-wrap gap-2 mb-3">
      {tags.map((tag) => (
        <span key={tag} className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">{tag}</span>
      ))}
    </div>
    <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2">{title}</h3>
    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{excerpt}</p>
    <div className="flex items-center gap-4 text-xs text-muted-foreground">
      <span className="flex items-center gap-1"><User className="w-3 h-3" /> {author}</span>
      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {date}</span>
    </div>
  </Link>
);

export default ArticleCard;
