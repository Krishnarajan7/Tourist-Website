import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  GraduationCap,
  Plane,
  FileText,
  Globe,
  Users,
  Award,
  BookOpen,
  Target,
  CheckCircle,
  Building,
  Monitor,
  Clock,
  Briefcase,
  TrendingUp,
  Handshake,
  ClipboardCheck,
  Lightbulb,
  MapPin,
} from "lucide-react";

const courseModules = [
  {
    module: "Module 1",
    title: "Introduction to Travel & Tourism Industry",
    duration: "4 Hours",
    topics: [
      "Global tourism landscape",
      "Role of travel agents & agencies",
      "Career opportunities in the sector",
    ],
  },
  {
    module: "Module 2",
    title: "Visa Processing & Documentation",
    duration: "8 Hours",
    topics: [
      "Types of visas & requirements",
      "Document verification procedures",
      "Embassy protocols & processing",
    ],
  },
  {
    module: "Module 3",
    title: "Flight Ticketing Fundamentals",
    duration: "10 Hours",
    topics: [
      "Airline codes & terminology",
      "Fare structures & classes",
      "E-ticketing procedures",
    ],
  },
  {
    module: "Module 4",
    title: "GDS (Global Distribution System)",
    duration: "12 Hours",
    topics: [
      "Amadeus/Galileo basics",
      "PNR creation & management",
      "Booking modifications & cancellations",
    ],
  },
  {
    module: "Module 5",
    title: "Customer Service & Communication",
    duration: "6 Hours",
    topics: [
      "Client handling techniques",
      "Problem resolution",
      "Cross-cultural communication",
    ],
  },
  {
    module: "Module 6",
    title: "Practical Training & Assessment",
    duration: "10 Hours",
    topics: [
      "Live booking simulations",
      "Case study presentations",
      "Industry visit & interaction",
    ],
  },
];

const programObjectives = [
  {
    icon: Target,
    title: "Skill Development",
    description: "Equip students with practical skills in visa processing and flight ticketing operations",
  },
  {
    icon: Globe,
    title: "Industry Readiness",
    description: "Prepare management students for immediate employment in travel and tourism sector",
  },
  {
    icon: Lightbulb,
    title: "Hands-on Learning",
    description: "Provide real-world exposure through GDS training and live booking simulations",
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description: "Enable students to pursue rewarding careers in airlines, travel agencies, and tourism",
  },
];

const expectedOutcomes = [
  "Process visa applications for various countries independently",
  "Generate and manage Passenger Name Records (PNR) efficiently",
  "Navigate Global Distribution Systems (Amadeus/Galileo)",
  "Handle customer queries and resolve travel-related issues",
  "Understand airline fare structures and ticketing procedures",
  "Demonstrate professional communication in client interactions",
  "Apply knowledge of travel documentation and compliance",
  "Pursue certifications from IATA or travel industry bodies",
];

const resourceRequirements = [
  { resource: "Computer Lab with Internet", specification: "Minimum 20 workstations with high-speed connectivity" },
  { resource: "GDS Training Software", specification: "Licensed access to Amadeus or Galileo training modules" },
  { resource: "Industry Expert Faculty", specification: "Certified professionals with travel industry experience" },
  { resource: "Training Materials", specification: "Handbooks, case studies, and reference documentation" },
  { resource: "Assessment Tools", specification: "Online examination platform and practical evaluation rubrics" },
];

