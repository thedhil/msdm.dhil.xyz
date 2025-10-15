import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Users, Shield, Edit, Trash2, Plus } from "lucide-react";

const MemberManagement = () => {
    const structure = [
        { name: "Ahmad Rinaldi", role: "Ketua Panitia", level: "top" },
        { name: "Siti Aisyah", role: "Wakil Ketua", level: "top" },
        { name: "Budi Santoso", role: "Koordinator Logistik", level: "mid" },
        { name: "Dewi Lestari", role: "Koordinator Acara", level: "mid" },
        {
            name: "Rizky Pratama",
            role: "Koordinator Dokumentasi",
            level: "mid",
        },
        { name: "Maya Putri", role: "Anggota Logistik", level: "base" },
        { name: "Rudi Hermawan", role: "Anggota Keamanan", level: "base" },
        { name: "Tina Maharani", role: "Anggota Publikasi", level: "base" },
    ];

    const members = [
        {
            name: "Ahmad Rinaldi",
            division: "Kepanitiaan",
            role: "Ketua",
            status: "aktif",
        },
        {
            name: "Siti Aisyah",
            division: "Kepanitiaan",
            role: "Wakil Ketua",
            status: "aktif",
        },
        {
            name: "Budi Santoso",
            division: "Logistik",
            role: "Koordinator",
            status: "aktif",
        },
        {
            name: "Dewi Lestari",
            division: "Acara",
            role: "Koordinator",
            status: "aktif",
        },
        {
            name: "Rudi Hermawan",
            division: "Keamanan",
            role: "Anggota",
            status: "tidak aktif",
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "aktif":
                return "bg-green-100 text-green-700";
            default:
                return "bg-red-100 text-red-700";
        }
    };

    return (
        <div className="space-y-10">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                    Struktur & Manajemen Anggota
                </h1>
                <p className="text-muted-foreground">
                    Tampilan struktur organisasi panitia PKKMB dan pengelolaan
                    anggota secara terpusat.
                </p>
            </div>

            {/* Struktur Anggota */}
            <Card>
                <CardHeader>
                    <CardTitle>Struktur Organisasi</CardTitle>
                    <CardDescription>
                        Hierarki panitia PKKMB FISIPOL UNESA 2025
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center gap-8">
                        {/* Level Top */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {structure
                                .filter((s) => s.level === "top")
                                .map((person) => (
                                    <div
                                        key={person.name}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                            <Shield className="h-6 w-6 text-primary" />
                                        </div>
                                        <p className="mt-2 font-semibold">
                                            {person.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {person.role}
                                        </p>
                                    </div>
                                ))}
                        </div>

                        {/* Level Mid */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {structure
                                .filter((s) => s.level === "mid")
                                .map((person) => (
                                    <div
                                        key={person.name}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                                            <Users className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <p className="mt-2 font-medium">
                                            {person.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {person.role}
                                        </p>
                                    </div>
                                ))}
                        </div>

                        {/* Level Base */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {structure
                                .filter((s) => s.level === "base")
                                .map((person) => (
                                    <div
                                        key={person.name}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                                            <User className="h-5 w-5 text-gray-600" />
                                        </div>
                                        <p className="mt-2 text-sm font-medium">
                                            {person.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {person.role}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Manajemen Anggota */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Manajemen Anggota</CardTitle>
                            <CardDescription>
                                Daftar anggota beserta peran dan status aktif
                            </CardDescription>
                        </div>
                        <Button className="gap-2">
                            <Plus className="h-4 w-4" />
                            Tambah Anggota
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b text-left text-muted-foreground">
                                    <th className="py-2">Nama</th>
                                    <th className="py-2">Divisi</th>
                                    <th className="py-2">Peran</th>
                                    <th className="py-2">Status</th>
                                    <th className="py-2 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map((member, index) => (
                                    <tr
                                        key={index}
                                        className="border-b transition-colors last:border-0 hover:bg-muted/50"
                                    >
                                        <td className="py-3 font-medium">
                                            {member.name}
                                        </td>
                                        <td className="py-3">
                                            {member.division}
                                        </td>
                                        <td className="py-3">{member.role}</td>
                                        <td className="py-3">
                                            <Badge
                                                className={getStatusColor(
                                                    member.status,
                                                )}
                                            >
                                                {member.status}
                                            </Badge>
                                        </td>
                                        <td className="py-3 text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    size="icon"
                                                    variant="outline"
                                                >
                                                    <Edit className="h-4 w-4 text-blue-600" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="outline"
                                                >
                                                    <Trash2 className="h-4 w-4 text-red-600" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default MemberManagement;
