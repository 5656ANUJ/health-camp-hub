import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-poppins font-bold text-xl text-foreground">
              HealthCamp Hub
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/find-camps" className="font-open-sans text-foreground hover:text-primary transition-colors">
              Find Camps
            </a>
            <a href="/list-camp" className="font-open-sans text-foreground hover:text-primary transition-colors">
              List Your Camp
            </a>
            <a href="#" className="font-open-sans text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="font-open-sans text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-open-sans">
              Sign In
            </Button>
            <Button className="font-open-sans bg-primary hover:bg-primary/90" asChild>
              <a href="/list-camp">List Your Camp</a>
            </Button>
          </div>

          <button className="md:hidden">
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;