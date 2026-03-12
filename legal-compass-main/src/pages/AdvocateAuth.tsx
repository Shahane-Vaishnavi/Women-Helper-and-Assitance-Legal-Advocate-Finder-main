import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Lock, User, Briefcase, MapPin, Phone, Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AdvocateAuth = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-xl border border-border p-6 md:p-8">
            <h1 className="font-heading text-2xl font-bold text-center mb-2">
              {isLogin ? "Advocate Login" : "Register as Advocate"}
            </h1>
            <p className="text-sm text-muted-foreground text-center mb-6">
              {isLogin ? "Welcome back. Sign in to your account." : "Join our platform and help women access legal support."}
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <>
                  <InputField icon={User} placeholder="Full Name" />
                  <InputField icon={Briefcase} placeholder="Bar Council ID" />
                  <InputField icon={Briefcase} placeholder="Law Firm (optional)" />
                  <div className="grid grid-cols-2 gap-3">
                    <InputField icon={Briefcase} placeholder="Years of Exp." type="number" />
                    <InputField icon={MapPin} placeholder="City" />
                  </div>
                  <select className="w-full h-11 px-4 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select Specialization</option>
                    <option>Family Law</option>
                    <option>Criminal Law</option>
                    <option>Domestic Violence</option>
                    <option>Cyber Crime</option>
                    <option>Property Rights</option>
                    <option>Workplace Harassment</option>
                  </select>
                  <InputField icon={Phone} placeholder="Phone Number" type="tel" />
                </>
              )}
              <InputField icon={Mail} placeholder="Email" type="email" />
              <InputField icon={Lock} placeholder="Password" type="password" />

              {!isLogin && (
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Upload Bar Council Certificate & Photo</p>
                </div>
              )}

              <Button variant="default" size="lg" className="w-full" type="submit">
                {isLogin ? "Sign In" : "Register"}
              </Button>
            </form>

            <p className="text-sm text-center text-muted-foreground mt-4">
              {isLogin ? "Don't have an account? " : "Already registered? "}
              <button onClick={() => setIsLogin(!isLogin)} className="text-accent hover:underline font-medium">
                {isLogin ? "Register here" : "Sign in"}
              </button>
            </p>

            {isLogin && (
              <p className="text-sm text-center mt-2">
                <button className="text-muted-foreground hover:text-foreground text-sm">Forgot password?</button>
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const InputField = ({ icon: Icon, ...props }: { icon: React.ElementType } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="relative">
    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
    <input
      {...props}
      className="w-full h-11 pl-10 pr-4 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
    />
  </div>
);

export default AdvocateAuth;
