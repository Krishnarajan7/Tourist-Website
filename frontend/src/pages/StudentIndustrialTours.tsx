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
  BookOpen,
  Star,
  Quote,
  Stethoscope,
  Car,
  Leaf
} from "lucide-react";

import destinationDubai from "@/assets/destination-dubai.jpg";
import destinationSingapore from "@/assets/destination-singapore.jpg";
import destinationMalaysia from "@/assets/destination-malaysia.jpg";
import destinationVietnam from "@/assets/destination-vietnam.jpg";

const studentPackages = [
  {
    title: "Tech & Innovation Explorer",
    location: "Singapore + Malaysia",
    duration: "5 Days / 4 Nights",
    trainingDays: 2,
    image: destinationSingapore,
    groupSize: "30-50 students",
    targetAudience: "Engineering & IT Students",
    industries: ["Technology", "Data Centers", "Smart Manufacturing"],
    highlights: [
      "2-day hands-on industrial training at tech hub",
      "Google & Microsoft regional office visits",
      "Semiconductor manufacturing plant tour",
      "AI & Robotics lab experience",
      "Certificate of completion",
    ],
    price: "₹45,999",
    originalPrice: "₹52,999",
  },
  {
    title: "Healthcare & Pharma Immersion",
    location: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    trainingDays: 2,
    image: destinationDubai,
    groupSize: "25-40 students",
    targetAudience: "Medical & Pharmacy Students",
    industries: ["Healthcare", "Pharmaceuticals", "Biotech"],
    highlights: [
      "2-day clinical training at Dubai Healthcare City",
      "Pharmaceutical manufacturing facility tour",
      "Medical equipment innovation center",
      "Healthcare AI & diagnostics demo",
      "Interaction with healthcare professionals",
    ],
    price: "₹58,999",
    originalPrice: "₹68,999",
  },
  {
    title: "Manufacturing Excellence Program",
    location: "Kuala Lumpur, Malaysia",
    duration: "3 Days / 2 Nights",
    trainingDays: 1,
    image: destinationMalaysia,
    groupSize: "30-60 students",
    targetAudience: "Mechanical & Automobile Engineering",
    industries: ["Automotive", "Electronics", "Heavy Machinery"],
    highlights: [
      "1-day industrial training at Proton plant",
      "Assembly line operations experience",
      "Quality control workshop",
      "Automotive design center visit",
      "Interactive Q&A with engineers",
    ],
    price: "₹28,999",
    originalPrice: "₹34,999",
  },
  {
    title: "Sustainable Business & Agri-Tech",
    location: "Vietnam",
    duration: "4 Days / 3 Nights",
    trainingDays: 1,
    image: destinationVietnam,
    groupSize: "25-45 students",
    targetAudience: "Agriculture & MBA Students",
    industries: ["Agri-Tech", "Food Processing", "Sustainability"],
    highlights: [
      "1-day sustainable farming training",
      "Food processing plant tour",
      "Organic certification process demo",
      "Green business model workshop",
      "Rural entrepreneurship insights",
    ],
    price: "₹32,999",
    originalPrice: "₹38,999",
  },
];

const benefits = [
  {
    icon: BookOpen,
    title: "Curriculum Aligned",
    description: "Programs designed to complement your academic syllabus with practical industry exposure.",
  },
  {
    icon: GraduationCap,
    title: "Certified Training",
    description: "Get official certificates from industry partners to boost your resume.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn directly from industry professionals and senior engineers.",
  },
  {
    icon: Building2,
    title: "Multi-Industry Exposure",
    description: "Experience diverse sectors from tech to healthcare to manufacturing.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "B.Tech Student, VIT Vellore",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The Singapore tech tour was incredible! The 2-day training at the semiconductor plant gave me hands-on experience that no classroom could provide. I even got a pre-placement offer!",
  },
  {
    name: "Rahul Menon",
    role: "MBA Student, IIM Kozhikode",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The sustainable business tour to Vietnam was eye-opening. Understanding green business models firsthand helped me ace my strategy courses. Highly recommended for management students!",
  },
  {
    name: "Dr. Anjali Reddy",
    role: "Faculty Coordinator, Manipal University",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "We've been organizing student tours with Wanderlust for 3 years now. Their attention to educational value, safety standards, and seamless logistics makes them our preferred partner.",
  },
  {
    name: "Arjun Patel",
    role: "Mechanical Engineering, NIT Trichy",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The Proton automotive plant visit was a dream come true. Seeing the assembly line and talking to real engineers made me certain about my career path. Worth every rupee!",
  },
];

