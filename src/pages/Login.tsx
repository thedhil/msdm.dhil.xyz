import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (login(email, password)) {
            toast({
                title: "Login successful",
                description: "Welcome to PKKMB Management System",
            });
            navigate("/dashboard");
        } else {
            toast({
                title: "Login failed",
                description: "Please enter valid credentials",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <Card className="mx-4 w-full max-w-md">
                <CardHeader className="space-y-1 text-center">
                    <div className="to-primary-light mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-primary">
                        <span className="text-3xl font-bold text-primary-foreground">
                            U
                        </span>
                    </div>
                    <CardTitle className="text-2xl font-bold">
                        PKKMB Management
                    </CardTitle>
                    <CardDescription>
                        FISIPOL UNESA 2025 - Sign in to access the system
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="your.email@unesa.ac.id"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full gap-2">
                            <LogIn className="h-4 w-4" />
                            Sign In
                        </Button>
                        <p className="mt-4 text-center text-xs text-muted-foreground">
                            Demo: Use any email and password to login
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
