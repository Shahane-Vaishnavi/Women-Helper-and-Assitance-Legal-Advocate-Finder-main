import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isLanding = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">W</span>
          </div>
          <span className="font-heading font-bold text-lg text-foreground">WomenLegal</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {!isLanding && (
            <>
              <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/search" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Find Advocates</Link>
              <Link to="/articles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Articles</Link>
            </>
          )}
          <Link to="/emergency">
            <Button variant="emergency" size="sm">
              <Phone className="w-4 h-4" />
              Emergency
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="py-2 text-sm text-muted-foreground hover:text-foreground">Dashboard</Link>
              <Link to="/search" onClick={() => setMobileOpen(false)} className="py-2 text-sm text-muted-foreground hover:text-foreground">Find Advocates</Link>
              <Link to="/articles" onClick={() => setMobileOpen(false)} className="py-2 text-sm text-muted-foreground hover:text-foreground">Articles</Link>
              <Link to="/emergency" onClick={() => setMobileOpen(false)}>
                <Button variant="emergency" size="sm" className="w-full">
                  <Phone className="w-4 h-4" /> Emergency
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
