import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Award, 
  Globe, 
  Heart, 
  ArrowRight,
  CheckCircle2,
  MapPin
} from "lucide-react";

import destinationMalaysia from "@/assets/destination-malaysia.jpg";
import destinationVietnam from "@/assets/destination-vietnam.jpg";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Destinations" },
  { value: "50K+", label: "Happy Travelers" },
  { value: "500+", label: "Partner Hotels" },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We live and breathe travel. Our team shares your wanderlust and brings firsthand experience to every journey we plan.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We go above and beyond to ensure every trip exceeds your expectations.",
  },
  {
    icon: Globe,
    title: "Global Expertise",
    description: "With partnerships across the globe, we offer authentic local experiences backed by international standards.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Every hotel, tour, and service we recommend is personally vetted to meet our high standards of quality.",
  },
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "James Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "Travel Consultant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Michael Torres",
    role: "Customer Success",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Your Trusted Travel Partner | Wanderlust Travel</title>
        <meta name="description" content="Learn about Wanderlust Travel - over 10 years of creating unforgettable travel experiences. Meet our team and discover our passion for exploration." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-sunset">
          <div className="container mx-auto">
            <Breadcrumb items={[{ label: "About Us" }]} />
            
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Our Story
              </h1>
              <p className="text-lg text-muted-foreground">
                For over a decade, we've been turning travel dreams into reality. 
                Discover who we are and why thousands of travelers trust us with their adventures.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm mb-3 block">
                  Who We Are
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Crafting Unforgettable
                  <span className="text-gradient-warm block">Travel Experiences</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Wanderlust Travel was founded in 2014 with a simple mission: to make world-class 
                  travel accessible to everyone. What started as a small team of passionate travelers 
                  has grown into a full-service travel agency serving clients worldwide.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We believe that travel is more than just visiting new places—it's about creating 
                  meaningful connections, discovering different cultures, and building memories that 
                  last a lifetime. That's why we pour our hearts into every itinerary we create.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Today, we're proud to have helped over 50,000 travelers explore destinations 
                  across Asia and the Middle East, from the glittering towers of Dubai to the 
                  ancient temples of Vietnam.
                </p>
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    Start Your Journey
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={destinationMalaysia}
                  alt="Team exploring Malaysia"
                  className="rounded-2xl h-64 object-cover"
                />
                <img
                  src={destinationVietnam}
                  alt="Vietnam experience"
                  className="rounded-2xl h-64 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-foreground text-primary-foreground">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm mb-3 block">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                What Drives Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-travel-sm hover:shadow-travel-md transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm mb-3 block">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Meet the People Behind
                <span className="text-gradient-warm block">Your Adventures</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="relative mb-4 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="bg-gradient-warm rounded-3xl p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join thousands of happy travelers who have trusted us with their adventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="heroOutline" size="xl">
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/packages">
                  <Button variant="heroOutline" size="xl">
                    View Packages
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
