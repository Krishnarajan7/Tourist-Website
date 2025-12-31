import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf,
  Heart,
  Brain,
  Users,
  Sparkles,
  Sun,
  Moon,
  TreePine,
  Music,
  UtensilsCrossed,
  Smile,
  Wind,
  Mountain,
  Star,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Shield,
  Award,
  Zap,
} from "lucide-react";

const programObjectives = [
  {
    icon: Brain,
    title: "Mental Refreshment",
    description: "Disconnect from digital distractions and reconnect with inner peace through mindfulness practices.",
  },
  {
    icon: Heart,
    title: "Stress Reduction",
    description: "Evidence-based techniques to manage workplace stress and build emotional resilience.",
  },
  {
    icon: Users,
    title: "Team Bonding",
    description: "Collaborative activities that strengthen interpersonal connections and team dynamics.",
  },
  {
    icon: Leaf,
    title: "Holistic Health",
    description: "Integrate physical, mental, and spiritual wellness for comprehensive well-being.",
  },
  {
    icon: Sparkles,
    title: "Lifestyle Inspiration",
    description: "Practical tools and habits to maintain work-life balance beyond the retreat.",
  },
];

const itinerary = [
  {
    day: 1,
    title: "Arrival & Grounding",
    theme: "Welcome to Wellness",
    icon: Sun,
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    activities: [
      { time: "14:00", activity: "Check-in & Welcome Refreshments", icon: MapPin },
      { time: "15:30", activity: "Resort Orientation & Nature Walk", icon: TreePine },
      { time: "17:00", activity: "Opening Circle & Intention Setting", icon: Users },
      { time: "18:00", activity: "Gentle Yoga & Breathing Session", icon: Wind },
      { time: "19:30", activity: "Organic Farm-to-Table Dinner", icon: UtensilsCrossed },
      { time: "21:00", activity: "Sound Healing & Sleep Meditation", icon: Music },
    ],
  },
  {
    day: 2,
    title: "Mind & Body Harmony",
    theme: "Deep Restoration",
    icon: Brain,
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    activities: [
      { time: "06:00", activity: "Sunrise Yoga & Pranayama", icon: Sun },
      { time: "07:30", activity: "Detox Breakfast & Herbal Teas", icon: UtensilsCrossed },
      { time: "09:00", activity: "Mindfulness Meditation Workshop", icon: Brain },
      { time: "11:00", activity: "Laughing Therapy Session", icon: Smile },
      { time: "12:30", activity: "Ayurvedic Lunch Experience", icon: Leaf },
      { time: "14:30", activity: "Forest Bathing (Shinrin-yoku)", icon: TreePine },
      { time: "17:00", activity: "Aromatherapy Spa Treatment", icon: Sparkles },
      { time: "19:00", activity: "Nutrition & Wellness Workshop", icon: Heart },
    ],
  },
  {
    day: 3,
    title: "Team Synergy",
    theme: "Connection & Growth",
    icon: Users,
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    activities: [
      { time: "06:30", activity: "Dynamic Yoga Flow", icon: Wind },
      { time: "08:00", activity: "Energizing Superfood Breakfast", icon: UtensilsCrossed },
      { time: "09:30", activity: "Corporate Wellness Masterclass", icon: Award },
      { time: "11:30", activity: "Team Building in Nature", icon: Mountain },
      { time: "13:00", activity: "Mediterranean Wellness Lunch", icon: Leaf },
      { time: "15:00", activity: "Cultural Heritage Visit", icon: MapPin },
      { time: "17:30", activity: "Therapeutic Massage Session", icon: Sparkles },
      { time: "19:30", activity: "Candlelit Dinner & Sharing Circle", icon: Users },
    ],
  },
  {
    day: 4,
    title: "Integration & Departure",
    theme: "Carry Wellness Forward",
    icon: Moon,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    activities: [
      { time: "06:00", activity: "Final Sunrise Meditation", icon: Sun },
      { time: "07:30", activity: "Reflective Journaling Session", icon: Brain },
      { time: "08:30", activity: "Farewell Breakfast", icon: UtensilsCrossed },
      { time: "10:00", activity: "Closing Circle & Commitments", icon: Heart },
      { time: "11:30", activity: "Wellness Kit Distribution", icon: Sparkles },
      { time: "12:00", activity: "Check-out & Departure", icon: MapPin },
    ],
  },
];

