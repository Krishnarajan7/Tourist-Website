import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import DestinationCard from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import { Search, Filter, MapPin } from "lucide-react";
import { useState } from "react";

import destinationDubai from "@/assets/destination-dubai.jpg";
import destinationMalaysia from "@/assets/destination-malaysia.jpg";
import destinationSingapore from "@/assets/destination-singapore.jpg";
import destinationVietnam from "@/assets/destination-vietnam.jpg";

const allDestinations = [
  {
    name: "Dubai",
    country: "United Arab Emirates",
    image: destinationDubai,
    rating: 4.9,
    price: "$899",
    description: "Experience luxury in the city of dreams with stunning architecture, world-class shopping, and thrilling desert adventures.",
    slug: "dubai",
    region: "Middle East",
  },
  {
    name: "Kuala Lumpur",
    country: "Malaysia",
    image: destinationMalaysia,
    rating: 4.8,
    price: "$599",
    description: "Discover the perfect blend of modernity and tradition in this vibrant capital with iconic twin towers.",
    slug: "malaysia",
    region: "Southeast Asia",
  },
  {
    name: "Singapore",
    country: "Singapore",
    image: destinationSingapore,
    rating: 4.9,
    price: "$749",
    description: "A global city known for its cleanliness, incredible cuisine, and the iconic Marina Bay skyline.",
    slug: "singapore",
    region: "Southeast Asia",
  },
  {
    name: "Ha Long Bay",
    country: "Vietnam",
    image: destinationVietnam,
    rating: 4.7,
    price: "$449",
    description: "Cruise through emerald waters surrounded by thousands of limestone karsts and islands.",
    slug: "vietnam",
    region: "Southeast Asia",
  },
  {
    name: "Abu Dhabi",
    country: "United Arab Emirates",
    image: destinationDubai,
    rating: 4.8,
    price: "$799",
    description: "Explore the capital of UAE with its magnificent mosques, cultural sites, and modern attractions.",
    slug: "abu-dhabi",
    region: "Middle East",
  },
  {
    name: "Langkawi",
    country: "Malaysia",
    image: destinationMalaysia,
    rating: 4.6,
    price: "$499",
    description: "A tropical paradise with pristine beaches, lush rainforests, and duty-free shopping.",
    slug: "langkawi",
    region: "Southeast Asia",
  },
];

const regions = ["All Regions", "Southeast Asia", "Middle East"];

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  const filteredDestinations = allDestinations.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === "All Regions" || dest.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <>
      <Helmet>
        <title>Destinations - Explore Dubai, Malaysia, Singapore & Vietnam | Wanderlust Travel</title>
        <meta name="description" content="Discover our curated selection of destinations including Dubai, Malaysia, Singapore, and Vietnam. Find your perfect vacation spot with Wanderlust Travel." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-sunset">
          <div className="container mx-auto">
            <Breadcrumb items={[{ label: "Destinations" }]} />
            
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Explore Our
                <span className="text-gradient-warm block">Destinations</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                From the bustling streets of Dubai to the serene waters of Ha Long Bay, 
                discover destinations that will take your breath away.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border sticky top-[72px] bg-background/95 backdrop-blur-md z-40">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <Filter className="w-5 h-5 text-muted-foreground shrink-0" />
                {regions.map((region) => (
                  <Button
                    key={region}
                    variant={selectedRegion === region ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedRegion(region)}
                    className="shrink-0"
                  >
                    {region}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            {filteredDestinations.length > 0 ? (
              <>
                <div className="flex items-center gap-2 text-muted-foreground mb-8">
                  <MapPin className="w-4 h-4" />
                  <span>{filteredDestinations.length} destinations found</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {filteredDestinations.map((destination, index) => (
                    <DestinationCard key={index} {...destination} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  No destinations found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <Button onClick={() => { setSearchQuery(""); setSelectedRegion("All Regions"); }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Destinations;
