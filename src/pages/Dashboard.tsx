import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
    TrendingUp,
    Users,
    CheckCircle2,
    AlertCircle,
    Clock,
    FileText,
    Target,
} from "lucide-react";

const Dashboard = () => {
    const stats = [
        {
            label: "Task Completion",
            value: "78%",
            change: "+12%",
            icon: CheckCircle2,
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
        {
            label: "Active Committees",
            value: "24",
            change: "+3",
            icon: Users,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
        },
        {
            label: "Open Incidents",
            value: "5",
            change: "-2",
            icon: AlertCircle,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
        },
        {
            label: "Documents Shared",
            value: "47",
            change: "+8",
            icon: FileText,
            color: "text-purple-600",
            bgColor: "bg-purple-50",
        },
    ];

    const recentActivities = [
        {
            action: "Task completed",
            details: "Sound system setup verified by Technical Team",
            time: "5 minutes ago",
            status: "success",
        },
        {
            action: "Incident reported",
            details: "Microphone malfunction in Hall A",
            time: "12 minutes ago",
            status: "warning",
        },
        {
            action: "Document uploaded",
            details: "Emergency evacuation plan added to shared folder",
            time: "1 hour ago",
            status: "info",
        },
        {
            action: "Recruitment update",
            details: "15 new applications received for coordination team",
            time: "2 hours ago",
            status: "success",
        },
        {
            action: "Task assigned",
            details: "Registration desk setup assigned to Logistics Team",
            time: "3 hours ago",
            status: "info",
        },
    ];

    const upcomingDeadlines = [
        {
            task: "Finalize registration system testing",
            due: "Today, 5:00 PM",
            priority: "high",
        },
        {
            task: "Submit venue setup checklist",
            due: "Tomorrow, 10:00 AM",
            priority: "medium",
        },
        {
            task: "Complete volunteer briefing materials",
            due: "Dec 20, 2025",
            priority: "medium",
        },
        {
            task: "Final budget report submission",
            due: "Dec 22, 2025",
            priority: "low",
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                    Dashboard Overview
                </h1>
                <p className="text-muted-foreground">
                    Real-time monitoring of PKKMB event progress and committee
                    activities
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.label}>
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <div
                                        className={`h-12 w-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}
                                    >
                                        <Icon
                                            className={`h-6 w-6 ${stat.color}`}
                                        />
                                    </div>
                                    <Badge
                                        variant="secondary"
                                        className="gap-1"
                                    >
                                        <TrendingUp className="h-3 w-3" />
                                        {stat.change}
                                    </Badge>
                                </div>
                                <p className="mb-1 text-2xl font-bold text-foreground">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {stat.label}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Event Progress */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-primary" />
                            Event Progress
                        </CardTitle>
                        <CardDescription>
                            Overall preparation status for PKKMB 2025
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <div className="mb-2 flex justify-between">
                                <span className="text-sm font-medium">
                                    Venue Setup
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    90%
                                </span>
                            </div>
                            <Progress value={90} className="h-2" />
                        </div>
                        <div>
                            <div className="mb-2 flex justify-between">
                                <span className="text-sm font-medium">
                                    Registration System
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    75%
                                </span>
                            </div>
                            <Progress value={75} className="h-2" />
                        </div>
                        <div>
                            <div className="mb-2 flex justify-between">
                                <span className="text-sm font-medium">
                                    Committee Training
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    60%
                                </span>
                            </div>
                            <Progress value={60} className="h-2" />
                        </div>
                        <div>
                            <div className="mb-2 flex justify-between">
                                <span className="text-sm font-medium">
                                    Content Preparation
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    85%
                                </span>
                            </div>
                            <Progress value={85} className="h-2" />
                        </div>
                    </CardContent>
                </Card>

                {/* Upcoming Deadlines */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary" />
                            Upcoming Deadlines
                        </CardTitle>
                        <CardDescription>
                            Tasks requiring immediate attention
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {upcomingDeadlines.map((deadline, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 border-b pb-4 last:border-0 last:pb-0"
                                >
                                    <div
                                        className={`mt-1 h-2 w-2 flex-shrink-0 rounded-full ${
                                            deadline.priority === "high"
                                                ? "bg-destructive"
                                                : deadline.priority === "medium"
                                                  ? "bg-accent"
                                                  : "bg-muted"
                                        }`}
                                    />
                                    <div className="min-w-0 flex-1">
                                        <p className="mb-1 text-sm font-medium text-foreground">
                                            {deadline.task}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {deadline.due}
                                        </p>
                                    </div>
                                    <Badge
                                        variant={
                                            deadline.priority === "high"
                                                ? "destructive"
                                                : deadline.priority === "medium"
                                                  ? "default"
                                                  : "secondary"
                                        }
                                    >
                                        {deadline.priority}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activities */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>
                        Latest updates from all committees
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {recentActivities.map((activity, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0"
                            >
                                <div
                                    className={`mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                                        activity.status === "success"
                                            ? "bg-green-100"
                                            : activity.status === "warning"
                                              ? "bg-orange-100"
                                              : "bg-blue-100"
                                    }`}
                                >
                                    <div
                                        className={`h-2 w-2 rounded-full ${
                                            activity.status === "success"
                                                ? "bg-green-600"
                                                : activity.status === "warning"
                                                  ? "bg-orange-600"
                                                  : "bg-blue-600"
                                        }`}
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="mb-1 text-sm font-medium text-foreground">
                                        {activity.action}
                                    </p>
                                    <p className="mb-1 text-sm text-muted-foreground">
                                        {activity.details}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard;
