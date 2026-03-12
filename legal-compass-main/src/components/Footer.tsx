import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12 mt-auto">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading font-bold text-lg mb-3">WomenLegal</h3>
          <p className="text-sm opacity-80">Connecting women with trusted legal advocates for a safer tomorrow.</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/search" className="hover:opacity-100 transition-opacity">Find Advocates</Link>
            <Link to="/articles" className="hover:opacity-100 transition-opacity">Articles</Link>
            <Link to="/emergency" className="hover:opacity-100 transition-opacity">Emergency</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Legal</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>About Us</span>
            <span>Contact</span>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Helplines</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <span className="flex items-center gap-2"><Phone className="w-3 h-3" /> Women Helpline: 181</span>
            <span className="flex items-center gap-2"><Phone className="w-3 h-3" /> Police: 100</span>
            <span className="flex items-center gap-2"><Phone className="w-3 h-3" /> Legal Aid: 15100</span>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-60">
        © 2026 WomenLegal. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
