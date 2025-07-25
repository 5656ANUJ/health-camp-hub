import { Card } from "@/components/ui/card";
import { Search, MousePointer, MapPin } from "lucide-react";

const WorkingProcess = () => {
  const steps = [
    {
      icon: Search,
      title: "Search",
      description: "Enter your location to find nearby health camps",
      step: "01"
    },
    {
      icon: MousePointer,
      title: "Select",
      description: "View camp details, services, and timings",
      step: "02"
    },
    {
      icon: MapPin,
      title: "Attend",
      description: "Get directions and register for the camp",
      step: "03"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-foreground mb-4">
            How It Works
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Finding free healthcare in your area is now just three simple steps away
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative p-8 text-center hover:shadow-lg transition-shadow duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-poppins font-bold text-lg">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center mt-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="font-open-sans text-muted-foreground">
                  {step.description}
                </p>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20 transform -translate-y-1/2"></div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;