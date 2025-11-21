import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Financial market data visualization" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Market Analysis Tool</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Quantify News Impact on{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Financial Markets
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Analyze historical price movements before and after major news events. 
            Make data-driven trading decisions with precise volatility metrics.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <BarChart3 className="w-8 h-8 text-primary mb-3 mx-auto" />
              <div className="text-3xl font-bold text-foreground mb-1">Multiple</div>
              <div className="text-sm text-muted-foreground">Currency Pairs & Crypto</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <Clock className="w-8 h-8 text-secondary mb-3 mx-auto" />
              <div className="text-3xl font-bold text-foreground mb-1">Historical</div>
              <div className="text-sm text-muted-foreground">Event Analysis</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <TrendingUp className="w-8 h-8 text-accent mb-3 mx-auto" />
              <div className="text-3xl font-bold text-foreground mb-1">Precise</div>
              <div className="text-sm text-muted-foreground">Pip Movement Data</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/20 transition-all">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary/20 hover:bg-primary/5">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
