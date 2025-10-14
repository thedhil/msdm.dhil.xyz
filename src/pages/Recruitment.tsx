import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Users,
    UserPlus,
    TrendingUp,
    Award,
    Target,
    Building2,
    GraduationCap,
} from "lucide-react";

const Recruitment = () => {
    const [activeTab, setActiveTab] = useState("internal");

    const internalCandidates = [
        {
            name: "Andi Pratama",
            position: "Logistics Coordinator",
            score: 92,
            status: "accepted",
            experience: "2 years event management",
        },
        {
            name: "Siti Nurhaliza",
            position: "Documentation Lead",
            score: 88,
            status: "accepted",
            experience: "Photography & videography",
        },
        {
            name: "Budi Santoso",
            position: "Technical Support",
            score: 85,
            status: "review",
            experience: "IT infrastructure",
        },
        {
            name: "Dewi Lestari",
            position: "Registration Team",
            score: 79,
            status: "review",
            experience: "Customer service",
        },
        {
            name: "Rudi Hermawan",
            position: "Security Team",
            score: 65,
            status: "pending",
            experience: "Campus security volunteer",
            type: "internal",
        },
    ];

    const externalCandidates = [
        {
            name: "Ahmad Fauzi",
            position: "Event Coordinator",
            score: 95,
            status: "accepted",
            experience: "3 years professional event management",
            type: "external",
        },
        {
            name: "Maya Putri",
            position: "Media Relations",
            score: 91,
            status: "accepted",
            experience: "PR specialist at corporate firm",
            type: "external",
        },
        {
            name: "Rizky Pratama",
            position: "IT Infrastructure",
            score: 88,
            status: "review",
            experience: "System administrator",
            type: "external",
        },
        {
            name: "Linda Sari",
            position: "Finance Team",
            score: 83,
            status: "review",
            experience: "Accounting professional",
            type: "external",
        },
    ];

    const positions = [
        { role: "Logistics Coordinator", slots: 3, filled: 2 },
        { role: "Technical Support", slots: 4, filled: 3 },
        { role: "Registration Team", slots: 6, filled: 5 },
        { role: "Documentation Team", slots: 3, filled: 2 },
        { role: "Security Team", slots: 5, filled: 3 },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "accepted":
                return "bg-green-100 text-green-700";
            case "review":
                return "bg-blue-100 text-blue-700";
            default:
                return "bg-orange-100 text-orange-700";
        }
    };

    const getScoreColor = (score: number) => {
        if (score >= 85) return "text-green-600";
        if (score >= 70) return "text-blue-600";
        return "text-orange-600";
    };

    const candidates =
        activeTab === "internal" ? internalCandidates : externalCandidates;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                    Recruitment Portal
                </h1>
                <p className="text-muted-foreground">
                    Data-driven system for internal committee and external
                    professional recruitment
                </p>
            </div>

            <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
            >
                <TabsList className="grid w-full max-w-md grid-cols-2">
                    <TabsTrigger value="internal" className="gap-2">
                        <GraduationCap className="h-4 w-4" />
                        Internal Recruitment
                    </TabsTrigger>
                    <TabsTrigger value="external" className="gap-2">
                        <Building2 className="h-4 w-4" />
                        External Professionals
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="internal" className="mt-6 space-y-8">
                    <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/20">
                        <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
                            Internal Committee Recruitment
                        </h3>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                            Recruiting UNESA students to join the PKKMB
                            organizing committee. Focus on skill development and
                            campus engagement.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid gap-6 sm:grid-cols-4">
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                        <UserPlus className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-foreground">
                                            45
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Applications
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                                        <Award className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-foreground">
                                            24
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Accepted
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                                        <Target className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-foreground">
                                            12
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            In Review
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                                        <TrendingUp className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-foreground">
                                            82
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Avg. Score
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Application Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <UserPlus className="h-5 w-5 text-primary" />
                                    Apply for Committee Position
                                </CardTitle>
                                <CardDescription>
                                    Join the PKKMB organizing team for 2025
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullname">
                                            Full Name
                                        </Label>
                                        <Input
                                            id="fullname"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="nim">
                                            Student ID (NIM)
                                        </Label>
                                        <Input
                                            id="nim"
                                            placeholder="Your student ID"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your.email@unesa.ac.id"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="position">
                                        Desired Position
                                    </Label>
                                    <Select>
                                        <SelectTrigger id="position">
                                            <SelectValue placeholder="Select position" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="logistics">
                                                Logistics Coordinator
                                            </SelectItem>
                                            <SelectItem value="technical">
                                                Technical Support
                                            </SelectItem>
                                            <SelectItem value="registration">
                                                Registration Team
                                            </SelectItem>
                                            <SelectItem value="documentation">
                                                Documentation Team
                                            </SelectItem>
                                            <SelectItem value="security">
                                                Security Team
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="experience">
                                        Relevant Experience
                                    </Label>
                                    <Textarea
                                        id="experience"
                                        placeholder="Describe your experience with event organization or relevant skills..."
                                        rows={4}
                                    />
                                </div>
                                <Button className="w-full">
                                    Submit Application
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Available Positions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Available Positions</CardTitle>
                                <CardDescription>
                                    Current openings and filled slots
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {positions.map((position) => (
                                    <div
                                        key={position.role}
                                        className="space-y-2"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-foreground">
                                                {position.role}
                                            </span>
                                            <span className="text-sm text-muted-foreground">
                                                {position.filled}/
                                                {position.slots} filled
                                            </span>
                                        </div>
                                        <div className="h-2 w-full rounded-full bg-muted">
                                            <div
                                                className="h-2 rounded-full bg-primary transition-all"
                                                style={{
                                                    width: `${(position.filled / position.slots) * 100}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Candidate List */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Applications</CardTitle>
                            <CardDescription>
                                Candidates with performance scores and
                                evaluation status
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {candidates.map((candidate, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                                    >
                                        <div className="flex flex-1 items-center gap-4">
                                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                <Users className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-semibold text-foreground">
                                                    {candidate.name}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {candidate.position}
                                                </p>
                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    {candidate.experience}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="text-right">
                                                <p
                                                    className={`text-2xl font-bold ${getScoreColor(candidate.score)}`}
                                                >
                                                    {candidate.score}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    Score
                                                </p>
                                            </div>
                                            <Badge
                                                className={getStatusColor(
                                                    candidate.status,
                                                )}
                                            >
                                                {candidate.status}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="external" className="mt-6 space-y-8">
                    <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950/20">
                        <h3 className="mb-2 font-semibold text-purple-900 dark:text-purple-100">
                            External Professional Recruitment
                        </h3>
                        <p className="text-sm text-purple-700 dark:text-purple-300">
                            Hiring experienced professionals for specialized
                            roles requiring advanced expertise and professional
                            credentials.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid gap-6 sm:grid-cols-4">
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                        <UserPlus className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-foreground">
                                            28
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Applications
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                                        <Award className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-foreground">
                                            15
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Accepted
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                                        <Target className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-foreground">
                                            8
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            In Review
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                                        <TrendingUp className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-foreground">
                                            89
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Avg. Score
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Application Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Building2 className="h-5 w-5 text-primary" />
                                    Apply as External Professional
                                </CardTitle>
                                <CardDescription>
                                    Join as an experienced professional
                                    consultant
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="ext-fullname">
                                            Full Name
                                        </Label>
                                        <Input
                                            id="ext-fullname"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="ext-id">
                                            Professional ID
                                        </Label>
                                        <Input
                                            id="ext-id"
                                            placeholder="Your professional ID"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="ext-email">
                                        Email Address
                                    </Label>
                                    <Input
                                        id="ext-email"
                                        type="email"
                                        placeholder="your.email@company.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="ext-position">
                                        Desired Position
                                    </Label>
                                    <Select>
                                        <SelectTrigger id="ext-position">
                                            <SelectValue placeholder="Select position" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="coordinator">
                                                Event Coordinator
                                            </SelectItem>
                                            <SelectItem value="media">
                                                Media Relations
                                            </SelectItem>
                                            <SelectItem value="it">
                                                IT Infrastructure
                                            </SelectItem>
                                            <SelectItem value="finance">
                                                Finance Specialist
                                            </SelectItem>
                                            <SelectItem value="consultant">
                                                Management Consultant
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="ext-experience">
                                        Professional Experience
                                    </Label>
                                    <Textarea
                                        id="ext-experience"
                                        placeholder="Describe your professional experience and qualifications..."
                                        rows={4}
                                    />
                                </div>
                                <Button className="w-full">
                                    Submit Application
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Available Positions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Professional Positions</CardTitle>
                                <CardDescription>
                                    Specialized roles and requirements
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    {
                                        role: "Event Coordinator",
                                        slots: 2,
                                        filled: 1,
                                    },
                                    {
                                        role: "Media Relations",
                                        slots: 2,
                                        filled: 2,
                                    },
                                    {
                                        role: "IT Infrastructure",
                                        slots: 3,
                                        filled: 2,
                                    },
                                    {
                                        role: "Finance Specialist",
                                        slots: 2,
                                        filled: 1,
                                    },
                                    {
                                        role: "Management Consultant",
                                        slots: 2,
                                        filled: 1,
                                    },
                                ].map((position) => (
                                    <div
                                        key={position.role}
                                        className="space-y-2"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-foreground">
                                                {position.role}
                                            </span>
                                            <span className="text-sm text-muted-foreground">
                                                {position.filled}/
                                                {position.slots} filled
                                            </span>
                                        </div>
                                        <div className="h-2 w-full rounded-full bg-muted">
                                            <div
                                                className="h-2 rounded-full bg-primary transition-all"
                                                style={{
                                                    width: `${(position.filled / position.slots) * 100}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Candidate List */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Applications</CardTitle>
                            <CardDescription>
                                Professional candidates with evaluation scores
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {externalCandidates.map((candidate, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                                    >
                                        <div className="flex flex-1 items-center gap-4">
                                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                <Building2 className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-semibold text-foreground">
                                                    {candidate.name}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {candidate.position}
                                                </p>
                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    {candidate.experience}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="text-right">
                                                <p
                                                    className={`text-2xl font-bold ${getScoreColor(candidate.score)}`}
                                                >
                                                    {candidate.score}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    Score
                                                </p>
                                            </div>
                                            <Badge
                                                className={getStatusColor(
                                                    candidate.status,
                                                )}
                                            >
                                                {candidate.status}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Recruitment;
