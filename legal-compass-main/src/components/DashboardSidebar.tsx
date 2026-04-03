import { NavLink } from "react-router-dom";
import { Home, Search, Phone, FileText, Bookmark, User, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/dashboard", icon: Home, label: "Home" },
  { to: "/search", icon: Search, label: "Search Advocates" },
  { to: "/emergency", icon: Phone, label: "Emergency Services" },
  { to: "/articles", icon: FileText, label: "Articles" },
  { to: "/saved", icon: Bookmark, label: "Saved Advocates" },
  { to: "/profile", icon: User, label: "Profile" },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

const DashboardSidebar = ({ open, onClose }: Props) => (
  <>
    {/* Overlay */}
    {open && <div className="fixed inset-0 bg-foreground/20 z-40 lg:hidden" onClick={onClose} />}

    <aside className={cn(
      "fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col transition-transform lg:translate-x-0",
      open ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <span className="font-heading font-bold text-lg">WomenLegal</span>
        <button className="lg:hidden" onClick={onClose}><X className="w-5 h-5" /></button>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
              isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "hover:bg-sidebar-accent/50"
            )}
          >
            <Icon className="w-4 h-4" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  </>
);

export default DashboardSidebar;
