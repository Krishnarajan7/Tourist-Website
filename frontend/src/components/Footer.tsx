import { Link } from "react-router-dom";
import { 
  Plane, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground/90">
      {/* Newsletter Section */}
      <div className="bg-gradient-warm py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-primary-foreground/80">
                Get exclusive travel deals and destination guides directly to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 flex-1 md:w-72 focus:outline-none focus:border-primary-foreground/50 transition-colors"
              />
              <Button variant="heroOutline" size="lg" className="shrink-0">
                <Send className="w-4 h-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center">
                  <Plane className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-serif font-bold text-primary-foreground">
                  Wanderlust
                </span>
              </Link>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                Your trusted partner for unforgettable travel experiences. We craft journeys that inspire and create memories that last a lifetime.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                    aria-label="Social media"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-serif font-semibold text-primary-foreground mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Home", "Destinations", "Services", "Packages", "About Us", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-primary-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="text-lg font-serif font-semibold text-primary-foreground mb-6">
                Popular Destinations
              </h4>
              <ul className="space-y-3">
                {["Dubai, UAE", "Kuala Lumpur, Malaysia", "Singapore", "Ho Chi Minh, Vietnam", "Bali, Indonesia", "Bangkok, Thailand"].map((item) => (
                  <li key={item}>
                    <Link
                      to="/destinations"
                      className="text-primary-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-serif font-semibold text-primary-foreground mb-6">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-primary-foreground/70">
                    123 Travel Street, Suite 456<br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href="tel:+1234567890" className="text-primary-foreground/70 hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href="mailto:info@wanderlust.com" className="text-primary-foreground/70 hover:text-primary transition-colors">
                    info@wanderlust.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Wanderlust Travel. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
