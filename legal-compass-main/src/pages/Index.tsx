import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
          <p className="text-xl text-muted-foreground mb-6">Start building your amazing project here!</p>
          <Link to="/">
            <Button>Go to Landing Page</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
