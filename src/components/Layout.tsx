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
    Fingerprint,
    ClipboardList,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/AuthContext";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const navigation = [
    { name: "Beranda", href: "/", icon: LayoutDashboard },
    { name: "Dasbor", href: "/dashboard", icon: LayoutDashboard },
    { name: "Dokumen", href: "/documents", icon: FileText },
    { name: "Laporan Insiden", href: "/managelapor", icon: AlertTriangle },
    { name: "Tugas", href: "/tasks", icon: CheckSquare },
    { name: "Rekrutmen", href: "/approval", icon: Users },
    { name: "Anggota", href: "/anggota", icon: Users },
    { name: "Evaluasi", href: "/evaluation", icon: BarChart3 },
    { name: "Presensi", href: "/absen", icon: Fingerprint },
    { name: "Manajemen Presensi", href: "/absenadmin", icon: ClipboardList },
    { name: "Laporkan Insiden", href: "/lapor", icon: Users },
    { name: "Rekrutmen", href: "/apply", icon: Users },
];

const publicmenu = [
    { name: "Beranda", href: "/", icon: LayoutDashboard },
    { name: "Laporkan Insiden", href: "/lapor", icon: Users },
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
                    {/* Left: Logo */}
                    <div className="flex items-center gap-2">
                        <div className="to-primary-light flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary">
                            <span className="text-xl font-bold text-primary-foreground">
                                👨🏿‍🎓
                            </span>
                        </div>
                        <div className="block shrink-0">
                            <h1 className="break-keep text-lg font-bold text-foreground">
                                Sistem Manajemen PKKMB
                            </h1>
                            <p className="text-xs text-muted-foreground">
                                FISIPOL UNESA 2025
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden w-full items-center justify-end gap-4 md:flex">
                        {isAuthenticated ? (
                            <>
                                {/* Group: Utama */}
                                <div className="flex w-full items-center justify-center gap-x-4">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="gap-2 text-sm"
                                            >
                                                <LayoutDashboard className="h-4 w-4" />
                                                Utama
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {[
                                                {
                                                    name: "Beranda",
                                                    href: "/",
                                                    icon: LayoutDashboard,
                                                },
                                                {
                                                    name: "Dasbor",
                                                    href: "/dashboard",
                                                    icon: LayoutDashboard,
                                                },
                                                {
                                                    name: "Dokumen",
                                                    href: "/documents",
                                                    icon: FileText,
                                                },
                                            ].map((item) => {
                                                const Icon = item.icon;
                                                return (
                                                    <DropdownMenuItem
                                                        asChild
                                                        key={item.name}
                                                    >
                                                        <Link
                                                            to={item.href}
                                                            className="flex items-center gap-2"
                                                        >
                                                            <Icon className="h-4 w-4" />
                                                            {item.name}
                                                        </Link>
                                                    </DropdownMenuItem>
                                                );
                                            })}
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                    {/* Group: Operasional */}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="gap-2 text-sm"
                                            >
                                                <CheckSquare className="h-4 w-4" />
                                                Operasional
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {[
                                                {
                                                    name: "Laporkan Insiden",
                                                    href: "/lapor",
                                                    icon: AlertTriangle,
                                                },
                                                {
                                                    name: "Laporan Insiden",
                                                    href: "/managelapor",
                                                    icon: AlertTriangle,
                                                },
                                                {
                                                    name: "Tugas",
                                                    href: "/tasks",
                                                    icon: CheckSquare,
                                                },
                                                {
                                                    name: "Presensi",
                                                    href: "/absen",
                                                    icon: Fingerprint,
                                                },
                                                {
                                                    name: "Manajemen Presensi",
                                                    href: "/absenadmin",
                                                    icon: ClipboardList,
                                                },
                                            ].map((item) => {
                                                const Icon = item.icon;
                                                return (
                                                    <DropdownMenuItem
                                                        asChild
                                                        key={item.name}
                                                    >
                                                        <Link
                                                            to={item.href}
                                                            className="flex items-center gap-2"
                                                        >
                                                            <Icon className="h-4 w-4" />
                                                            {item.name}
                                                        </Link>
                                                    </DropdownMenuItem>
                                                );
                                            })}
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                    {/* Group: SDM */}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="gap-2 text-sm"
                                            >
                                                <Users className="h-4 w-4" />
                                                SDM
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {[
                                                {
                                                    name: "Rekrutmen",
                                                    href: "/apply",
                                                    icon: Users,
                                                },
                                                {
                                                    name: "Kelola Rekrutmen",
                                                    href: "/approval",
                                                    icon: Users,
                                                },
                                                {
                                                    name: "Anggota",
                                                    href: "/anggota",
                                                    icon: Users,
                                                },
                                                {
                                                    name: "Evaluasi",
                                                    href: "/evaluation",
                                                    icon: BarChart3,
                                                },
                                            ].map((item) => {
                                                const Icon = item.icon;
                                                return (
                                                    <DropdownMenuItem
                                                        asChild
                                                        key={item.name}
                                                    >
                                                        <Link
                                                            to={item.href}
                                                            className="flex items-center gap-2"
                                                        >
                                                            <Icon className="h-4 w-4" />
                                                            {item.name}
                                                        </Link>
                                                    </DropdownMenuItem>
                                                );
                                            })}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>

                                <Button
                                    onClick={handleLogout}
                                    variant="outline"
                                    size="sm"
                                    className="ml-2"
                                >
                                    <LogOut className="h-4 w-4" />
                                    Keluar
                                </Button>
                            </>
                        ) : (
                            <>
                                {publicmenu.map((item) => {
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
                                <Link to="/login">
                                    <Button size="sm" className="gap-2">
                                        <LogIn className="h-4 w-4" />
                                        Masuk
                                    </Button>
                                </Link>
                            </>
                        )}
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
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
                    <div className="border-t bg-card md:hidden">
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
                                    Keluar
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
                                        Masuk
                                    </Button>
                                </Link>
                            )}
                        </nav>
                    </div>
                )}
            </header>

            {/* Konten Utama */}
            <main className="container py-8">{children}</main>

            {/* Footer */}
            <footer className="mt-16 border-t bg-card">
                <div className="container py-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="text-center md:text-left">
                            <p className="text-sm font-semibold text-foreground">
                                Sistem Manajemen PKKMB
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Solusi FISIPOL UNESA 2025
                            </p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-sm text-muted-foreground">
                                {`Dikembangkan dengan ❤️ oleh `}
                                <span className="font-semibold text-foreground">
                                    Kelompok MSDM Tinggi
                                </span>
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Program Studi Sistem Informasi UNESA 2025
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
