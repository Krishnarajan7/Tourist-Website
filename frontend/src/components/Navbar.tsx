import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  name: string;
  path: string;
  isButton?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "Services", path: "/services" },
  { name: "Industrial Visits", path: "/industrial-visits" },
  { name: "Student Tours", path: "/student-industrial-tours" },
  { name: "Corporate Wellness", path: "/corporate-wellness" },
  { name: "Visa & Flight Course", path: "/visa-flight-course" },
  { name: "Packages", path: "/packages" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact", isButton: true },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-travel-md",
        isScrolled ? "py-2" : "py-3"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center shadow-travel-sm group-hover:shadow-glow transition-all duration-300">
            <Plane className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Wanderlust
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300",
                link.isButton
                  ? "ml-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-travel-sm"
                  : isActive(link.path)
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 rounded-lg transition-colors text-foreground hover:bg-muted"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background shadow-travel-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "px-4 py-3 rounded-lg font-medium transition-all duration-300",
                link.isButton
                  ? "mt-2 bg-primary text-primary-foreground text-center shadow-travel-sm"
                  : isActive(link.path)
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
