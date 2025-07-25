import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-lg">
                <Heart className="w-6 h-6" />
              </div>
              <span className="font-poppins font-bold text-xl">
                HealthCamp Hub
              </span>
            </div>
            <p className="font-open-sans text-primary-foreground/80 mb-6">
              Connecting communities with free healthcare services. Making quality 
              healthcare accessible to everyone, everywhere.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-primary-foreground/60 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-primary-foreground/60 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-primary-foreground/60 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-primary-foreground/60 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="font-open-sans text-primary-foreground/80 hover:text-primary-foreground transition-colors">Find Camps</a></li>
              <li><a href="#" className="font-open-sans text-primary-foreground/80 hover:text-primary-foreground transition-colors">List Your Camp</a></li>
              <li><a href="#" className="font-open-sans text-primary-foreground/80 hover:text-primary-foreground transition-colors">How It Works</a></li>
              <li><a href="#" className="font-open-sans text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="font-open-sans text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* For Organizers */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">For Organizers</h3>
            <ul className="space-y-4">
              <li><a href="#" className="font-open-sans text-primary-foreground/80 hover:text-primary-foreground transition-colors">Register Organization</a></li>
              <li><a href="#" className="font-open-sans text-primary-foreground/80 hover:text-primary-foreground transition-colors">Verification Process</a></li>
              <li><a href="#" className="font-open-sans text-primary-foreground/80 hover:text-primary-foreground transition-colors">Resources</a></li>
              <li><a href="#" className="font-open-sans text-primary-foreground/80 hover:text-primary-foreground transition-colors">Guidelines</a></li>
              <li><a href="#" className="font-open-sans text-primary-foreground/80 hover:text-primary-foreground transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/60" />
                <span className="font-open-sans text-primary-foreground/80">
                  123 Healthcare Street, Medical District
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/60" />
                <span className="font-open-sans text-primary-foreground/80">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <span className="font-open-sans text-primary-foreground/80">
                  support@healthcamphub.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-open-sans text-primary-foreground/60 text-sm">
              © 2024 HealthCamp Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-open-sans text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="font-open-sans text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="font-open-sans text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;