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
            title: "Proyektor tidak berfungsi di Aula B",
            reporter: "John Doe",
            contact: "john@example.com",
            severity: "tinggi",
            status: "terbuka",
            time: "5 menit yang lalu",
            description:
                "Proyektor mati saat sesi berlangsung dan tidak bisa dinyalakan kembali.",
        },
        {
            id: "INC-102",
            title: "Lantai licin di dekat pintu masuk",
            reporter: "Pengunjung",
            contact: "-",
            severity: "sedang",
            status: "proses",
            time: "20 menit yang lalu",
            description:
                "Minuman tumpah menyebabkan lantai licin di gerbang A.",
        },
        {
            id: "INC-103",
            title: "Laporan tas hilang",
            reporter: "Aulia Rahman",
            contact: "aulia@gmail.com",
            severity: "rendah",
            status: "selesai",
            time: "2 jam yang lalu",
            description: "Peserta kehilangan tas di area kafetaria.",
        },
    ]);

    const getSeverityVariant = (severity: string) => {
        switch (severity) {
            case "tinggi":
                return "destructive";
            case "sedang":
                return "default";
            default:
                return "secondary";
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
                    Manajemen Insiden
                </h1>
                <p className="text-muted-foreground">
                    Panel kontrol admin untuk meninjau dan menyelesaikan laporan
                    insiden dari publik
                </p>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Semua Laporan</CardTitle>
                            <CardDescription>
                                Kelola dan perbarui status laporan
                            </CardDescription>
                        </div>
                        <Select value={filter} onValueChange={setFilter}>
                            <SelectTrigger className="w-[160px]">
                                <SelectValue placeholder="Filter status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Semua</SelectItem>
                                <SelectItem value="terbuka">Terbuka</SelectItem>
                                <SelectItem value="proses">
                                    Sedang Diproses
                                </SelectItem>
                                <SelectItem value="selesai">Selesai</SelectItem>
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
                                {/* Bagian Atas */}
                                <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                    {/* Info Kiri */}
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
                                            Dilaporkan oleh {report.reporter} ·{" "}
                                            {report.contact}
                                        </div>
                                    </div>

                                    {/* Status Kanan */}
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

                                {/* Tombol Aksi */}
                                <div className="mt-3 flex flex-wrap justify-end gap-2">
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        disabled={loading === report.id}
                                        onClick={() =>
                                            updateStatus(report.id, "terbuka")
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
                                            updateStatus(report.id, "proses")
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
                                            updateStatus(report.id, "selesai")
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
