import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Clock, Plus } from "lucide-react";

const Tasks = () => {
    const columns = [
        {
            title: "Belum Dikerjakan",
            status: "todo",
            color: "border-slate-300",
            tasks: [
                {
                    id: "T-101",
                    title: "Menyiapkan meja registrasi",
                    assignee: "Tim Logistik",
                    priority: "tinggi",
                    deadline: "18 Des",
                    tags: ["venue", "persiapan"],
                },
                {
                    id: "T-102",
                    title: "Mencetak kartu nama peserta",
                    assignee: "Tim Administrasi",
                    priority: "sedang",
                    deadline: "19 Des",
                    tags: ["materi"],
                },
                {
                    id: "T-103",
                    title: "Menyiapkan paket sambutan",
                    assignee: "Tim Koordinasi",
                    priority: "sedang",
                    deadline: "20 Des",
                    tags: ["materi", "peserta"],
                },
            ],
        },
        {
            title: "Sedang Dikerjakan",
            status: "in-progress",
            color: "border-blue-300",
            tasks: [
                {
                    id: "T-104",
                    title: "Menguji sistem audio di semua ruangan",
                    assignee: "Tim Teknis",
                    priority: "tinggi",
                    deadline: "Hari ini",
                    tags: ["teknis", "mendesak"],
                },
                {
                    id: "T-105",
                    title: "Koordinasi dengan layanan katering",
                    assignee: "Panitia F&B",
                    priority: "tinggi",
                    deadline: "Hari ini",
                    tags: ["katering"],
                },
                {
                    id: "T-106",
                    title: "Pemeriksaan akhir lokasi acara",
                    assignee: "Tim Operasional",
                    priority: "sedang",
                    deadline: "Besok",
                    tags: ["venue", "pemeriksaan"],
                },
            ],
        },
        {
            title: "Tinjauan",
            status: "review",
            color: "border-yellow-300",
            tasks: [
                {
                    id: "T-107",
                    title: "Meninjau prosedur darurat",
                    assignee: "Tim Keamanan",
                    priority: "tinggi",
                    deadline: "Besok",
                    tags: ["keamanan", "prosedur"],
                },
                {
                    id: "T-108",
                    title: "Memeriksa keakuratan daftar peserta",
                    assignee: "Tim Registrasi",
                    priority: "sedang",
                    deadline: "19 Des",
                    tags: ["data", "peserta"],
                },
            ],
        },
        {
            title: "Selesai",
            status: "done",
            color: "border-green-300",
            tasks: [
                {
                    id: "T-109",
                    title: "Memesan tempat untuk acara utama",
                    assignee: "Tim Koordinasi",
                    priority: "tinggi",
                    deadline: "10 Des",
                    tags: ["venue"],
                },
                {
                    id: "T-110",
                    title: "Mendesain materi branding acara",
                    assignee: "Tim Kreatif",
                    priority: "sedang",
                    deadline: "12 Des",
                    tags: ["desain", "promosi"],
                },
                {
                    id: "T-111",
                    title: "Membuat jadwal acara",
                    assignee: "Tim Program",
                    priority: "tinggi",
                    deadline: "13 Des",
                    tags: ["perencanaan"],
                },
            ],
        },
    ];

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
                        Manajemen Tugas
                    </h1>
                    <p className="text-muted-foreground">
                        Papan Kanban untuk memantau tanggung jawab panitia dan
                        tenggat waktu
                    </p>
                </div>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Tambah Tugas
                </Button>
            </div>

            {/* Papan Kanban */}
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
                                                Ditugaskan kepada:{" "}
                                                <span className="font-medium">
                                                    {task.assignee}
                                                </span>
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                Tenggat:{" "}
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
                                    Tambah tugas
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Ringkasan Tugas */}
            <Card>
                <CardHeader>
                    <CardTitle>Ringkasan Tugas</CardTitle>
                    <CardDescription>
                        Progres keseluruhan dari semua panitia
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
                                Belum Dikerjakan
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
                                Sedang Dikerjakan
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
                                Tinjauan
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
                                Selesai
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Tasks;
