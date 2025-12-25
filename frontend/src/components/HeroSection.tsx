import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, MapPin, Shield, Clock, Users } from "lucide-react";
import heroDubai from "@/assets/hero-dubai.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroDubai}
          alt="Dubai skyline at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm text-primary-foreground font-medium">
              Trusted by 50,000+ Travelers Worldwide
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight animate-fade-up delay-100">
            Discover the World's
            <span className="block text-accent">Most Beautiful Places</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed animate-fade-up delay-200">
            From the towering skyscrapers of Dubai to the serene waters of Vietnam, 
            we craft unforgettable journeys tailored just for you. Your adventure begins here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
            <Link to="/destinations">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Explore Destinations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up delay-400">
            {[
              { icon: MapPin, value: "50+", label: "Destinations" },
              { icon: Users, value: "50K+", label: "Happy Travelers" },
              { icon: Shield, value: "100%", label: "Secure Booking" },
              { icon: Clock, value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-accent" />
                  <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
                    {stat.value}
                  </span>
                </div>
                <span className="text-sm text-primary-foreground/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-primary-foreground/60 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
