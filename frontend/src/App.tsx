import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Destinations from "./pages/Destinations";
import Services from "./pages/Services";
import IndustrialVisits from "./pages/IndustrialVisits";
import StudentIndustrialTours from "./pages/StudentIndustrialTours";
import CorporateWellness from "./pages/CorporateWellness";
import Packages from "./pages/Packages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import VisaFlightCourse from "./pages/VisaFlightCourse";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industrial-visits" element={<IndustrialVisits />} />
            <Route path="/student-industrial-tours" element={<StudentIndustrialTours />} />
            <Route path="/corporate-wellness" element={<CorporateWellness />} />
            <Route path="/visa-flight-course" element={<VisaFlightCourse />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;