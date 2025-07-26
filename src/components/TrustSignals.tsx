import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TrustSignals = () => {
  const partners = [
    "Ministry of Health",
    "Red Cross Society", 
    "UNICEF",
    "WHO",
    "State Health Department"
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Community Health Organizer",
      content: "HealthCamp Hub has revolutionized how we reach patients. We've been able to serve 300% more people since joining the platform.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Camp Attendee",
      content: "Found a free diabetes screening camp just 2km from my home. The process was simple and the care was excellent. Highly recommended!",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "NGO Coordinator",
      content: "The platform makes it so easy to list our camps and track registrations. Our outreach has improved significantly.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-healthcare-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Section */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-semibold text-2xl text-foreground mb-8">
            Trusted by Leading Healthcare Organizations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="font-open-sans font-medium text-foreground">
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-foreground text-center mb-12">
            What Our Community Says
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="font-open-sans text-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-open-sans font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="font-open-sans text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-poppins font-bold text-3xl mb-2">500+</div>
              <div className="font-open-sans text-primary-foreground/90">Health Camps Listed</div>
            </div>
            <div>
              <div className="font-poppins font-bold text-3xl mb-2">1M+</div>
              <div className="font-open-sans text-primary-foreground/90">Patients Served</div>
            </div>
            <div>
              <div className="font-poppins font-bold text-3xl mb-2">50+</div>
              <div className="font-open-sans text-primary-foreground/90">Partner Organizations</div>
            </div>
            <div>
              <div className="font-poppins font-bold text-3xl mb-2">98%</div>
              <div className="font-open-sans text-primary-foreground/90">User Satisfaction</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TrustSignals;