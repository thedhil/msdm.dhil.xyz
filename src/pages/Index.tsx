import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LayoutDashboard,
  FileText,
  AlertTriangle,
  CheckSquare,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import heroImage from "@/assets/images/jokowi.png";

const features = [
  {
    title: "Dashboard Overview",
    description:
      "Real-time event progress tracking, task completion rates, and urgent notifications in one centralized view.",
    icon: LayoutDashboard,
    color: "from-primary to-primary-light",
  },
  {
    title: "Document Center",
    description:
      "Cloud-based system for uploading and sharing SOPs, schedules, and emergency plans across all committees.",
    icon: FileText,
    color: "from-accent to-accent-light",
  },
  {
    title: "Incident Reporting",
    description:
      "Fast submission of issues by field committees, connected to a live dashboard for immediate action.",
    icon: AlertTriangle,
    color: "from-destructive to-orange-500",
  },
  {
    title: "Task Management",
    description:
      "Kanban board system for tracking committee responsibilities, deadlines, and collaborative workflows.",
    icon: CheckSquare,
    color: "from-green-600 to-green-400",
  },
  {
    title: "Recruitment Portal",
    description:
      "Online registration and data-driven scoring system for new committee members with performance tracking.",
    icon: Users,
    color: "from-blue-600 to-blue-400",
  },
  {
    title: "Performance Evaluation",
    description:
      "Comprehensive metrics using HR theories including Performance Appraisal, Reward & Punishment systems.",
    icon: BarChart3,
    color: "from-purple-600 to-purple-400",
  },
];

const problems = [
  "Chaotic coordination during PKKMB 2025 event",
  "Lack of centralized communication system",
  "Inefficient task distribution and tracking",
  "Unclear recruitment criteria for new organizers",
  "No systematic performance evaluation method",
  "Lost documents and emergency plans",
];

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative -mt-8 -mx-4 md:-mx-8 px-4 md:px-8 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(30, 58, 138, 0.85) 50%, rgba(59, 130, 246, 0.75) 100%), url(${heroImage})`,
          }}
        />
        <div className="relative container max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <span className="text-sm font-semibold text-white">
                FISIPOL UNESA 2025 Solution
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming PKKMB into a Professional and Transparent System
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              A comprehensive digital solution to prevent chaos, improve
              coordination, and establish data-driven management for student
              orientation events.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/dashboard">
                <Button
                  size="lg"
                  className="gap-2 bg-accent text-accent-foreground hover:bg-accent-light"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/recruitment">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-white/10 text-white border-white/30 hover:bg-white/20"
                >
                  View Recruitment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 mb-4">
              <span className="text-sm font-semibold text-destructive">
                The Problem
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why We Need This System
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The PKKMB FISIPOL UNESA 2025 event faced significant
              organizational challenges that affected its effectiveness and the
              experience of both organizers and participants.
            </p>
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-destructive" />
                  </div>
                  <span className="text-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Our Solution</CardTitle>
              <CardDescription>
                A comprehensive digital management system designed specifically
                for university events
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">
                    Centralized Coordination
                  </p>
                  <p className="text-sm text-muted-foreground">
                    All committees work from one platform
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">
                    Real-time Updates
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Instant notifications and task tracking
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">
                    Data-driven Decisions
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Performance metrics and analytics
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">
                    Transparent Processes
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Clear recruitment and evaluation criteria
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">
              Key Features
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Event Management Suite
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six integrated modules designed to address every aspect of PKKMB
            organization
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div
                    className={`h-12 w-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container max-w-4xl">
        <Card className="bg-gradient-to-br from-primary to-primary-light text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
          <CardHeader className="relative">
            <CardTitle className="text-2xl md:text-3xl text-white">
              Ready to Transform Your Event Management?
            </CardTitle>
            <CardDescription className="text-white/90 text-base">
              Start using the PKKMB Management System today and experience
              professional, transparent, and efficient event organization.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="flex flex-wrap gap-4">
              <Link to="/dashboard">
                <Button
                  size="lg"
                  className="gap-2 bg-accent text-accent-foreground hover:bg-accent-light"
                >
                  Access Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/recruitment">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-white text-primary border-white hover:bg-white/90"
                >
                  Join as Committee
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
