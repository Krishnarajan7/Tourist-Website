import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import PackageCard from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";

import destinationDubai from "@/assets/destination-dubai.jpg";
import destinationMalaysia from "@/assets/destination-malaysia.jpg";
import destinationSingapore from "@/assets/destination-singapore.jpg";
import destinationVietnam from "@/assets/destination-vietnam.jpg";

const allPackages = [
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
    category: "luxury",
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
    category: "adventure",
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
    category: "city",
  },
  {
    title: "Vietnam Heritage Trail",
    destination: "Vietnam",
    image: destinationVietnam,
    duration: "8 Days / 7 Nights",
    groupSize: "2-10 People",
    rating: 4.7,
    reviews: 189,
    price: "$849",
    highlights: ["Ha Long Bay Cruise", "Hanoi Old Quarter", "Hoi An Ancient Town", "Cu Chi Tunnels"],
    category: "cultural",
  },
  {
    title: "Dubai Romantic Getaway",
    destination: "Dubai, UAE",
    image: destinationDubai,
    duration: "4 Days / 3 Nights",
    groupSize: "2 People",
    rating: 4.9,
    reviews: 178,
    price: "$1,499",
    highlights: ["Private Desert Dinner", "Spa Treatment", "Yacht Sunset Cruise", "Fine Dining Experience"],
    category: "honeymoon",
  },
  {
    title: "Singapore Family Fun",
    destination: "Singapore",
    image: destinationSingapore,
    duration: "5 Days / 4 Nights",
    groupSize: "4-6 People",
    rating: 4.8,
    reviews: 234,
    price: "$1,199",
    highlights: ["Universal Studios", "Sentosa Beach", "S.E.A. Aquarium", "Singapore Zoo"],
    category: "family",
  },
];

const categories = [
  { id: "all", label: "All Packages" },
  { id: "luxury", label: "Luxury" },
  { id: "adventure", label: "Adventure" },
  { id: "city", label: "City Breaks" },
  { id: "cultural", label: "Cultural" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "family", label: "Family" },
];

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPackages = selectedCategory === "all" 
    ? allPackages 
    : allPackages.filter(pkg => pkg.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Travel Packages - Dubai, Malaysia, Singapore & Vietnam Tours | Wanderlust Travel</title>
        <meta name="description" content="Explore our curated travel packages to Dubai, Malaysia, Singapore, and Vietnam. From luxury getaways to adventure tours, find your perfect vacation package." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-sunset">
          <div className="container mx-auto">
            <Breadcrumb items={[{ label: "Packages" }]} />
            
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Travel
                <span className="text-gradient-warm block">Packages</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Carefully curated packages that offer the best experiences, accommodations, 
                and value for your dream vacation.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border sticky top-[72px] bg-background/95 backdrop-blur-md z-40">
          <div className="container mx-auto">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                <SlidersHorizontal className="w-5 h-5" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="shrink-0"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <Filter className="w-4 h-4" />
              <span>{filteredPackages.length} packages found</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPackages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Packages;
