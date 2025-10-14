"use client";

import { useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    AlertTriangle,
    CheckCircle2,
    Clock,
    XCircle,
    Loader2,
    Eye,
} from "lucide-react";

const IncidentManagement = () => {
    const [filter, setFilter] = useState("all");
    const [loading, setLoading] = useState<string | null>(null);

    const [reports, setReports] = useState([
        {
            id: "INC-101",
            title: "Projector not working in Hall B",
            reporter: "John Doe",
            contact: "john@example.com",
            severity: "high",
            status: "open",
            time: "5 mins ago",
            description:
                "The projector went off during the session and won't restart.",
        },
        {
            id: "INC-102",
            title: "Slippery floor near entrance",
            reporter: "Visitor",
            contact: "-",
            severity: "medium",
            status: "in-progress",
            time: "20 mins ago",
            description: "Spilled drink causing a slip hazard near gate A.",
        },
        {
            id: "INC-103",
            title: "Lost bag report",
            reporter: "Aulia Rahman",
            contact: "aulia@gmail.com",
            severity: "low",
            status: "resolved",
            time: "2 hours ago",
            description: "Attendee misplaced bag in cafeteria area.",
        },
    ]);

    const getSeverityVariant = (severity: string) => {
        switch (severity) {
            case "high":
                return "destructive";
            case "medium":
                return "default";
            default:
                return "secondary";
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "resolved":
                return "bg-green-100 text-green-700";
            case "in-progress":
                return "bg-blue-100 text-blue-700";
            default:
                return "bg-orange-100 text-orange-700";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "resolved":
                return <CheckCircle2 className="h-4 w-4" />;
            case "in-progress":
                return <Clock className="h-4 w-4" />;
            default:
                return <AlertTriangle className="h-4 w-4" />;
        }
    };

    const updateStatus = (id: string, newStatus: string) => {
        setLoading(id);
        setTimeout(() => {
            setReports((prev) =>
                prev.map((r) =>
                    r.id === id ? { ...r, status: newStatus } : r,
                ),
            );
            setLoading(null);
        }, 500);
    };

    const filtered =
        filter === "all" ? reports : reports.filter((r) => r.status === filter);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                    Incident Management
                </h1>
                <p className="text-muted-foreground">
                    Admin control panel for reviewing and resolving public
                    incident reports
                </p>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>All Reports</CardTitle>
                            <CardDescription>
                                Manage and update report statuses
                            </CardDescription>
                        </div>
                        <Select value={filter} onValueChange={setFilter}>
                            <SelectTrigger className="w-[160px]">
                                <SelectValue placeholder="Filter status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="open">Open</SelectItem>
                                <SelectItem value="in-progress">
                                    In Progress
                                </SelectItem>
                                <SelectItem value="resolved">
                                    Resolved
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="space-y-3">
                        {filtered.map((report) => (
                            <div
                                key={report.id}
                                className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
                            >
                                {/* top section */}
                                <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                    {/* left info */}
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <Badge
                                                variant="outline"
                                                className="font-mono text-xs"
                                            >
                                                {report.id}
                                            </Badge>
                                            <h3 className="break-words text-base font-semibold text-foreground sm:text-sm">
                                                {report.title}
                                            </h3>
                                        </div>

                                        <p className="break-words text-sm text-muted-foreground">
                                            {report.description}
                                        </p>

                                        <div className="text-xs text-muted-foreground">
                                            Reported by {report.reporter} ·{" "}
                                            {report.contact}
                                        </div>
                                    </div>

                                    {/* right badges */}
                                    <div className="flex flex-col gap-2 sm:items-end">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <Badge
                                                variant={
                                                    getSeverityVariant(
                                                        report.severity,
                                                    ) as any
                                                }
                                            >
                                                {report.severity}
                                            </Badge>
                                            <Badge
                                                className={getStatusColor(
                                                    report.status,
                                                )}
                                            >
                                                <span className="flex items-center gap-1">
                                                    {getStatusIcon(
                                                        report.status,
                                                    )}
                                                    {report.status}
                                                </span>
                                            </Badge>
                                        </div>
                                        <span className="text-xs text-muted-foreground sm:text-right">
                                            {report.time}
                                        </span>
                                    </div>
                                </div>

                                {/* action buttons */}
                                <div className="mt-3 flex flex-wrap justify-end gap-2">
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        disabled={loading === report.id}
                                        onClick={() =>
                                            updateStatus(report.id, "open")
                                        }
                                        className="flex-shrink-0"
                                    >
                                        {loading === report.id ? (
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <XCircle className="h-4 w-4 text-orange-600" />
                                        )}
                                    </Button>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        disabled={loading === report.id}
                                        onClick={() =>
                                            updateStatus(
                                                report.id,
                                                "in-progress",
                                            )
                                        }
                                        className="flex-shrink-0"
                                    >
                                        {loading === report.id ? (
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <Clock className="h-4 w-4 text-blue-600" />
                                        )}
                                    </Button>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        disabled={loading === report.id}
                                        onClick={() =>
                                            updateStatus(report.id, "resolved")
                                        }
                                        className="flex-shrink-0"
                                    >
                                        {loading === report.id ? (
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                                        )}
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        className="flex-shrink-0"
                                    >
                                        <Eye className="h-4 w-4 text-muted-foreground" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default IncidentManagement;
