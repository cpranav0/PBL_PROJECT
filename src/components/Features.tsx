import { Calendar, LineChart, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import featureAnalysis from "@/assets/feature-analysis.jpg";
import featureHistorical from "@/assets/feature-historical.jpg";
import featureMarkets from "@/assets/feature-markets.jpg";

const features = [
  {
    icon: LineChart,
    title: "Precise Impact Analysis",
    description: "Measure exact pip movements, percentage changes, and volatility spikes during news events across multiple timeframes.",
    image: featureAnalysis,
  },
  {
    icon: Calendar,
    title: "Historical Event Database",
    description: "Access comprehensive data on major economic announcements, central bank decisions, and market-moving events.",
    image: featureHistorical,
  },
  {
    icon: Globe,
    title: "Multi-Market Support",
    description: "Analyze Forex pairs and cryptocurrencies with data from MT5. Track correlations across different asset classes.",
    image: featureMarkets,
  },
  {
    icon: Zap,
    title: "Real-Time Calculations",
    description: "Get instant calculations of high/low ranges, average movements, and statistical analysis of price action.",
    image: null,
  },
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Professional Traders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to quantify and understand market reactions to news events
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {feature.image && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
