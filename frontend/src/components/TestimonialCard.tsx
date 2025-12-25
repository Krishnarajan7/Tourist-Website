import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  destination: string;
}

const TestimonialCard = ({
  name,
  role,
  avatar,
  content,
  rating,
  destination,
}: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-travel-sm hover:shadow-travel-md transition-all duration-300 relative">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <Quote className="w-5 h-5 text-primary" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating ? "text-accent fill-accent" : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground/80 leading-relaxed mb-6 line-clamp-4">
        "{content}"
      </p>

      {/* Destination */}
      <p className="text-sm text-primary font-medium mb-4">
        Trip to {destination}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
