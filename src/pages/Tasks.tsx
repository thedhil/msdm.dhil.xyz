import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckSquare, Circle, Clock, CheckCircle2, Plus } from "lucide-react";

const Tasks = () => {
    const columns = [
        {
            title: "To Do",
            status: "todo",
            color: "border-slate-300",
            tasks: [
                {
                    id: "T-101",
                    title: "Set up registration counters",
                    assignee: "Logistics Team",
                    priority: "high",
                    deadline: "Dec 18",
                    tags: ["venue", "setup"],
                },
                {
                    id: "T-102",
                    title: "Print attendee name tags",
                    assignee: "Admin Team",
                    priority: "medium",
                    deadline: "Dec 19",
                    tags: ["materials"],
                },
                {
                    id: "T-103",
                    title: "Prepare welcome kits",
                    assignee: "Coordination Team",
                    priority: "medium",
                    deadline: "Dec 20",
                    tags: ["materials", "attendees"],
                },
            ],
        },
        {
            title: "In Progress",
            status: "in-progress",
            color: "border-blue-300",
            tasks: [
                {
                    id: "T-104",
                    title: "Test audio system in all rooms",
                    assignee: "Technical Team",
                    priority: "high",
                    deadline: "Today",
                    tags: ["technical", "urgent"],
                },
                {
                    id: "T-105",
                    title: "Coordinate with catering service",
                    assignee: "F&B Committee",
                    priority: "high",
                    deadline: "Today",
                    tags: ["catering"],
                },
                {
                    id: "T-106",
                    title: "Final venue walkthrough",
                    assignee: "Operations Team",
                    priority: "medium",
                    deadline: "Tomorrow",
                    tags: ["venue", "inspection"],
                },
            ],
        },
        {
            title: "Review",
            status: "review",
            color: "border-yellow-300",
            tasks: [
                {
                    id: "T-107",
                    title: "Review emergency procedures",
                    assignee: "Safety Team",
                    priority: "high",
                    deadline: "Tomorrow",
                    tags: ["safety", "procedures"],
                },
                {
                    id: "T-108",
                    title: "Verify attendee list accuracy",
                    assignee: "Registration Team",
                    priority: "medium",
                    deadline: "Dec 19",
                    tags: ["data", "attendees"],
                },
            ],
        },
        {
            title: "Done",
            status: "done",
            color: "border-green-300",
            tasks: [
                {
                    id: "T-109",
                    title: "Book venue for main event",
                    assignee: "Coordination Team",
                    priority: "high",
                    deadline: "Dec 10",
                    tags: ["venue"],
                },
                {
                    id: "T-110",
                    title: "Design event branding materials",
                    assignee: "Creative Team",
                    priority: "medium",
                    deadline: "Dec 12",
                    tags: ["design", "marketing"],
                },
                {
                    id: "T-111",
                    title: "Create event schedule",
                    assignee: "Program Team",
                    priority: "high",
                    deadline: "Dec 13",
                    tags: ["planning"],
                },
            ],
        },
    ];

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "high":
                return "destructive";
            case "medium":
                return "default";
            default:
                return "secondary";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "done":
                return <CheckCircle2 className="h-4 w-4 text-green-600" />;
            case "in-progress":
                return <Clock className="h-4 w-4 text-blue-600" />;
            case "review":
                return <Circle className="h-4 w-4 text-yellow-600" />;
            default:
                return <Circle className="h-4 w-4 text-slate-400" />;
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="mb-2 text-3xl font-bold text-foreground">
                        Task Management
                    </h1>
                    <p className="text-muted-foreground">
                        Kanban board for tracking committee responsibilities and
                        deadlines
                    </p>
                </div>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add Task
                </Button>
            </div>

            {/* Kanban Board */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {columns.map((column) => (
                    <Card
                        key={column.status}
                        className={`border-t-4 ${column.color}`}
                    >
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    {getStatusIcon(column.status)}
                                    {column.title}
                                </CardTitle>
                                <Badge variant="secondary">
                                    {column.tasks.length}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {column.tasks.map((task) => (
                                <Card
                                    key={task.id}
                                    className="cursor-pointer transition-shadow hover:shadow-md"
                                >
                                    <CardContent className="space-y-3 p-4">
                                        <div className="flex items-start justify-between">
                                            <Badge
                                                variant="outline"
                                                className="font-mono text-xs"
                                            >
                                                {task.id}
                                            </Badge>
                                            <Badge
                                                variant={
                                                    getPriorityColor(
                                                        task.priority,
                                                    ) as any
                                                }
                                                className="text-xs"
                                            >
                                                {task.priority}
                                            </Badge>
                                        </div>
                                        <h4 className="text-sm font-semibold leading-tight text-foreground">
                                            {task.title}
                                        </h4>
                                        <div className="space-y-2">
                                            <p className="text-xs text-muted-foreground">
                                                Assigned to:{" "}
                                                <span className="font-medium">
                                                    {task.assignee}
                                                </span>
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                Due:{" "}
                                                <span className="font-medium">
                                                    {task.deadline}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {task.tags.map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="secondary"
                                                    className="text-xs"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                            {column.status !== "done" && (
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Plus className="h-4 w-4" />
                                    Add task
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Task Summary */}
            <Card>
                <CardHeader>
                    <CardTitle>Task Summary</CardTitle>
                    <CardDescription>
                        Overall progress across all committees
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6 sm:grid-cols-4">
                        <div className="text-center">
                            <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                                <Circle className="h-8 w-8 text-slate-600" />
                            </div>
                            <p className="text-2xl font-bold text-foreground">
                                8
                            </p>
                            <p className="text-sm text-muted-foreground">
                                To Do
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                <Clock className="h-8 w-8 text-blue-600" />
                            </div>
                            <p className="text-2xl font-bold text-foreground">
                                6
                            </p>
                            <p className="text-sm text-muted-foreground">
                                In Progress
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                                <Circle className="h-8 w-8 text-yellow-600" />
                            </div>
                            <p className="text-2xl font-bold text-foreground">
                                4
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Review
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                <CheckCircle2 className="h-8 w-8 text-green-600" />
                            </div>
                            <p className="text-2xl font-bold text-foreground">
                                24
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Completed
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Tasks;