const industryIcons: Record<string, React.ElementType> = {
  "Technology": Cpu,
  "Data Centers": Building2,
  "Smart Manufacturing": Factory,
  "Healthcare": Stethoscope,
  "Pharmaceuticals": Stethoscope,
  "Biotech": Stethoscope,
  "Automotive": Car,
  "Electronics": Cpu,
  "Heavy Machinery": Factory,
  "Agri-Tech": Leaf,
  "Food Processing": Factory,
  "Sustainability": Leaf,
};

const StudentIndustrialTours = () => {
  return (
    <>
      <Helmet>
        <title>Student Industrial Tours - Educational Visits for Schools & Colleges | Wanderlust Travel</title>
        <meta name="description" content="Educational industrial tours for school and college students. Experience hands-on training in tech, healthcare, manufacturing, and more across Asia and Middle East." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-ocean text-secondary-foreground">
          <div className="container mx-auto">
            <Breadcrumb items={[
              { label: "Industrial Visits", href: "/industrial-visits" },
              { label: "Student Tours" }
            ]} />
            
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-secondary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm font-medium">For Schools & Colleges</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Student Industrial
                <span className="block text-accent">Tours & Training</span>
              </h1>
              <p className="text-lg text-secondary-foreground/80 mb-8">
                Bridge classroom learning with real-world industry exposure. Our curated student 
                packages include hands-on industrial training integrated into exciting international trips.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-secondary-foreground/10 rounded-lg px-4 py-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm">1-2 Days Industrial Training</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary-foreground/10 rounded-lg px-4 py-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm">Official Certificates</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary-foreground/10 rounded-lg px-4 py-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm">Faculty-Approved Curriculum</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="heroOutline" size="lg">
                    Request for Institution
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="#packages">
                  <Button variant="heroOutline" size="lg">
                    View Student Packages
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
                Why Choose Our Student Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Learning Beyond Textbooks
              </h2>
              <p className="text-muted-foreground text-lg">
                Our programs are specifically designed for students, with integrated industrial training 
                that complements academic curriculum.
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
                Educational Packages
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Student Industrial Tour Packages
              </h2>
              <p className="text-muted-foreground text-lg">
                Each package includes dedicated industrial training days based on trip duration.
              </p>
            </div>

            <div className="space-y-8">
              {studentPackages.map((pkg, index) => (
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
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent lg:bg-gradient-to-r" />
                      
                      {/* Training Days Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4" />
                          {pkg.trainingDays} Day{pkg.trainingDays > 1 ? 's' : ''} Training
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 lg:hidden">
                        <div className="text-primary-foreground/70 text-sm line-through">{pkg.originalPrice}</div>
                        <span className="text-2xl font-bold text-primary-foreground">{pkg.price}</span>
                        <span className="text-primary-foreground/70"> / student</span>
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-6 md:p-8">
                      {/* Target Audience */}
                      <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-xs font-medium mb-3">
                        <GraduationCap className="w-3.5 h-3.5" />
                        {pkg.targetAudience}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {pkg.industries.map((industry, i) => {
                          const Icon = industryIcons[industry] || Factory;
                          return (
                            <span
                              key={i}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full flex items-center gap-1.5"
                            >
                              <Icon className="w-3 h-3" />
                              {industry}
                            </span>
                          );
                        })}
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
                          <div className="text-muted-foreground text-sm line-through">{pkg.originalPrice}</div>
                          <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                          <span className="text-muted-foreground"> / student</span>
                        </div>
                        <div className="flex gap-3 w-full sm:w-auto">
                          <Link to="/contact" className="flex-1 sm:flex-none">
                            <Button variant="default" className="w-full">
                              Request for Institution
                            </Button>
                          </Link>
                          <Button variant="outline">
                            Download Itinerary
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

        {/* Testimonials */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm mb-3 block">
                Student & Faculty Reviews
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                What Students Say
              </h2>
              <p className="text-muted-foreground text-lg">
                Hear from students and faculty coordinators who have experienced our industrial tours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-travel-sm hover:shadow-travel-md transition-all duration-300 relative"
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Programs CTA */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto">
            <div className="bg-gradient-warm rounded-3xl p-8 md:p-16 text-center">
              <Cpu className="w-16 h-16 text-primary-foreground mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
                Custom Program for Your Institution?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                We can design tailored industrial visit programs based on your institution's 
                curriculum, department requirements, and student batch size.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="heroOutline" size="xl">
                    Contact for Custom Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/industrial-visits">
                  <Button variant="heroOutline" size="xl">
                    View Corporate Programs
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

export default StudentIndustrialTours;