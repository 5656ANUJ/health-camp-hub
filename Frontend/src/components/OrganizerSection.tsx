import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users, MapPin, Calendar, TrendingUp } from "lucide-react";

const OrganizerSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Reach More People",
      description: "Connect with patients in your community who need healthcare services"
    },
    {
      icon: MapPin,
      title: "Easy Location Sharing",
      description: "Help people find your camp with integrated map and directions"
    },
    {
      icon: Calendar,
      title: "Schedule Management",
      description: "Manage your camp dates and timings with our easy-to-use tools"
    },
    {
      icon: TrendingUp,
      title: "Track Impact",
      description: "Monitor registrations and see the positive impact you're making"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-foreground mb-6">
              List Your Health Camp
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground mb-8">
              Are you organizing a health camp? Join our platform to reach more people 
              in need of healthcare services. It's completely free for verified organizers.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-open-sans font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="font-open-sans text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/list-camp">
                  <Plus className="w-5 h-5 mr-2" />
                  List Your Camp
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Form Preview */}
          <Card className="p-8 bg-gradient-to-br from-healthcare-secondary to-healthcare-secondary/50">
            <h3 className="font-poppins font-semibold text-xl text-foreground mb-6">
              Quick Camp Listing
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="font-open-sans text-sm font-medium text-foreground block mb-2">
                  Camp Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Free Eye Checkup Camp"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-open-sans"
                />
              </div>

              <div>
                <label className="font-open-sans text-sm font-medium text-foreground block mb-2">
                  Organization Type
                </label>
                <select className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-open-sans">
                  <option>Government Hospital/Clinic</option>
                  <option>NGO/Non-Profit</option>
                  <option>Private Hospital</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-open-sans text-sm font-medium text-foreground block mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-open-sans"
                  />
                </div>
                <div>
                  <label className="font-open-sans text-sm font-medium text-foreground block mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-open-sans"
                  />
                </div>
              </div>

              <div>
                <label className="font-open-sans text-sm font-medium text-foreground block mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter full address"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-open-sans"
                />
              </div>

              <div>
                <label className="font-open-sans text-sm font-medium text-foreground block mb-2">
                  Services Offered
                </label>
                <textarea
                  placeholder="List the healthcare services you'll provide"
                  rows={3}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-open-sans resize-none"
                />
              </div>

              <Button className="w-full bg-healthcare-accent hover:bg-healthcare-accent/90">
                Submit for Review
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrganizerSection;