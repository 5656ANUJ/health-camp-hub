import { useCamps } from "@/contexts/CampsContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, CheckCircle, Building2, Heart, User } from "lucide-react";

const CampListings = () => {
  const { camps } = useCamps();
  
  // Show first 6 camps for home page
  const displayCamps = camps.slice(0, 6);

  const getOrganizerBadge = (type: string) => {
    switch (type) {
      case 'govt':
        return <Badge variant="default" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200"><Building2 className="w-3 h-3 mr-1" />Government</Badge>;
      case 'ngo':
        return <Badge variant="default" className="bg-blue-100 text-blue-800 hover:bg-blue-200"><Heart className="w-3 h-3 mr-1" />NGO</Badge>;
      case 'private':
        return <Badge variant="default" className="bg-purple-100 text-purple-800 hover:bg-purple-200"><User className="w-3 h-3 mr-1" />Private</Badge>;
      default:
        return null;
    }
  };

  if (camps.length === 0) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Upcoming Health Camps Near You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of people taking charge of their health through free and affordable medical camps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCamps.map((camp, index) => (
            <Card 
              key={camp.id} 
              className="hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm animate-fade-in overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {camp.name}
                  </CardTitle>
                  {camp.verified && (
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 ml-2" />
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  {getOrganizerBadge(camp.type)}
                  <span className="text-sm text-muted-foreground">{camp.organizer}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-medium">{new Date(camp.date).toLocaleDateString('en-IN', { 
                      weekday: 'short', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                    <span className="mx-2">•</span>
                    <span>{camp.time}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span>{camp.location}, {camp.city}</span>
                    {camp.distance && (
                      <>
                        <span className="mx-2">•</span>
                        <span className="text-primary font-medium">{camp.distance}</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span>{camp.participants} expected participants</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Services Offered:</p>
                  <div className="flex flex-wrap gap-1">
                    {camp.services.slice(0, 3).map((service, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                        {service}
                      </Badge>
                    ))}
                    {camp.services.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                        +{camp.services.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
                    Register Now
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All {camps.length} Camps
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampListings;