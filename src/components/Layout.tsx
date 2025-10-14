import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    FileText,
    AlertTriangle,
    CheckSquare,
    Users,
    BarChart3,
    Menu,
    X,
    LogOut,
    LogIn,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/AuthContext";

const navigation = [
    { name: "Home", href: "/", icon: LayoutDashboard },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Dokumen", href: "/documents", icon: FileText },
    { name: "Insiden", href: "/managelapor", icon: AlertTriangle },
    { name: "Tugas", href: "/tasks", icon: CheckSquare },
    { name: "Rekrutmen", href: "/approval", icon: Users },
    { name: "Evaluasi", href: "/evaluation", icon: BarChart3 },
];

const publicmenu = [
    { name: "Home", href: "/", icon: LayoutDashboard },
    { name: "Lapor Insiden", href: "/lapor", icon: Users },
    { name: "Rekrutmen", href: "/apply", icon: Users },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="to-primary-light flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary">
                            <span className="text-xl font-bold text-primary-foreground">
                                👨🏿‍🎓
                            </span>
                        </div>
                        <div className="hidden shrink-0 md:block">
                            <h1 className="break-keep text-lg font-bold text-foreground">
                                PKKMB Management
                            </h1>
                            <p className="text-xs text-muted-foreground">
                                FISIPOL UNESA 2025
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden w-full items-center gap-1 xl:flex">
                        <div className="flex w-full justify-center gap-x-1">
                            {isAuthenticated
                                ? navigation.map((item) => {
                                      const Icon = item.icon;
                                      const isActive =
                                          location.pathname === item.href;
                                      return (
                                          <Link key={item.name} to={item.href}>
                                              <Button
                                                  variant={
                                                      isActive
                                                          ? "default"
                                                          : "ghost"
                                                  }
                                                  size="sm"
                                                  className="gap-2"
                                              >
                                                  <Icon className="h-4 w-4" />
                                                  {item.name}
                                              </Button>
                                          </Link>
                                      );
                                  })
                                : publicmenu.map((item) => {
                                      const Icon = item.icon;
                                      const isActive =
                                          location.pathname === item.href;
                                      return (
                                          <Link key={item.name} to={item.href}>
                                              <Button
                                                  variant={
                                                      isActive
                                                          ? "default"
                                                          : "ghost"
                                                  }
                                                  size="sm"
                                                  className="gap-2"
                                              >
                                                  <Icon className="h-4 w-4" />
                                                  {item.name}
                                              </Button>
                                          </Link>
                                      );
                                  })}
                        </div>
                        {isAuthenticated ? (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="gap-2"
                                onClick={handleLogout}
                            >
                                <LogOut className="h-4 w-4" />
                                Logout
                            </Button>
                        ) : (
                            <Link to="/login">
                                <Button
                                    variant="default"
                                    size="sm"
                                    className="gap-2"
                                >
                                    <LogIn className="h-4 w-4" />
                                    Login
                                </Button>
                            </Link>
                        )}
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="xl:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="border-t bg-card xl:hidden">
                        <nav className="container flex flex-col gap-2 py-4">
                            {isAuthenticated
                                ? navigation.map((item) => {
                                      const Icon = item.icon;
                                      const isActive =
                                          location.pathname === item.href;
                                      return (
                                          <Link
                                              key={item.name}
                                              to={item.href}
                                              onClick={() =>
                                                  setMobileMenuOpen(false)
                                              }
                                          >
                                              <Button
                                                  variant={
                                                      isActive
                                                          ? "default"
                                                          : "ghost"
                                                  }
                                                  className="w-full justify-start gap-2"
                                              >
                                                  <Icon className="h-4 w-4" />
                                                  {item.name}
                                              </Button>
                                          </Link>
                                      );
                                  })
                                : publicmenu.map((item) => {
                                      const Icon = item.icon;
                                      const isActive =
                                          location.pathname === item.href;
                                      return (
                                          <Link
                                              key={item.name}
                                              to={item.href}
                                              onClick={() =>
                                                  setMobileMenuOpen(false)
                                              }
                                          >
                                              <Button
                                                  variant={
                                                      isActive
                                                          ? "default"
                                                          : "ghost"
                                                  }
                                                  className="w-full justify-start gap-2"
                                              >
                                                  <Icon className="h-4 w-4" />
                                                  {item.name}
                                              </Button>
                                          </Link>
                                      );
                                  })}
                            {isAuthenticated ? (
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start gap-2"
                                    onClick={() => {
                                        handleLogout();
                                        setMobileMenuOpen(false);
                                    }}
                                >
                                    <LogOut className="h-4 w-4" />
                                    Logout
                                </Button>
                            ) : (
                                <Link
                                    to="/login"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Button
                                        variant="default"
                                        className="w-full justify-start gap-2"
                                    >
                                        <LogIn className="h-4 w-4" />
                                        Login
                                    </Button>
                                </Link>
                            )}
                        </nav>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="container py-8">{children}</main>

            {/* Footer */}
            <footer className="mt-16 border-t bg-card">
                <div className="container py-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="text-center md:text-left">
                            <p className="text-sm font-semibold text-foreground">
                                PKKMB Management System
                            </p>
                            <p className="text-xs text-muted-foreground">
                                FISIPOL UNESA 2025 Solution
                            </p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-sm text-muted-foreground">
                                {`Made with <3 by `}
                                <span className="font-semibold text-foreground">
                                    Kelompok MSDM Rendah
                                </span>
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Sistem Informasi UNESA 2025
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
