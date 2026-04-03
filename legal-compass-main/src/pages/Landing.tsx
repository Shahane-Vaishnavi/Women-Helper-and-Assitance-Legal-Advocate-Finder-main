import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, FileText, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Shield, title: "Verified Advocates", desc: "Every advocate is verified with Bar Council credentials." },
  { icon: Phone, title: "Emergency Services", desc: "Instant access to helplines and emergency assistance." },
  { icon: FileText, title: "Legal Awareness", desc: "Articles and resources to know your rights." },
  { icon: Users, title: "Secure Assistance", desc: "Confidential and safe platform for seeking help." },
];

const Landing = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent py-20 md:py-32">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--lavender)) 0%, transparent 50%)" }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Women Legal Assistance Platform
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
            Connect with trusted advocates and get legal help when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button variant="hero" size="lg" className="bg-card text-foreground hover:bg-card/90 w-full sm:w-auto">
                Get Legal Help <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/advocate-login">
              <Button variant="hero-outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                Register as Advocate
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Emergency Banner */}
    <section className="bg-emergency/10 border-y border-emergency/20 py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-heading text-xl font-bold text-emergency mb-2">Need Immediate Help?</h3>
        <p className="text-muted-foreground mb-4">Access emergency services and helpline numbers instantly.</p>
        <Link to="/emergency">
          <Button variant="emergency" size="lg">
            <Phone className="w-4 h-4" /> Emergency Services
          </Button>
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Landing;
