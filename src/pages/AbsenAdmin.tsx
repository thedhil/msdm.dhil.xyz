import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, CheckCircle2, XCircle, Clock } from "lucide-react";
import { useState } from "react";

const ManagePresence = () => {
    const [loading, setLoading] = useState<string | null>(null);

    const presences = [
        {
            id: "PRS-001",
            name: "Ahmad Rinaldi",
            division: "Logistik",
            time: "07:15 WIB",
            status: "approved",
            photo: "/images/sample1.jpg",
        },
        {
            id: "PRS-002",
            name: "Siti Aisyah",
            division: "Acara",
            time: "07:20 WIB",
            status: "pending",
            photo: "/images/sample2.jpg",
        },
        {
            id: "PRS-003",
            name: "Rudi Hermawan",
            division: "Keamanan",
            time: "07:25 WIB",
            status: "rejected",
            photo: "/images/sample3.jpg",
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "approved":
                return "bg-green-100 text-green-700";
            case "pending":
                return "bg-blue-100 text-blue-700";
            case "rejected":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const updateStatus = (id: string, status: string) => {
        setLoading(id);
        setTimeout(() => setLoading(null), 800);
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                    Manajemen Presensi
                </h1>
                <p className="text-muted-foreground">
                    Daftar dan pengelolaan kehadiran panitia PKKMB FISIPOL UNESA
                    2025.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Data Kehadiran</CardTitle>
                    <CardDescription>
                        Rekap presensi harian anggota panitia.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {presences.map((p) => (
                            <div
                                key={p.id}
                                className="flex flex-col rounded-lg border p-4 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div className="flex items-start gap-4 sm:items-center">
                                    <img
                                        src={p.photo}
                                        alt={p.name}
                                        className="h-12 w-12 rounded-lg object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-foreground">
                                            {p.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {p.division} · {p.time}
                                        </p>
                                        <Badge
                                            className={`mt-1 ${getStatusColor(p.status)}`}
                                        >
                                            {p.status}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="mt-3 flex items-center gap-2 sm:mt-0">
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        disabled={loading === p.id}
                                        onClick={() =>
                                            updateStatus(p.id, "approved")
                                        }
                                    >
                                        {loading === p.id ? (
                                            <Clock className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                                        )}
                                    </Button>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        disabled={loading === p.id}
                                        onClick={() =>
                                            updateStatus(p.id, "rejected")
                                        }
                                    >
                                        {loading === p.id ? (
                                            <Clock className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <XCircle className="h-4 w-4 text-red-600" />
                                        )}
                                    </Button>
                                    <Button size="icon" variant="ghost">
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

export default ManagePresence;
