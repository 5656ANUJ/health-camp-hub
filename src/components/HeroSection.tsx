import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-healthcare-secondary via-background to-healthcare-secondary py-16 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-healthcare-accent/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Find Free Health Camps{" "}
              <span className="text-primary">Near You</span>
            </h1>
            <p className="font-open-sans text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Search government, NGO, and trusted private health camps in your area. 
              Access free healthcare services at your fingertips.
            </p>
            
            {/* Search Bar */}
            <div className="bg-card rounded-xl shadow-lg p-4 sm:p-6 mb-8">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-open-sans text-sm sm:text-base"
                  />
                </div>
                <Button className="bg-primary hover:bg-primary/90 px-6 sm:px-8 py-3 font-open-sans font-semibold w-full sm:w-auto" asChild>
                  <a href="/find-camps">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Search Camps
                  </a>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <div className="text-center">
                <div className="font-poppins font-bold text-xl sm:text-2xl lg:text-3xl text-primary mb-1">500+</div>
                <div className="font-open-sans text-xs sm:text-sm text-muted-foreground">Camps Listed</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-xl sm:text-2xl lg:text-3xl text-primary mb-1">1M+</div>
                <div className="font-open-sans text-xs sm:text-sm text-muted-foreground">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-xl sm:text-2xl lg:text-3xl text-primary mb-1">50+</div>
                <div className="font-open-sans text-xs sm:text-sm text-muted-foreground">Trusted Partners</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative mt-8 lg:mt-0">
            <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-primary/5 to-healthcare-accent/5 border-0 shadow-xl">
              <div className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-primary rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-primary-foreground" />
                </div>
                <h3 className="font-poppins font-semibold text-lg sm:text-xl text-foreground mb-4">
                  Next Camp in Your Area
                </h3>
                <div className="space-y-2 sm:space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="font-open-sans text-sm text-muted-foreground">Date:</span>
                    <span className="font-open-sans text-sm font-medium">Tomorrow, 9 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-open-sans text-sm text-muted-foreground">Service:</span>
                    <span className="font-open-sans text-sm font-medium">General Checkup</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-open-sans text-sm text-muted-foreground">Distance:</span>
                    <span className="font-open-sans text-sm font-medium text-healthcare-success">2.5 km away</span>
                  </div>
                </div>
                <Button className="w-full mt-4 sm:mt-6 bg-healthcare-accent hover:bg-healthcare-accent/90 text-sm sm:text-base">
                  View Details
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;