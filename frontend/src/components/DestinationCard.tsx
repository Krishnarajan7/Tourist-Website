import { Link } from "react-router-dom";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  name: string;
  country: string;
  image: string;
  rating: number;
  price: string;
  description: string;
  slug: string;
  featured?: boolean;
}

const DestinationCard = ({
  name,
  country,
  image,
  rating,
  price,
  description,
  slug,
  featured = false,
}: DestinationCardProps) => {
  return (
    <Link
      to={`/destinations/${slug}`}
      className={cn(
        "group relative overflow-hidden rounded-2xl shadow-travel-md hover:shadow-travel-lg transition-all duration-500",
        featured ? "md:col-span-2 md:row-span-2" : ""
      )}
    >
      {/* Image */}
      <div className={cn(
        "relative overflow-hidden",
        featured ? "h-[400px] md:h-full" : "h-64 md:h-72"
      )}>
        <img
          src={image}
          alt={`${name}, ${country}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        
        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-travel-md">
          From {price}
        </div>

        {/* Rating */}
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-sm font-medium text-foreground">{rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-2 text-primary-foreground/80 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{country}</span>
        </div>
        <h3 className={cn(
          "font-serif font-bold text-primary-foreground mb-2",
          featured ? "text-3xl" : "text-xl"
        )}>
          {name}
        </h3>
        <p className={cn(
          "text-primary-foreground/70 mb-4 line-clamp-2",
          featured ? "text-base" : "text-sm"
        )}>
          {description}
        </p>
        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
          <span>Explore</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
