import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    LayoutDashboard,
    FileText,
    AlertTriangle,
    CheckSquare,
    Users,
    BarChart3,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import heroImage from "@/assets/images/jokowi.png";

const features = [
    {
        title: "Ikhtisar Dasbor",
        description:
            "Pemantauan progres kegiatan secara real-time, tingkat penyelesaian tugas, serta notifikasi mendesak dalam satu tampilan terpusat.",
        icon: LayoutDashboard,
        color: "from-primary to-primary-light",
    },
    {
        title: "Pusat Dokumen",
        description:
            "Sistem berbasis cloud untuk mengunggah dan berbagi SOP, jadwal, serta rencana darurat di seluruh kepanitiaan.",
        icon: FileText,
        color: "from-accent to-accent-light",
    },
    {
        title: "Pelaporan Insiden",
        description:
            "Pengajuan masalah secara cepat oleh panitia lapangan, terhubung dengan dasbor langsung untuk tindakan segera.",
        icon: AlertTriangle,
        color: "from-destructive to-orange-500",
    },
    {
        title: "Manajemen Tugas",
        description:
            "Sistem papan Kanban untuk memantau tanggung jawab panitia, tenggat waktu, dan kolaborasi kerja.",
        icon: CheckSquare,
        color: "from-green-600 to-green-400",
    },
    {
        title: "Portal Rekrutmen",
        description:
            "Pendaftaran daring dan sistem penilaian berbasis data bagi calon panitia baru dengan pemantauan kinerja.",
        icon: Users,
        color: "from-blue-600 to-blue-400",
    },
    {
        title: "Evaluasi Kinerja",
        description:
            "Metode pengukuran komprehensif menggunakan teori MSDM, termasuk sistem Penilaian Kinerja serta Reward & Punishment.",
        icon: BarChart3,
        color: "from-purple-600 to-purple-400",
    },
];

const problems = [
    "Koordinasi yang tidak teratur selama kegiatan PKKMB 2025",
    "Tidak adanya sistem komunikasi terpusat",
    "Distribusi dan pemantauan tugas yang tidak efisien",
    "Kriteria rekrutmen panitia baru yang belum jelas",
    "Tidak ada metode evaluasi kinerja yang sistematis",
    "Dokumen dan rencana darurat sering tidak terkelola dengan baik",
];

const Index = () => {
    return (
        <div className="space-y-20 md:space-y-28">
            {/* Bagian Hero */}
            <section className="relative -mx-4 -mt-8 overflow-hidden px-4 py-16 sm:px-6 md:-mx-8 md:px-8 md:py-28">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(30, 58, 138, 0.85) 50%, rgba(59, 130, 246, 0.75) 100%), url(${heroImage})`,
                    }}
                />
                <div className="container relative mx-auto max-w-6xl px-2 sm:px-4">
                    <div className="max-w-3xl text-center md:text-left">
                        <div className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/20 px-4 py-2">
                            <span className="text-sm font-semibold text-white">
                                Solusi FISIPOL UNESA 2025
                            </span>
                        </div>
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Mentransformasi PKKMB menjadi Sistem yang
                            Profesional dan Transparan
                        </h1>
                        <p className="mb-8 text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
                            Solusi digital terpadu untuk mencegah kekacauan,
                            meningkatkan koordinasi, serta membangun manajemen
                            berbasis data dalam penyelenggaraan kegiatan
                            orientasi mahasiswa.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                            <Link to="/dashboard">
                                <Button
                                    size="lg"
                                    className="hover:bg-accent-light w-full gap-2 bg-accent text-accent-foreground sm:w-auto"
                                >
                                    Mulai Sekarang
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link to="/apply">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full gap-2 border-white/30 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
                                >
                                    Lihat Rekrutmen
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bagian Permasalahan */}
            <section className="container max-w-6xl px-4 sm:px-6">
                <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
                    <div>
                        <div className="mb-4 inline-block rounded-full border border-destructive/20 bg-destructive/10 px-3 py-1">
                            <span className="text-sm font-semibold text-destructive">
                                Permasalahan
                            </span>
                        </div>
                        <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                            Mengapa Sistem Ini Diperlukan
                        </h2>
                        <p className="mb-6 text-base text-muted-foreground sm:text-lg">
                            Pelaksanaan PKKMB FISIPOL UNESA 2025 menghadapi
                            berbagai tantangan organisasi yang berdampak pada
                            efektivitas kegiatan dan pengalaman seluruh panitia
                            serta peserta.
                        </p>
                        <ul className="space-y-3">
                            {problems.map((problem, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-destructive/20">
                                        <div className="h-2 w-2 rounded-full bg-destructive" />
                                    </div>
                                    <span className="text-sm text-foreground sm:text-base">
                                        {problem}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Card className="shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-2xl sm:text-3xl">
                                Solusi Kami
                            </CardTitle>
                            <CardDescription>
                                Sistem manajemen digital terpadu yang dirancang
                                khusus untuk penyelenggaraan kegiatan di tingkat
                                universitas.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[
                                {
                                    title: "Koordinasi Terpusat",
                                    desc: "Seluruh panitia bekerja melalui satu platform terpadu.",
                                },
                                {
                                    title: "Pembaruan Real-time",
                                    desc: "Notifikasi dan pemantauan tugas secara instan.",
                                },
                                {
                                    title: "Keputusan Berbasis Data",
                                    desc: "Analisis kinerja dan metrik yang terukur.",
                                },
                                {
                                    title: "Proses yang Transparan",
                                    desc: "Kriteria rekrutmen dan evaluasi yang jelas dan objektif.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                                    <div>
                                        <p className="font-semibold text-foreground">
                                            {item.title}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Bagian Fitur */}
            <section className="container max-w-6xl px-4 sm:px-6">
                <div className="mb-12 text-center">
                    <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
                        <span className="text-sm font-semibold text-primary">
                            Fitur Utama
                        </span>
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                        Paket Lengkap Manajemen Kegiatan
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                        Enam modul terintegrasi yang dirancang untuk menangani
                        seluruh aspek organisasi PKKMB.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={feature.title}
                                className="group transition-all duration-300 hover:shadow-lg"
                            >
                                <CardHeader>
                                    <div
                                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color} transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-sm sm:text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Bagian CTA */}
            <section className="container max-w-4xl px-4 sm:px-6">
                <Card className="to-primary-light relative overflow-hidden bg-gradient-to-br from-primary text-white">
                    <div className="absolute right-0 top-0 -mr-4 -mt-4 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                    <CardHeader className="relative text-center sm:text-left">
                        <CardTitle className="text-2xl text-white sm:text-3xl">
                            Siap Meningkatkan Manajemen Kegiatan Anda?
                        </CardTitle>
                        <CardDescription className="text-base text-white/90">
                            Mulailah menggunakan Sistem Manajemen PKKMB hari ini
                            dan rasakan penyelenggaraan kegiatan yang
                            profesional, transparan, dan efisien.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
                            <Link to="/dashboard">
                                <Button
                                    size="lg"
                                    className="hover:bg-accent-light w-full gap-2 bg-accent text-accent-foreground sm:w-auto"
                                >
                                    Akses Dasbor
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link to="/apply">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full gap-2 border-white bg-white text-primary hover:bg-white/90 sm:w-auto"
                                >
                                    Bergabung Sebagai Panitia
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
};

export default Index;