const highlights = [
  {
    icon: Award,
    title: "Expert-Led Sessions",
    description: "Certified yoga instructors, licensed therapists, and wellness coaches with 10+ years experience.",
  },
  {
    icon: TreePine,
    title: "Eco-Friendly Resorts",
    description: "Sustainable luxury accommodations nestled in pristine natural environments.",
  },
  {
    icon: Shield,
    title: "Customized Programs",
    description: "Tailored experiences based on your team's specific wellness goals and preferences.",
  },
  {
    icon: Zap,
    title: "Measurable Outcomes",
    description: "Pre and post wellness assessments to track improvement in stress and well-being.",
  },
  {
    icon: UtensilsCrossed,
    title: "Nourishing Cuisine",
    description: "Organic, locally-sourced meals designed by nutritionists for optimal health.",
  },
  {
    icon: Users,
    title: "Small Group Focus",
    description: "Intimate groups of 15-25 participants for personalized attention and deeper connections.",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "HR Director, Tech Solutions Ltd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    text: "This program transformed our team dynamics. The stress levels reduced significantly, and we returned with renewed energy and better collaboration.",
  },
  {
    name: "Priya Sharma",
    role: "CEO, Creative Agency",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    text: "The perfect blend of relaxation and team building. Our employees still practice the meditation techniques learned during the retreat.",
  },
  {
    name: "Amit Patel",
    role: "Operations Head, Manufacturing Co",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    text: "Exceptionally well-organized program. The forest bathing and sound healing sessions were highlights that everyone appreciated.",
  },
];

