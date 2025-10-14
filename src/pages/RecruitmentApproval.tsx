"use client";

import { useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Users, Building2, Check, X, Loader2 } from "lucide-react";

export default function RecruitmentApproval() {
    const [activeTab, setActiveTab] = useState("internal");
    const [loading, setLoading] = useState<string | null>(null);
    const [filter, setFilter] = useState("all");

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
        },
    ];

    const externalCandidates = [
        {
            name: "Ahmad Fauzi",
            position: "Event Coordinator",
            score: 95,
            status: "accepted",
            experience: "3 years professional event management",
        },
        {
            name: "Maya Putri",
            position: "Media Relations",
            score: 91,
            status: "accepted",
            experience: "PR specialist at corporate firm",
        },
        {
            name: "Rizky Pratama",
            position: "IT Infrastructure",
            score: 88,
            status: "review",
            experience: "System administrator",
        },
        {
            name: "Linda Sari",
            position: "Finance Team",
            score: 83,
            status: "review",
            experience: "Accounting professional",
        },
    ];

    const [internal, setInternal] = useState(internalCandidates);
    const [external, setExternal] = useState(externalCandidates);

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

    const updateStatus = (
        listType: "internal" | "external",
        name: string,
        newStatus: string,
    ) => {
        setLoading(name);
        setTimeout(() => {
            if (listType === "internal") {
                setInternal((prev) =>
                    prev.map((c) =>
                        c.name === name ? { ...c, status: newStatus } : c,
                    ),
                );
            } else {
                setExternal((prev) =>
                    prev.map((c) =>
                        c.name === name ? { ...c, status: newStatus } : c,
                    ),
                );
            }
            setLoading(null);
        }, 500);
    };

    const renderCandidateList = (
        candidates: any[],
        listType: "internal" | "external",
    ) => {
        const filtered =
            filter === "all"
                ? candidates
                : candidates.filter((c) => c.status === filter);

        return (
            <div className="space-y-3">
                {filtered.map((candidate) => (
                    <div
                        key={candidate.name}
                        className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                    >
                        <div className="flex flex-1 items-center gap-4">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                {listType === "internal" ? (
                                    <Users className="h-5 w-5 text-primary" />
                                ) : (
                                    <Building2 className="h-5 w-5 text-primary" />
                                )}
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
                                    className={`text-2xl font-bold ${getScoreColor(
                                        candidate.score,
                                    )}`}
                                >
                                    {candidate.score}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Score
                                </p>
                            </div>
                            <Badge className={getStatusColor(candidate.status)}>
                                {candidate.status}
                            </Badge>

                            <div className="flex gap-1">
                                <Button
                                    size="icon"
                                    variant="outline"
                                    disabled={loading === candidate.name}
                                    onClick={() =>
                                        updateStatus(
                                            listType,
                                            candidate.name,
                                            "accepted",
                                        )
                                    }
                                >
                                    {loading === candidate.name ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <Check className="h-4 w-4 text-green-600" />
                                    )}
                                </Button>
                                <Button
                                    size="icon"
                                    variant="outline"
                                    disabled={loading === candidate.name}
                                    onClick={() =>
                                        updateStatus(
                                            listType,
                                            candidate.name,
                                            "review",
                                        )
                                    }
                                >
                                    {loading === candidate.name ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <Users className="h-4 w-4 text-blue-600" />
                                    )}
                                </Button>
                                <Button
                                    size="icon"
                                    variant="outline"
                                    disabled={loading === candidate.name}
                                    onClick={() =>
                                        updateStatus(
                                            listType,
                                            candidate.name,
                                            "pending",
                                        )
                                    }
                                >
                                    {loading === candidate.name ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <X className="h-4 w-4 text-orange-600" />
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                    Recruitment Review
                </h1>
                <p className="text-muted-foreground">
                    Admin dashboard for internal committee and external
                    professional approval
                </p>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Candidate Overview</CardTitle>
                        <Select value={filter} onValueChange={setFilter}>
                            <SelectTrigger className="w-[160px]">
                                <SelectValue placeholder="Filter status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="accepted">
                                    Accepted
                                </SelectItem>
                                <SelectItem value="review">Review</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <CardDescription>
                        Switch between internal and external candidates
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Tabs
                        value={activeTab}
                        onValueChange={setActiveTab}
                        className="w-full"
                    >
                        <TabsList className="grid w-full max-w-md grid-cols-2">
                            <TabsTrigger value="internal" className="gap-2">
                                <Users className="h-4 w-4" />
                                Internal
                            </TabsTrigger>
                            <TabsTrigger value="external" className="gap-2">
                                <Building2 className="h-4 w-4" />
                                External
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="internal" className="mt-6">
                            {renderCandidateList(internal, "internal")}
                        </TabsContent>

                        <TabsContent value="external" className="mt-6">
                            {renderCandidateList(external, "external")}
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}
