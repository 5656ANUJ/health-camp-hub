import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
          
          {/* Desktop Navigation */}
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

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-open-sans">
              Sign In
            </Button>
            <Button className="font-open-sans bg-primary hover:bg-primary/90">
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="/find-camps" 
                className="block px-3 py-2 font-open-sans text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Camps
              </a>
              <a 
                href="/list-camp" 
                className="block px-3 py-2 font-open-sans text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                List Your Camp
              </a>
              <a 
                href="#" 
                className="block px-3 py-2 font-open-sans text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#" 
                className="block px-3 py-2 font-open-sans text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full font-open-sans"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Button>
                <Button 
                  className="w-full font-open-sans bg-primary hover:bg-primary/90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;