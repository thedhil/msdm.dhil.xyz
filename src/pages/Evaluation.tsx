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
        { team: "Tim Logistik", score: 92, tasks: 45, completed: 42 },
        { team: "Tim Teknis", score: 88, tasks: 38, completed: 35 },
        { team: "Tim Registrasi", score: 85, tasks: 52, completed: 47 },
        { team: "Tim Dokumentasi", score: 90, tasks: 28, completed: 26 },
        { team: "Tim Keamanan", score: 78, tasks: 35, completed: 30 },
    ];

    const individuals = [
        {
            name: "Andi Pratama",
            role: "Koordinator Logistik",
            score: 95,
            rating: 4.8,
        },
        {
            name: "Siti Nurhaliza",
            role: "Dokumentasi",
            score: 93,
            rating: 4.9,
        },
        {
            name: "Budi Santoso",
            role: "Koordinator Teknis",
            score: 90,
            rating: 4.7,
        },
        { name: "Dewi Lestari", role: "Registrasi", score: 87, rating: 4.6 },
        { name: "Rudi Hermawan", role: "Keamanan", score: 82, rating: 4.4 },
    ];

    const metrics = [
        {
            category: "Penilaian Kinerja",
            description:
                "Pengukuran objektif terhadap penyelesaian tugas dan kualitas hasil kerja",
            score: 87,
            icon: Target,
            color: "bg-blue-100 text-blue-700",
        },
        {
            category: "Reward & Punishment",
            description:
                "Sistem penghargaan untuk kinerja luar biasa dan evaluasi yang adil",
            score: 92,
            icon: Award,
            color: "bg-green-100 text-green-700",
        },
        {
            category: "Motivasi Herzberg",
            description:
                "Analisis faktor kepuasan kerja dan motivasi berdasarkan teori Herzberg",
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
            return { label: "Sangat Baik", variant: "default" as const };
        if (score >= 80)
            return { label: "Baik", variant: "secondary" as const };
        if (score >= 70) return { label: "Cukup", variant: "outline" as const };
        return { label: "Perlu Peningkatan", variant: "destructive" as const };
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                    Evaluasi Kinerja
                </h1>
                <p className="text-muted-foreground">
                    Metrik komprehensif menggunakan teori SDM dan penilaian
                    berbasis data
                </p>
            </div>

            {/* Metrik Teori SDM */}
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

            {/* Kinerja Tim */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Ringkasan Kinerja Tim
                    </CardTitle>
                    <CardDescription>
                        Analisis perbandingan efektivitas setiap tim panitia
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
                                                        {team.tasks} tugas
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
                                                    <span>Nilai Kinerja</span>
                                                    <span>{team.score}%</span>
                                                </div>
                                                <Progress
                                                    value={team.score}
                                                    className="h-2"
                                                />
                                                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                                                    <span>
                                                        Penyelesaian Tugas
                                                    </span>
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

            {/* Kinerja Individu */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        Anggota Berprestasi
                    </CardTitle>
                    <CardDescription>
                        Peringkat kinerja individu panitia berdasarkan hasil
                        evaluasi
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
                                            Nilai
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Wawasan Utama */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                    <CardTitle>Wawasan Kinerja</CardTitle>
                    <CardDescription>
                        Rekomendasi berbasis data untuk peningkatan performa
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                            <TrendingUp className="h-3 w-3 text-green-600" />
                        </div>
                        <div>
                            <p className="font-medium text-foreground">
                                Koordinasi Tim yang Luar Biasa
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Tim Logistik dan Dokumentasi menunjukkan
                                kolaborasi luar biasa dengan tingkat
                                penyelesaian tugas di atas 90%
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                            <Award className="h-3 w-3 text-blue-600" />
                        </div>
                        <div>
                            <p className="font-medium text-foreground">
                                Peluang Penghargaan
                            </p>
                            <p className="text-sm text-muted-foreground">
                                5 anggota berprestasi menunjukkan kualitas
                                kepemimpinan yang potensial untuk posisi
                                koordinator di acara berikutnya
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                            <Target className="h-3 w-3 text-orange-600" />
                        </div>
                        <div>
                            <p className="font-medium text-foreground">
                                Area yang Perlu Ditingkatkan
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Tim Keamanan disarankan untuk mengikuti sesi
                                pelatihan tambahan guna meningkatkan waktu
                                respons dan kepatuhan terhadap protokol
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Evaluation;
