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
            label: "Penyelesaian Tugas",
            value: "78%",
            change: "+12%",
            icon: CheckCircle2,
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
        {
            label: "Panitia Aktif",
            value: "24",
            change: "+3",
            icon: Users,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
        },
        {
            label: "Insiden Terbuka",
            value: "5",
            change: "-2",
            icon: AlertCircle,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
        },
        {
            label: "Dokumen Dibagikan",
            value: "47",
            change: "+8",
            icon: FileText,
            color: "text-purple-600",
            bgColor: "bg-purple-50",
        },
    ];

    const recentActivities = [
        {
            action: "Tugas diselesaikan",
            details: "Pemeriksaan sistem suara disetujui oleh Tim Teknis",
            time: "5 menit yang lalu",
            status: "success",
        },
        {
            action: "Insiden dilaporkan",
            details: "Kerusakan mikrofon di Aula A",
            time: "12 menit yang lalu",
            status: "warning",
        },
        {
            action: "Dokumen diunggah",
            details: "Rencana evakuasi darurat ditambahkan ke folder bersama",
            time: "1 jam yang lalu",
            status: "info",
        },
        {
            action: "Pembaruan rekrutmen",
            details: "15 lamaran baru diterima untuk tim koordinasi",
            time: "2 jam yang lalu",
            status: "success",
        },
        {
            action: "Tugas diberikan",
            details: "Penyiapan meja registrasi ditugaskan ke Tim Logistik",
            time: "3 jam yang lalu",
            status: "info",
        },
    ];

    const upcomingDeadlines = [
        {
            task: "Selesaikan pengujian sistem registrasi",
            due: "Hari ini, 17:00",
            priority: "tinggi",
        },
        {
            task: "Kirim daftar pengecekan penyiapan tempat",
            due: "Besok, 10:00",
            priority: "sedang",
        },
        {
            task: "Selesaikan materi pengarahan relawan",
            due: "20 Des 2025",
            priority: "sedang",
        },
        {
            task: "Kirim laporan akhir anggaran",
            due: "22 Des 2025",
            priority: "rendah",
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                    Ringkasan Dashboard
                </h1>
                <p className="text-muted-foreground">
                    Pemantauan waktu nyata untuk progres acara PKKMB dan
                    aktivitas panitia
                </p>
            </div>

            {/* Statistik */}
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
                {/* Progres Acara */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-primary" />
                            Progres Acara
                        </CardTitle>
                        <CardDescription>
                            Status keseluruhan persiapan PKKMB 2025
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <div className="mb-2 flex justify-between">
                                <span className="text-sm font-medium">
                                    Penyiapan Tempat
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
                                    Sistem Registrasi
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
                                    Pelatihan Panitia
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
                                    Persiapan Konten
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    85%
                                </span>
                            </div>
                            <Progress value={85} className="h-2" />
                        </div>
                    </CardContent>
                </Card>

                {/* Tenggat Waktu */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary" />
                            Tenggat Waktu Mendatang
                        </CardTitle>
                        <CardDescription>
                            Tugas yang memerlukan perhatian segera
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
                                            deadline.priority === "tinggi"
                                                ? "bg-destructive"
                                                : deadline.priority === "sedang"
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
                                            deadline.priority === "tinggi"
                                                ? "destructive"
                                                : deadline.priority === "sedang"
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

            {/* Aktivitas Terbaru */}
            <Card>
                <CardHeader>
                    <CardTitle>Aktivitas Terbaru</CardTitle>
                    <CardDescription>
                        Pembaruan terbaru dari seluruh panitia
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
