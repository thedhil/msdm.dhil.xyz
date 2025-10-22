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
            position: "Koordinator Logistik",
            score: 92,
            status: "diterima",
            experience: "2 tahun pengalaman manajemen acara",
        },
        {
            name: "Siti Nurhaliza",
            position: "Tim Dokumentasi",
            score: 88,
            status: "diterima",
            experience: "Fotografi & videografi",
        },
        {
            name: "Budi Santoso",
            position: "Dukungan Teknis",
            score: 85,
            status: "ditinjau",
            experience: "Infrastruktur TI",
        },
        {
            name: "Dewi Lestari",
            position: "Tim Registrasi",
            score: 79,
            status: "ditinjau",
            experience: "Layanan pelanggan",
        },
        {
            name: "Rudi Hermawan",
            position: "Tim Keamanan",
            score: 65,
            status: "menunggu",
            experience: "Relawan keamanan kampus",
            type: "internal",
        },
    ];

    const externalCandidates = [
        {
            name: "Ahmad Fauzi",
            position: "Koordinator Acara",
            score: 95,
            status: "diterima",
            experience: "3 tahun pengalaman profesional manajemen acara",
            type: "external",
        },
        {
            name: "Maya Putri",
            position: "Hubungan Media",
            score: 91,
            status: "diterima",
            experience: "Spesialis PR di perusahaan korporat",
            type: "external",
        },
        {
            name: "Rizky Pratama",
            position: "Infrastruktur TI",
            score: 88,
            status: "ditinjau",
            experience: "Administrator sistem",
            type: "external",
        },
        {
            name: "Linda Sari",
            position: "Tim Keuangan",
            score: 83,
            status: "ditinjau",
            experience: "Profesional akuntansi",
            type: "external",
        },
    ];

    const positions = [
        { role: "Koordinator Logistik", slots: 3, filled: 2 },
        { role: "Dukungan Teknis", slots: 4, filled: 3 },
        { role: "Tim Registrasi", slots: 6, filled: 5 },
        { role: "Tim Dokumentasi", slots: 3, filled: 2 },
        { role: "Tim Keamanan", slots: 5, filled: 3 },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "diterima":
                return "bg-green-100 text-green-700";
            case "ditinjau":
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
                    Portal Rekrutmen
                </h1>
                <p className="text-muted-foreground">
                    Sistem berbasis data untuk rekrutmen panitia internal dan
                    profesional eksternal
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
                        Rekrutmen Internal
                    </TabsTrigger>
                    <TabsTrigger value="external" className="gap-2">
                        <Building2 className="h-4 w-4" />
                        Profesional Eksternal
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="internal" className="mt-6 space-y-8">
                    <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/20">
                        <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
                            Rekrutmen Panitia Internal
                        </h3>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                            Merekrut mahasiswa UNESA untuk bergabung dalam
                            kepanitiaan PKKMB. Berfokus pada pengembangan
                            keterampilan dan partisipasi kampus.
                        </p>
                    </div>

                    {/* Statistik */}
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
                                            Lamaran Masuk
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
                                            Diterima
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
                                            Dalam Tinjauan
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
                                            Rata-rata Nilai
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Formulir Pendaftaran */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <UserPlus className="h-5 w-5 text-primary" />
                                    Daftar Sebagai Panitia
                                </CardTitle>
                                <CardDescription>
                                    Bergabung dengan tim kepanitiaan PKKMB 2025
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullname">
                                            Nama Lengkap
                                        </Label>
                                        <Input
                                            id="fullname"
                                            placeholder="Masukkan nama lengkap Anda"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="nim">NIM</Label>
                                        <Input
                                            id="nim"
                                            placeholder="Nomor Induk Mahasiswa"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Alamat Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="email@unesa.ac.id"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="position">
                                        Posisi yang Diinginkan
                                    </Label>
                                    <Select>
                                        <SelectTrigger id="position">
                                            <SelectValue placeholder="Pilih posisi" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="logistics">
                                                Koordinator Logistik
                                            </SelectItem>
                                            <SelectItem value="technical">
                                                Dukungan Teknis
                                            </SelectItem>
                                            <SelectItem value="registration">
                                                Tim Registrasi
                                            </SelectItem>
                                            <SelectItem value="documentation">
                                                Tim Dokumentasi
                                            </SelectItem>
                                            <SelectItem value="security">
                                                Tim Keamanan
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="experience">
                                        Pengalaman Relevan
                                    </Label>
                                    <Textarea
                                        id="experience"
                                        placeholder="Ceritakan pengalaman Anda dalam organisasi acara atau keterampilan terkait..."
                                        rows={4}
                                    />
                                </div>
                                <Button className="w-full">
                                    Kirim Lamaran
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Posisi yang Tersedia */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Posisi Tersedia</CardTitle>
                                <CardDescription>
                                    Slot terbuka dan posisi terisi
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
                                                {position.slots} terisi
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

                    {/* Daftar Kandidat */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Lamaran Terbaru</CardTitle>
                            <CardDescription>
                                Kandidat dengan skor dan status evaluasi
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
                                                    Nilai
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

                {/* Tab eksternal bisa dilanjutkan dengan pola sama */}
            </Tabs>
        </div>
    );
};

export default Recruitment;
