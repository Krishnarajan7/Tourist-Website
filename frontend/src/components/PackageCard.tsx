import { Calendar, Users, Star, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  title: string;
  destination: string;
  image: string;
  duration: string;
  groupSize: string;
  rating: number;
  reviews: number;
  price: string;
  originalPrice?: string;
  highlights: string[];
  featured?: boolean;
}

const PackageCard = ({
  title,
  destination,
  image,
  duration,
  groupSize,
  rating,
  reviews,
  price,
  originalPrice,
  highlights,
  featured = false,
}: PackageCardProps) => {
  return (
    <div
      className={cn(
        "group bg-card rounded-2xl overflow-hidden shadow-travel-sm hover:shadow-travel-lg transition-all duration-500",
        featured && "ring-2 ring-primary"
      )}
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        
        {featured && (
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
            Best Seller
          </div>
        )}

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="text-primary-foreground text-sm font-medium">{destination}</span>
          <div className="flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="w-3.5 h-3.5 text-accent fill-accent" />
            <span className="text-xs font-medium">{rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>{groupSize}</span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {highlights.slice(0, 3).map((highlight, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              <span className="line-clamp-1">{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through mr-2">
                {originalPrice}
              </span>
            )}
            <span className="text-2xl font-bold text-primary">{price}</span>
            <span className="text-sm text-muted-foreground"> / person</span>
          </div>
          <Link to="/packages">
            <Button variant="outline" size="sm">
              View Details
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
