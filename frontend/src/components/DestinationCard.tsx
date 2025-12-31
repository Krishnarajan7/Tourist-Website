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
        "group relative overflow-hidden rounded-2xl shadow-travel-md hover:shadow-travel-lg transition-all duration-500 block",
        featured ? "md:col-span-2 md:row-span-2" : ""
      )}
    >
      {/* Image Container - Fixed aspect ratio */}
      <div className={cn(
        "relative w-full",
        featured ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/3]"
      )}>
        <img
          src={image}
          alt={`${name}, ${country}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Strong Gradient Overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-travel-md">
          From {price}
        </div>

        {/* Rating */}
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-sm font-medium text-foreground">{rating.toFixed(1)}</span>
        </div>

        {/* Content - Positioned at bottom inside the card */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center gap-2 text-white/90 mb-1.5">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{country}</span>
          </div>
          <h3 className={cn(
            "font-serif font-bold text-white mb-2",
            featured ? "text-2xl md:text-3xl" : "text-xl"
          )}>
            {name}
          </h3>
          <p className={cn(
            "text-white/80 mb-3 line-clamp-2",
            featured ? "text-base" : "text-sm"
          )}>
            {description}
          </p>
          <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
