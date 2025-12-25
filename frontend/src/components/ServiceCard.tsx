import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color?: "primary" | "secondary" | "accent";
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  href,
  color = "primary",
}: ServiceCardProps) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
    secondary: "bg-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground",
    accent: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground",
  };

  return (
    <Link
      to={href}
      className="group block p-6 md:p-8 bg-card rounded-2xl shadow-travel-sm hover:shadow-travel-lg transition-all duration-500 hover:-translate-y-2"
    >
      {/* Icon */}
      <div className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300",
        colorClasses[color]
      )}>
        <Icon className="w-7 h-7" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground mb-5 leading-relaxed">
        {description}
      </p>

      {/* Link */}
      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
};

export default ServiceCard;
