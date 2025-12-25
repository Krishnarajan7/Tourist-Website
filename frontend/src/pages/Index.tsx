import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import DestinationCard from "@/components/DestinationCard";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Plane, 
  CreditCard, 
  Car, 
  Map, 
  Building2, 
  Hotel,
  CheckCircle2,
  Factory
} from "lucide-react";

import destinationDubai from "@/assets/destination-dubai.jpg";
import destinationMalaysia from "@/assets/destination-malaysia.jpg";
import destinationSingapore from "@/assets/destination-singapore.jpg";
import destinationVietnam from "@/assets/destination-vietnam.jpg";

const destinations = [
  {
    name: "Dubai",
    country: "United Arab Emirates",
    image: destinationDubai,
    rating: 4.9,
    price: "$899",
    description: "Experience luxury in the city of dreams with stunning architecture and desert adventures.",
    slug: "dubai",
    featured: true,
  },
  {
    name: "Kuala Lumpur",
    country: "Malaysia",
    image: destinationMalaysia,
    rating: 4.8,
    price: "$599",
    description: "Discover the perfect blend of modernity and tradition in this vibrant capital.",
    slug: "malaysia",
  },
  {
    name: "Singapore",
    country: "Singapore",
    image: destinationSingapore,
    rating: 4.9,
    price: "$749",
    description: "A global city known for its cleanliness, cuisine, and iconic Marina Bay.",
    slug: "singapore",
  },
  {
    name: "Ha Long Bay",
    country: "Vietnam",
    image: destinationVietnam,
    rating: 4.7,
    price: "$449",
    description: "Cruise through emerald waters surrounded by limestone karsts and islands.",
    slug: "vietnam",
  },
];

const services = [
  {
    title: "Flight Booking",
    description: "Book domestic and international flights at competitive prices with flexible options.",
    icon: Plane,
    href: "/services#flights",
    color: "primary" as const,
  },
  {
    title: "Visa Assistance",
    description: "Hassle-free visa processing for all countries with expert guidance and support.",
    icon: CreditCard,
    href: "/services#visa",
    color: "secondary" as const,
  },
  {
    title: "Local Transport",
    description: "Airport transfers, private cabs, and local transportation arranged for you.",
    icon: Car,
    href: "/services#transport",
    color: "accent" as const,
  },
  {
    title: "Guided Tours",
    description: "Expert-led tours with local insights to make your journey truly memorable.",
    icon: Map,
    href: "/services#tours",
    color: "primary" as const,
  },
  {
    title: "Hotel Booking",
    description: "From budget stays to luxury resorts, we find the perfect accommodation for you.",
    icon: Hotel,
    href: "/services#hotels",
    color: "secondary" as const,
  },
  {
    title: "Industrial Visits",
    description: "Organized industrial tours for students and corporate groups to top facilities.",
    icon: Factory,
    href: "/industrial-visits",
    color: "accent" as const,
  },
];

const packages = [
  {
    title: "Dubai Extravaganza - 5 Days of Luxury",
    destination: "Dubai, UAE",
    image: destinationDubai,
    duration: "5 Days / 4 Nights",
    groupSize: "2-6 People",
    rating: 4.9,
    reviews: 324,
    price: "$1,299",
    originalPrice: "$1,599",
    highlights: ["Burj Khalifa Visit", "Desert Safari", "Dubai Mall Tour", "Marina Cruise"],
    featured: true,
  },
  {
    title: "Malaysia Complete Explorer",
    destination: "Malaysia",
    image: destinationMalaysia,
    duration: "7 Days / 6 Nights",
    groupSize: "2-8 People",
    rating: 4.8,
    reviews: 256,
    price: "$999",
    highlights: ["Petronas Towers", "Batu Caves", "Langkawi Island", "Local Cuisine Tour"],
  },
  {
    title: "Singapore City Wonders",
    destination: "Singapore",
    image: destinationSingapore,
    duration: "4 Days / 3 Nights",
    groupSize: "2-4 People",
    rating: 4.9,
    reviews: 412,
    price: "$899",
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Night Safari"],
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Travel Enthusiast",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Our Dubai trip was absolutely magical! The team took care of everything from flights to hotel bookings. The desert safari was the highlight of our journey.",
    rating: 5,
    destination: "Dubai",
  },
  {
    name: "Michael Chen",
    role: "Business Traveler",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Professional service from start to finish. The visa assistance was incredibly helpful, and the itinerary was perfectly planned for our corporate retreat.",
    rating: 5,
    destination: "Singapore",
  },
  {
    name: "Emily Davis",
    role: "Family Vacationer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Traveling with kids can be stressful, but Wanderlust made it so easy! The Malaysia trip was perfect for our family with activities for everyone.",
    rating: 5,
    destination: "Malaysia",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Wanderlust Travel - Discover the World's Most Beautiful Destinations</title>
        <meta name="description" content="Book your dream vacation to Dubai, Malaysia, Singapore, Vietnam and more. Flights, hotels, visa assistance, guided tours & industrial visit packages. Trusted by 50,000+ travelers." />
        <meta name="keywords" content="travel agency, Dubai tours, Malaysia packages, Singapore vacation, Vietnam travel, flight booking, visa assistance, industrial visits" />
        <link rel="canonical" href="https://wanderlust-travel.com" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Destinations Section */}
        <section className="py-20 md:py-28 bg-gradient-sunset">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm mb-3 block">
                  Popular Destinations
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
                  Explore Our Top
                  <span className="text-gradient-warm block">Destinations</span>
                </h2>
              </div>
              <Link to="/destinations">
                <Button variant="outline" size="lg">
                  View All Destinations
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {destinations.map((destination, index) => (
                <DestinationCard key={index} {...destination} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm mb-3 block">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                Complete Travel
                <span className="text-gradient-ocean"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                From planning to execution, we handle every aspect of your journey with precision and care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-foreground text-primary-foreground overflow-hidden">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm mb-3 block">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                  Travel with
                  <span className="text-accent block">Confidence</span>
                </h2>
                <p className="text-primary-foreground/70 text-lg mb-8 leading-relaxed">
                  With over a decade of experience in the travel industry, we've helped thousands 
                  of travelers create unforgettable memories. Our commitment to excellence and 
                  personalized service sets us apart.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    "Handcrafted itineraries tailored to your preferences",
                    "24/7 customer support throughout your journey",
                    "Best price guarantee on all bookings",
                    "Expert local guides in every destination",
                    "Flexible cancellation policies",
                    "Secure and transparent booking process",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-primary-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/about">
                  <Button variant="hero" size="lg">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-4xl font-bold text-accent mb-2">10+</div>
                    <div className="text-primary-foreground/70">Years Experience</div>
                  </div>
                  <img
                    src={destinationMalaysia}
                    alt="Malaysia destination"
                    className="rounded-2xl h-48 w-full object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src={destinationSingapore}
                    alt="Singapore destination"
                    className="rounded-2xl h-48 w-full object-cover"
                  />
                  <div className="bg-gradient-warm rounded-2xl p-6">
                    <div className="text-4xl font-bold text-primary-foreground mb-2">50K+</div>
                    <div className="text-primary-foreground/80">Happy Travelers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm mb-3 block">
                  Featured Packages
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
                  Popular Travel
                  <span className="text-gradient-warm block">Packages</span>
                </h2>
              </div>
              <Link to="/packages">
                <Button variant="outline" size="lg">
                  Browse All Packages
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Visits CTA */}
        <section className="py-20 md:py-28 bg-gradient-ocean text-secondary-foreground">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">For Companies & Institutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                Industrial Visit Packages
              </h2>
              <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
                Organize educational and corporate industrial visits to world-class manufacturing 
                facilities, tech hubs, and innovation centers across Asia and the Middle East.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/industrial-visits">
                  <Button variant="heroOutline" size="xl">
                    Explore Industrial Visits
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="heroOutline" size="xl">
                    Request Custom Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-muted">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm mb-3 block">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                What Our Travelers
                <span className="text-gradient-warm block">Say About Us</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto">
            <div className="bg-gradient-warm rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoMnY0aC0yem0tNiA2aC00di0yaDR2MnptMC02aC00di0yaDR2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
                  Ready to Start Your Adventure?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                  Let us help you plan the perfect trip. Contact our travel experts today 
                  and get a personalized quote for your dream destination.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="heroOutline" size="xl">
                      Get Free Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/packages">
                    <Button variant="heroOutline" size="xl">
                      Browse Packages
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
