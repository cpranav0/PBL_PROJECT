import { Search, Calendar, BarChart2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Select Your Asset",
    description: "Choose from major Forex pairs or cryptocurrencies you want to analyze.",
    number: "01",
  },
  {
    icon: Calendar,
    title: "Pick News Event",
    description: "Select the date and time of a historical news event (NFP, Fed decision, etc.).",
    number: "02",
  },
  {
    icon: BarChart2,
    title: "Get Instant Analysis",
    description: "View detailed price movements, pip ranges, and volatility metrics.",
    number: "03",
  },
  {
    icon: TrendingUp,
    title: "Make Informed Decisions",
    description: "Use historical patterns to build better trading strategies.",
    number: "04",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Four simple steps to unlock powerful market insights
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Connector Line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -z-10" />
                )}

                <div className="text-center space-y-4">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 group-hover:border-primary/40 transition-all">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="p-4 rounded-xl bg-card border border-border group-hover:shadow-lg group-hover:shadow-primary/10 transition-all">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
