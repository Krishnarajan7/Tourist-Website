import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  GraduationCap, 
  Users, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  ArrowRight,
  Factory,
  Cpu,
  Briefcase
} from "lucide-react";

import destinationDubai from "@/assets/destination-dubai.jpg";
import destinationSingapore from "@/assets/destination-singapore.jpg";
import destinationMalaysia from "@/assets/destination-malaysia.jpg";

const industrialPackages = [
  {
    title: "Dubai Industrial Innovation Tour",
    location: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    image: destinationDubai,
    groupSize: "15-30 participants",
    industries: ["Aerospace", "Construction", "Renewable Energy"],
    highlights: [
      "Visit to Dubai Aerospace Enterprise",
      "Burj Khalifa construction insights",
      "Solar Park tour",
      "Free zone facility visits",
      "Networking sessions with local businesses",
    ],
    price: "$1,899",
  },
  {
    title: "Singapore Tech & Manufacturing Hub",
    location: "Singapore",
    duration: "4 Days / 3 Nights",
    image: destinationSingapore,
    groupSize: "10-25 participants",
    industries: ["Technology", "Pharmaceuticals", "Electronics"],
    highlights: [
      "Changi Airport operations tour",
      "Semiconductor manufacturing visit",
      "Biotech research center tour",
      "Smart nation initiatives briefing",
      "Innovation lab experiences",
    ],
    price: "$1,599",
  },
  {
    title: "Malaysia Manufacturing Excellence",
    location: "Kuala Lumpur, Malaysia",
    duration: "4 Days / 3 Nights",
    image: destinationMalaysia,
    groupSize: "15-35 participants",
    industries: ["Automotive", "Electronics", "Palm Oil Processing"],
    highlights: [
      "Proton automotive plant tour",
      "Electronics manufacturing zone",
      "Palm oil processing facility",
      "Petronas headquarters visit",
      "Cultural immersion activities",
    ],
    price: "$1,299",
  },
];

const benefits = [
  {
    icon: GraduationCap,
    title: "Educational Value",
    description: "Gain practical insights that complement classroom learning with real-world industry exposure.",
  },
  {
    icon: Users,
    title: "Networking Opportunities",
    description: "Connect with industry professionals, potential employers, and like-minded peers.",
  },
  {
    icon: Briefcase,
    title: "Career Development",
    description: "Understand industry requirements and career pathways in various sectors.",
  },
  {
    icon: Building2,
    title: "World-Class Facilities",
    description: "Access to leading manufacturing plants, tech hubs, and innovation centers.",
  },
];

const IndustrialVisits = () => {
  return (
    <>
      <Helmet>
        <title>Industrial Visit Packages - Corporate & Educational Tours | Wanderlust Travel</title>
        <meta name="description" content="Organize industrial visits to manufacturing plants, tech companies, and innovation centers in Dubai, Singapore, and Malaysia for students and corporate groups." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-ocean text-secondary-foreground">
          <div className="container mx-auto">
            <Breadcrumb items={[{ label: "Industrial Visits" }]} />
            
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-secondary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Factory className="w-4 h-4" />
                <span className="text-sm font-medium">For Companies & Institutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Industrial Visit
                <span className="block text-accent">Packages</span>
              </h1>
              <p className="text-lg text-secondary-foreground/80 mb-8">
                Organize educational and corporate industrial visits to world-class manufacturing 
                facilities, tech hubs, and innovation centers across Asia and the Middle East.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="heroOutline" size="lg">
                    Request Custom Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="#packages">
                  <Button variant="heroOutline" size="lg">
                    View Packages
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm mb-3 block">
                Why Choose Industrial Visits
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Benefits of Industrial Tours
              </h2>
              <p className="text-muted-foreground text-lg">
                Bridge the gap between theory and practice with hands-on industry exposure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-travel-sm hover:shadow-travel-md transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm mb-3 block">
                Featured Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Industrial Visit Packages
              </h2>
            </div>

            <div className="space-y-8">
              {industrialPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl overflow-hidden shadow-travel-md hover:shadow-travel-lg transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-3">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:hidden">
                        <span className="text-2xl font-bold text-primary-foreground">{pkg.price}</span>
                        <span className="text-primary-foreground/70"> / person</span>
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-6 md:p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pkg.industries.map((industry, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                        {pkg.title}
                      </h3>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {pkg.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {pkg.duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          {pkg.groupSize}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-2 mb-6">
                        {pkg.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-sm text-foreground/80">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-border">
                        <div className="hidden lg:block">
                          <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                          <span className="text-muted-foreground"> / person</span>
                        </div>
                        <div className="flex gap-3 w-full sm:w-auto">
                          <Link to="/contact" className="flex-1 sm:flex-none">
                            <Button variant="default" className="w-full">
                              Request Quote
                            </Button>
                          </Link>
                          <Button variant="outline">
                            Download Brochure
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Programs */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="bg-gradient-warm rounded-3xl p-8 md:p-16 text-center">
              <Cpu className="w-16 h-16 text-primary-foreground mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
                Need a Custom Industrial Visit Program?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                We can design tailored industrial visit programs based on your institution's 
                curriculum, industry focus, and group requirements.
              </p>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default IndustrialVisits;