const VisaFlightCourse = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Visa & Flight Course", path: "/visa-flight-course" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Visa & Flight Ticketing Course for Management Students | Wanderlust</title>
        <meta
          name="description"
          content="Professional training program in visa processing and flight ticketing for management students. Industry-ready curriculum with GDS training and placement support."
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0tMiAwdi0yaDJ2Mkg0MHYyaC0ydi0yem0wIDBoLTJ2Mmgydi0yem0tMiAwdi0yaDJ2MmgtMnptMCAwaC0ydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        
        <div className="container mx-auto px-4 relative">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Academic Training Proposal
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Proposal for Visa and Flight Ticketing Course
              <span className="block text-primary mt-2">for Management Students</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A comprehensive skill development program designed to bridge the gap between academic knowledge and industry requirements in the travel and tourism sector.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <FileText className="w-5 h-5" />
                  Request Course Details
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  <Handshake className="w-5 h-5" />
                  Partner with Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Introduction</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-4">
                In today's globalized economy, the travel and tourism industry stands as one of the fastest-growing sectors, contributing significantly to economic development and employment generation. With international travel becoming increasingly accessible, there is a pressing need for skilled professionals who can efficiently manage visa processing, travel documentation, and flight ticketing operations.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Management students, equipped with business acumen and analytical skills, represent ideal candidates for specialized training in these domains. This proposal outlines a comprehensive course designed to provide practical, industry-relevant training that prepares students for immediate employment in airlines, travel agencies, corporate travel departments, and tourism organizations.
              </p>
              <p className="text-lg leading-relaxed">
                The program addresses the existing gap between theoretical management education and the practical requirements of the travel industry, ensuring graduates possess both the knowledge and hands-on experience demanded by employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Objectives */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              Program Goals
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Program Objectives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Designed to create industry-ready professionals with comprehensive skills in travel operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {programObjectives.map((objective, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <objective.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{objective.title}</h3>
                  <p className="text-sm text-muted-foreground">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Curriculum Structure
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Course Modules</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A 50-hour comprehensive program covering all aspects of visa processing and flight ticketing
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block max-w-5xl mx-auto">
            <Card className="border shadow-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Module</TableHead>
                    <TableHead className="font-semibold">Title</TableHead>
                    <TableHead className="font-semibold">Duration</TableHead>
                    <TableHead className="font-semibold">Key Topics</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courseModules.map((module, index) => (
                    <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-medium text-primary">{module.module}</TableCell>
                      <TableCell className="font-medium">{module.title}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center gap-1 text-sm">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          {module.duration}
                        </span>
                      </TableCell>
                      <TableCell>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {module.topics.map((topic, i) => (
                            <li key={i}>{topic}</li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {courseModules.map((module, index) => (
              <Card key={index} className="border shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{module.module}</span>
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {module.duration}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mode of Delivery */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                <Monitor className="w-4 h-4" />
                Training Methodology
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Mode of Delivery</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-md bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Classroom Sessions</h3>
                  <p className="text-sm text-muted-foreground">
                    Interactive lectures covering theoretical concepts, industry practices, and case studies from real-world scenarios.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                    <Monitor className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Practical Lab Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Hands-on experience with GDS systems, live booking simulations, and document processing workflows.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Industry Exposure</h3>
                  <p className="text-sm text-muted-foreground">
                    Visits to travel agencies, airline offices, and interactions with industry professionals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment & Certification */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                  <Award className="w-4 h-4" />
                  Evaluation Process
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Assessment & Certification</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ClipboardCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Continuous Evaluation (40%)</h4>
                      <p className="text-sm text-muted-foreground">Assignments, quizzes, and class participation throughout the program duration</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Monitor className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Practical Assessment (35%)</h4>
                      <p className="text-sm text-muted-foreground">Live GDS operations, PNR creation, and booking management demonstrations</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Final Examination (25%)</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive written test covering all modules and practical scenarios</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/10">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Professional Certification</h3>
                  <p className="text-muted-foreground mb-6">
                    Upon successful completion, students receive an industry-recognized certificate validating their competency in visa processing and flight ticketing operations.
                  </p>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Joint certification with partner institution</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Pathway to IATA/UFTAA certifications</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Verifiable credentials for employers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                Learning Outcomes
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Expected Outcomes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Upon completion of this course, students will be able to:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {expectedOutcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Requirements */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                <Building className="w-4 h-4" />
                Infrastructure Needs
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Resource Requirements</h2>
            </div>

            <Card className="border shadow-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Resource</TableHead>
                    <TableHead className="font-semibold">Specification</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {resourceRequirements.map((item, index) => (
                    <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-medium">{item.resource}</TableCell>
                      <TableCell className="text-muted-foreground">{item.specification}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusion & CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Conclusion
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Building Future-Ready Professionals
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              This Visa and Flight Ticketing Course represents a strategic investment in student employability and industry-academia collaboration. By providing hands-on training aligned with current industry standards, we prepare management students to excel in the dynamic travel and tourism sector. The program's practical orientation, combined with certification and placement support, ensures graduates are equipped to make immediate contributions to their employers while building successful careers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <FileText className="w-5 h-5" />
                  Request Course Details
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  <Handshake className="w-5 h-5" />
                  Partner with Us
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <p className="text-sm text-muted-foreground">Training Hours</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">6</div>
                <p className="text-sm text-muted-foreground">Comprehensive Modules</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <p className="text-sm text-muted-foreground">Placement Support</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">IATA</div>
                <p className="text-sm text-muted-foreground">Certification Pathway</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisaFlightCourse;
