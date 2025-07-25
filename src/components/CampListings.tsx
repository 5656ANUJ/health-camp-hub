import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Users, Shield } from "lucide-react";
import { useCamps } from "@/contexts/CampsContext";

const CampListings = () => {
  const { camps } = useCamps();
  const displayCamps = camps.slice(0, 3); // Show only first 3 camps on home page

  const getOrganizerBadge = (type: string) => {
    switch (type) {
      case 'govt':
        return <Badge className="bg-healthcare-success/10 text-healthcare-success border-healthcare-success/20">Government</Badge>;
      case 'ngo':
        return <Badge className="bg-primary/10 text-primary border-primary/20">NGO</Badge>;
      case 'private':
        return <Badge className="bg-healthcare-accent/10 text-healthcare-accent border-healthcare-accent/20">Private</Badge>;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-healthcare-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Upcoming Health Camps
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover free health camps happening near you this week
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {displayCamps.map((camp) => (
            <Card key={camp.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-poppins font-semibold text-xl text-foreground mb-2">
                      {camp.name}
                    </h3>
                    <p className="font-open-sans text-muted-foreground text-sm">
                      by {camp.organizer}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {getOrganizerBadge(camp.type)}
                    {camp.verified && (
                      <Badge className="bg-healthcare-success/10 text-healthcare-success border-healthcare-success/20">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-open-sans text-sm text-foreground">{camp.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-open-sans text-sm text-foreground">{camp.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div className="flex-1">
                      <span className="font-open-sans text-sm text-foreground">{camp.location}</span>
                      <span className="font-open-sans text-sm text-healthcare-success ml-2">
                        ({camp.distance} away)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-open-sans text-sm text-foreground">{camp.participants}</span>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="font-open-sans font-medium text-sm text-foreground mb-3">Services Offered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {camp.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    View Details & Register
                  </Button>
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-open-sans" asChild>
            <a href="/find-camps">View All Camps</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampListings;