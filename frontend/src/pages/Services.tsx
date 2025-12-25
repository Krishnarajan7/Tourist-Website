import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Plane, 
  CreditCard, 
  Car, 
  Map, 
  Hotel, 
  Building2,
  ArrowRight,
  CheckCircle2,
  Phone
} from "lucide-react";

const services = [
  {
    id: "flights",
    title: "Flight Booking",
    description: "Book domestic and international flights at competitive prices with flexible options and 24/7 support.",
    icon: Plane,
    color: "primary" as const,
    features: [
      "Best price guarantee on all bookings",
      "Flexible date changes and cancellations",
      "Multiple airline options",
      "Group booking discounts",
      "Priority boarding arrangements",
      "Airport lounge access options",
    ],
  },
  {
    id: "visa",
    title: "Visa Assistance",
    description: "Hassle-free visa processing for all countries with expert guidance and documentation support.",
    icon: CreditCard,
    color: "secondary" as const,
    features: [
      "Document verification and preparation",
      "Embassy appointment scheduling",
      "Express processing available",
      "Visa tracking and updates",
      "Interview preparation guidance",
      "Multiple entry visa assistance",
    ],
  },
  {
    id: "transport",
    title: "Cab & Local Transport",
    description: "Airport transfers, private cabs, and local transportation arranged for your convenience.",
    icon: Car,
    color: "accent" as const,
    features: [
      "Airport pickup and drop-off",
      "Private chauffeur services",
      "Intercity transfers",
      "Full-day car rentals",
      "Luxury vehicle options",
      "English-speaking drivers",
    ],
  },
  {
    id: "tours",
    title: "Guided Tours",
    description: "Expert-led tours with local insights to make your journey truly memorable and enriching.",
    icon: Map,
    color: "primary" as const,
    features: [
      "Local expert guides",
      "Small group sizes",
      "Customizable itineraries",
      "Skip-the-line access",
      "Photography assistance",
      "Authentic local experiences",
    ],
  },
  {
    id: "hotels",
    title: "Hotel Booking",
    description: "From budget stays to luxury resorts, we find the perfect accommodation for every traveler.",
    icon: Hotel,
    color: "secondary" as const,
    features: [
      "Best price guarantee",
      "Wide range of options",
      "Free cancellation available",
      "Verified guest reviews",
      "Special requests handling",
      "Loyalty program benefits",
    ],
  },
  {
    id: "industrial",
    title: "Industrial Visits",
    description: "Organized industrial tours for students and corporate groups to top facilities worldwide.",
    icon: Building2,
    color: "accent" as const,
    features: [
      "Manufacturing plant tours",
      "Tech company visits",
      "Corporate facility access",
      "Educational programs",
      "Custom group packages",
      "Certificate of participation",
    ],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Flight Booking, Visa, Hotels & Tours | Wanderlust Travel</title>
        <meta name="description" content="Complete travel services including flight booking, visa assistance, hotel reservations, guided tours, local transport, and industrial visit packages." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-sunset">
          <div className="container mx-auto">
            <Breadcrumb items={[{ label: "Services" }]} />
            
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Complete Travel
                <span className="text-gradient-ocean block">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From planning to execution, we handle every aspect of your journey with 
                precision, care, and attention to detail.
              </p>
              <Link to="/contact">
                <Button variant="warm" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Get a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={`#${service.id}`}
                  color={service.color}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 md:py-20 ${index % 2 === 0 ? "bg-muted" : "bg-background"}`}
          >
            <div className="container mx-auto">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    service.color === "primary" ? "bg-primary/10 text-primary" :
                    service.color === "secondary" ? "bg-secondary/20 text-secondary" :
                    "bg-accent/10 text-accent"
                  }`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="default" size="lg">
                      Enquire Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className={`relative ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="aspect-square bg-gradient-warm rounded-3xl opacity-20 absolute inset-0 transform rotate-3" />
                  <div className="aspect-square bg-card rounded-3xl shadow-travel-lg flex items-center justify-center relative">
                    <service.icon className="w-32 h-32 text-primary/20" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="bg-gradient-ocean rounded-3xl p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-foreground mb-4">
                Need a Custom Service Package?
              </h2>
              <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
                We can create a tailored package combining multiple services to meet your specific travel needs.
              </p>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Contact Our Team
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

export default Services;