const CorporateWellness = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Corporate Wellness Program" },
  ];

  return (
    <>
      <Helmet>
        <title>4 Days Corporate Wellness Program | Health & Mind Tourism | Wanderlust</title>
        <meta
          name="description"
          content="Transform your team with our 4-day corporate wellness retreat. Expert-led yoga, meditation, stress management, and team building in eco-friendly resorts."
        />
        <meta
          name="keywords"
          content="corporate wellness, team retreat, stress management, yoga retreat, meditation program, corporate health, wellness tourism"
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Serene mountain wellness retreat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

        <div className="container relative z-10 text-center px-4 pt-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6 animate-fade-up">
            <Leaf className="w-4 h-4 text-emerald-300" />
            <span className="text-white/90 text-sm font-medium">Wellness Tourism Experience</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up stagger-1">
            Health & Mind Tourism
            <span className="block text-emerald-300 mt-2">4 Days Corporate Wellness Program</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-up stagger-2">
            A transformative retreat designed for professionals and corporate teams seeking mental refreshment, 
            stress reduction, and holistic well-being in nature's embrace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
            <Link to="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 px-8 shadow-lg shadow-emerald-600/30">
                <Phone className="w-5 h-5" />
                Enquire Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2 px-8">
                <Mail className="w-5 h-5" />
                Customize Program
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-12 animate-fade-up stagger-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4</div>
              <div className="text-white/70 text-sm">Days</div>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">20+</div>
              <div className="text-white/70 text-sm">Activities</div>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15-25</div>
              <div className="text-white/70 text-sm">Participants</div>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-white/70 text-sm">Organic Meals</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <main className="bg-gradient-to-b from-stone-50 to-white">
        <div className="container pt-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Program Objectives */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Program Objectives
              </h2>
              <p className="text-muted-foreground text-lg">
                A holistic approach to corporate wellness, designed to nurture mind, body, and team spirit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {programObjectives.map((objective, index) => (
                <Card
                  key={objective.title}
                  className="group bg-white border-none shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <objective.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{objective.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{objective.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Day-wise Itinerary */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-50/50 to-stone-50">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Your Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                4-Day Wellness Itinerary
              </h2>
              <p className="text-muted-foreground text-lg">
                Each day is thoughtfully curated to progressively deepen your wellness experience.
              </p>
            </div>

            <div className="space-y-8">
              {itinerary.map((day, dayIndex) => (
                <div
                  key={day.day}
                  className="animate-fade-up"
                  style={{ animationDelay: `${dayIndex * 150}ms` }}
                >
                  <Card className={`overflow-hidden border-2 ${day.borderColor} bg-white shadow-lg`}>
                    {/* Day Header */}
                    <div className={`bg-gradient-to-r ${day.color} p-6 md:p-8`}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center shadow-md">
                            <day.icon className="w-7 h-7 text-emerald-700" />
                          </div>
                          <div>
                            <div className="text-emerald-700 font-semibold text-sm uppercase tracking-wider">
                              Day {day.day}
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">{day.title}</h3>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur rounded-full px-4 py-2">
                          <Sparkles className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-700 font-medium text-sm">{day.theme}</span>
                        </div>
                      </div>
                    </div>

                    {/* Activities */}
                    <CardContent className="p-6 md:p-8">
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {day.activities.map((activity, actIndex) => (
                          <div
                            key={actIndex}
                            className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 hover:bg-emerald-50 transition-colors duration-300 group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                              <activity.icon className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                                <span className="text-xs font-semibold text-emerald-600">{activity.time}</span>
                              </div>
                              <p className="text-sm font-medium text-foreground leading-snug">{activity.activity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Program Highlights
              </h2>
              <p className="text-muted-foreground text-lg">
                What sets our corporate wellness retreat apart from conventional team outings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="group relative p-6 rounded-2xl bg-white border border-stone-200 hover:border-emerald-200 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full blur-3xl" />
          </div>

          <div className="container px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-emerald-300 font-semibold text-sm uppercase tracking-wider mb-3">
                  All-Inclusive Package
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What's Included
                </h2>
                <p className="text-emerald-100/80 text-lg mb-8">
                  Everything you need for a transformative wellness experience, with no hidden costs.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "3 Nights Eco-Resort Accommodation",
                    "All Organic Meals & Beverages",
                    "Expert-Led Wellness Sessions",
                    "Spa & Therapy Treatments",
                    "Transportation from Pick-up Point",
                    "Wellness Kit & Materials",
                    "Post-Program Support Guide",
                    "Group Photo & Video Coverage",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
                  alt="Wellness retreat spa"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-sm text-muted-foreground mb-1">Starting from</div>
                  <div className="text-3xl font-bold text-emerald-600">₹35,000</div>
                  <div className="text-sm text-muted-foreground">per person</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Corporate Teams Say
              </h2>
              <p className="text-muted-foreground text-lg">
                Hear from organizations that have experienced our wellness programs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.name}
                  className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-stone-50">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Experience Glimpse
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Retreat Gallery
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&q=80", alt: "Yoga session" },
                { src: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=400&q=80", alt: "Meditation" },
                { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80", alt: "Spa therapy" },
                { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", alt: "Nature walk" },
                { src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80", alt: "Morning yoga" },
                { src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&q=80", alt: "Team activity" },
                { src: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&q=80", alt: "Sound healing" },
                { src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&q=80", alt: "Healthy meals" },
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-xl group animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-200 rounded-full blur-3xl" />
          </div>

          <div className="container px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Team's Well-being?
              </h2>
              <p className="text-emerald-100 text-lg mb-8">
                Contact us to discuss your team's wellness goals and customize the perfect retreat experience.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 gap-2 px-8 shadow-lg">
                    <Phone className="w-5 h-5" />
                    Enquire Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2 px-8">
                    <Calendar className="w-5 h-5" />
                    Schedule a Call
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>wellness@wanderlust.com</span>
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

export default CorporateWellness;
