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
    BarChart3,
    TrendingUp,
    Award,
    Target,
    Users,
    Star,
} from "lucide-react";

const Evaluation = () => {
    const teamPerformance = [
        { team: "Logistics Team", score: 92, tasks: 45, completed: 42 },
        { team: "Technical Team", score: 88, tasks: 38, completed: 35 },
        { team: "Registration Team", score: 85, tasks: 52, completed: 47 },
        { team: "Documentation Team", score: 90, tasks: 28, completed: 26 },
        { team: "Security Team", score: 78, tasks: 35, completed: 30 },
    ];

    const individuals = [
        {
            name: "Andi Pratama",
            role: "Logistics Lead",
            score: 95,
            rating: 4.8,
        },
        {
            name: "Siti Nurhaliza",
            role: "Documentation",
            score: 93,
            rating: 4.9,
        },
        {
            name: "Budi Santoso",
            role: "Technical Lead",
            score: 90,
            rating: 4.7,
        },
        { name: "Dewi Lestari", role: "Registration", score: 87, rating: 4.6 },
        { name: "Rudi Hermawan", role: "Security", score: 82, rating: 4.4 },
    ];

    const metrics = [
        {
            category: "Performance Appraisal",
            description: "Objective measurement of task completion and quality",
            score: 87,
            icon: Target,
            color: "bg-blue-100 text-blue-700",
        },
        {
            category: "Reward & Punishment",
            description: "Recognition system for outstanding performance",
            score: 92,
            icon: Award,
            color: "bg-green-100 text-green-700",
        },
        {
            category: "Herzberg Motivation",
            description: "Job satisfaction and motivation factors analysis",
            score: 85,
            icon: TrendingUp,
            color: "bg-purple-100 text-purple-700",
        },
    ];

    const getScoreColor = (score: number) => {
        if (score >= 90) return "text-green-600";
        if (score >= 80) return "text-blue-600";
        if (score >= 70) return "text-orange-600";
        return "text-red-600";
    };

    const getPerformanceBadge = (score: number) => {
        if (score >= 90)
            return { label: "Excellent", variant: "default" as const };
        if (score >= 80)
            return { label: "Good", variant: "secondary" as const };
        if (score >= 70)
            return { label: "Satisfactory", variant: "outline" as const };
        return { label: "Needs Improvement", variant: "destructive" as const };
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                    Performance Evaluation
                </h1>
                <p className="text-muted-foreground">
                    Comprehensive metrics using HR theories and data-driven
                    assessment
                </p>
            </div>

            {/* HR Theory Metrics */}
            <div className="grid gap-6 lg:grid-cols-3">
                {metrics.map((metric) => {
                    const Icon = metric.icon;
                    return (
                        <Card key={metric.category}>
                            <CardHeader>
                                <div className="mb-2 flex items-center justify-between">
                                    <div
                                        className={`h-12 w-12 rounded-lg ${metric.color} flex items-center justify-center`}
                                    >
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <span
                                        className={`text-2xl font-bold ${getScoreColor(metric.score)}`}
                                    >
                                        {metric.score}%
                                    </span>
                                </div>
                                <CardTitle className="text-lg">
                                    {metric.category}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    {metric.description}
                                </CardDescription>
                                <Progress
                                    value={metric.score}
                                    className="mt-4 h-2"
                                />
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Team Performance */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Team Performance Overview
                    </CardTitle>
                    <CardDescription>
                        Comparative analysis of committee team effectiveness
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {teamPerformance.map((team) => {
                            const completionRate =
                                (team.completed / team.tasks) * 100;
                            const badge = getPerformanceBadge(team.score);
                            return (
                                <div key={team.team} className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <div className="mb-2 flex items-center justify-between">
                                                <span className="font-semibold text-foreground">
                                                    {team.team}
                                                </span>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-sm text-muted-foreground">
                                                        {team.completed}/
                                                        {team.tasks} tasks
                                                    </span>
                                                    <Badge
                                                        variant={badge.variant}
                                                    >
                                                        {badge.label}
                                                    </Badge>
                                                    <span
                                                        className={`text-xl font-bold ${getScoreColor(team.score)}`}
                                                    >
                                                        {team.score}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs text-muted-foreground">
                                                    <span>
                                                        Performance Score
                                                    </span>
                                                    <span>{team.score}%</span>
                                                </div>
                                                <Progress
                                                    value={team.score}
                                                    className="h-2"
                                                />
                                                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                                                    <span>Task Completion</span>
                                                    <span>
                                                        {completionRate.toFixed(
                                                            0,
                                                        )}
                                                        %
                                                    </span>
                                                </div>
                                                <Progress
                                                    value={completionRate}
                                                    className="h-2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Individual Performance */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        Top Performers
                    </CardTitle>
                    <CardDescription>
                        Individual committee member performance rankings
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {individuals.map((individual, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                            >
                                <div className="flex flex-1 items-center gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                        <span className="font-bold text-primary">
                                            #{index + 1}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-foreground">
                                            {individual.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {individual.role}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-right">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                            <span className="font-semibold">
                                                {individual.rating}
                                            </span>
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            Rating
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p
                                            className={`text-2xl font-bold ${getScoreColor(individual.score)}`}
                                        >
                                            {individual.score}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Score
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Key Insights */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                    <CardTitle>Performance Insights</CardTitle>
                    <CardDescription>
                        Data-driven recommendations for improvement
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                            <TrendingUp className="h-3 w-3 text-green-600" />
                        </div>
                        <div>
                            <p className="font-medium text-foreground">
                                Outstanding Team Coordination
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Logistics and Documentation teams show
                                exceptional collaboration and task completion
                                rates above 90%
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                            <Award className="h-3 w-3 text-blue-600" />
                        </div>
                        <div>
                            <p className="font-medium text-foreground">
                                Recognition Opportunities
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Top 5 performers demonstrate leadership
                                qualities suitable for coordinator roles in
                                future events
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                            <Target className="h-3 w-3 text-orange-600" />
                        </div>
                        <div>
                            <p className="font-medium text-foreground">
                                Areas for Improvement
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Security team would benefit from additional
                                training sessions to improve response time and
                                protocol adherence
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Evaluation;
