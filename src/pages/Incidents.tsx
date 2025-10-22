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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { AlertTriangle, Plus, CheckCircle2, Clock } from "lucide-react";

const Incidents = () => {
    const [showForm, setShowForm] = useState(false);

    const incidents = [
        {
            id: "INC-001",
            title: "Kerusakan mikrofon di Aula A",
            description:
                "Mikrofon utama tidak berfungsi saat gladi bersih pidato pembukaan",
            reportedBy: "Tim Audio",
            priority: "tinggi",
            status: "proses",
            time: "12 menit yang lalu",
        },
        {
            id: "INC-002",
            title: "Masalah komputer meja registrasi",
            description:
                "Satu komputer registrasi tidak dapat terhubung ke basis data",
            reportedBy: "Tim Registrasi",
            priority: "sedang",
            status: "terbuka",
            time: "1 jam yang lalu",
        },
        {
            id: "INC-003",
            title: "Spanduk di pintu masuk belum terpasang",
            description:
                "Spanduk selamat datang belum dipasang di pintu masuk utama",
            reportedBy: "Tim Dekorasi",
            priority: "sedang",
            status: "selesai",
            time: "3 jam yang lalu",
        },
        {
            id: "INC-004",
            title: "Kurangnya papan petunjuk area parkir",
            description: "Perlu tambahan papan arah untuk area parkir",
            reportedBy: "Tim Logistik",
            priority: "rendah",
            status: "terbuka",
            time: "5 jam yang lalu",
        },
        {
            id: "INC-005",
            title: "AC tidak berfungsi di Ruang B",
            description: "Masalah kontrol suhu di ruang breakout",
            reportedBy: "Tim Fasilitas",
            priority: "tinggi",
            status: "selesai",
            time: "1 hari yang lalu",
        },
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "selesai":
                return <CheckCircle2 className="h-4 w-4" />;
            case "proses":
                return <Clock className="h-4 w-4" />;
            default:
                return <AlertTriangle className="h-4 w-4" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "selesai":
                return "bg-green-100 text-green-700";
            case "proses":
                return "bg-blue-100 text-blue-700";
            default:
                return "bg-orange-100 text-orange-700";
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "tinggi":
                return "destructive";
            case "sedang":
                return "default";
            default:
                return "secondary";
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="mb-2 text-3xl font-bold text-foreground">
                        Pelaporan Insiden
                    </h1>
                    <p className="text-muted-foreground">
                        Kirim laporan masalah dengan cepat dan pantau status
                        secara waktu nyata
                    </p>
                </div>
                <Button
                    onClick={() => setShowForm(!showForm)}
                    className="gap-2"
                >
                    <Plus className="h-4 w-4" />
                    Laporkan Insiden
                </Button>
            </div>

            {/* Statistik */}
            <div className="grid gap-6 sm:grid-cols-3">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                                <AlertTriangle className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-foreground">
                                    5
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Insiden Terbuka
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                <Clock className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-foreground">
                                    2
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Sedang Diproses
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                                <CheckCircle2 className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-foreground">
                                    12
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Selesai
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Form Laporan */}
            {showForm && (
                <Card>
                    <CardHeader>
                        <CardTitle>Laporkan Insiden Baru</CardTitle>
                        <CardDescription>
                            Isi detail masalah agar dapat segera ditindaklanjuti
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Judul Insiden</Label>
                            <Input
                                id="title"
                                placeholder="Deskripsi singkat masalah"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">
                                Deskripsi Lengkap
                            </Label>
                            <Textarea
                                id="description"
                                placeholder="Jelaskan secara detail..."
                                rows={4}
                            />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="priority">
                                    Tingkat Prioritas
                                </Label>
                                <Select>
                                    <SelectTrigger id="priority">
                                        <SelectValue placeholder="Pilih prioritas" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="high">
                                            Tinggi - Mendesak
                                        </SelectItem>
                                        <SelectItem value="medium">
                                            Sedang - Penting
                                        </SelectItem>
                                        <SelectItem value="low">
                                            Rendah - Dapat Ditunda
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="location">Lokasi</Label>
                                <Input
                                    id="location"
                                    placeholder="Di mana insiden terjadi?"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button>Kirim Laporan</Button>
                            <Button
                                variant="outline"
                                onClick={() => setShowForm(false)}
                            >
                                Batal
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Daftar Insiden */}
            <Card>
                <CardHeader>
                    <CardTitle>Daftar Semua Insiden</CardTitle>
                    <CardDescription>
                        Pemantauan langsung semua insiden yang dilaporkan
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {incidents.map((incident) => (
                            <div
                                key={incident.id}
                                className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
                            >
                                <div className="mb-2 flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <Badge
                                            variant="outline"
                                            className="font-mono"
                                        >
                                            {incident.id}
                                        </Badge>
                                        <h3 className="font-semibold text-foreground">
                                            {incident.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge
                                            variant={
                                                getPriorityColor(
                                                    incident.priority,
                                                ) as any
                                            }
                                        >
                                            {incident.priority}
                                        </Badge>
                                        <Badge
                                            className={getStatusColor(
                                                incident.status,
                                            )}
                                        >
                                            <span className="flex items-center gap-1">
                                                {getStatusIcon(incident.status)}
                                                {incident.status}
                                            </span>
                                        </Badge>
                                    </div>
                                </div>
                                <p className="mb-3 text-sm text-muted-foreground">
                                    {incident.description}
                                </p>
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                    <span>
                                        {" "}
                                        Dilaporkan oleh {incident.reportedBy}
                                    </span>
                                    <span>{incident.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Incidents;
