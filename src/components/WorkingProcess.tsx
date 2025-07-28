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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative p-6 sm:p-8 text-center hover:shadow-lg transition-shadow duration-300">
                {/* Step Number */}
                <div className="absolute -top-3 sm:-top-4 left-4 sm:left-8 bg-primary text-primary-foreground w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-poppins font-bold text-sm sm:text-lg">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center mt-3 sm:mt-4">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-poppins font-semibold text-lg sm:text-xl text-foreground mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="font-open-sans text-sm sm:text-base text-muted-foreground">
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