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
import { Badge } from "@/components/ui/badge";
import {
    FileText,
    Upload,
    Search,
    Download,
    Eye,
    Calendar,
    User,
} from "lucide-react";

const Documents = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const documents = [
        {
            name: "Jadwal Utama PKKMB 2025",
            type: "Jadwal",
            uploadedBy: "Tim Koordinasi",
            date: "15 Des 2025",
            size: "2.4 MB",
            category: "planning",
        },
        {
            name: "Prosedur Operasional Standar (SOP)",
            type: "SOP",
            uploadedBy: "Tim Manajemen",
            date: "14 Des 2025",
            size: "1.8 MB",
            category: "policy",
        },
        {
            name: "Rencana Tanggap Darurat",
            type: "Darurat",
            uploadedBy: "Panitia Keamanan",
            date: "13 Des 2025",
            size: "3.2 MB",
            category: "emergency",
        },
        {
            name: "Panduan Denah dan Penyiapan Tempat",
            type: "Panduan",
            uploadedBy: "Tim Logistik",
            date: "12 Des 2025",
            size: "5.1 MB",
            category: "logistics",
        },
        {
            name: "Peran dan Tanggung Jawab Panitia",
            type: "Panduan",
            uploadedBy: "Tim SDM",
            date: "10 Des 2025",
            size: "1.2 MB",
            category: "hr",
        },
        {
            name: "Laporan Alokasi Anggaran",
            type: "Laporan",
            uploadedBy: "Tim Keuangan",
            date: "8 Des 2025",
            size: "892 KB",
            category: "finance",
        },
    ];

    const categories = [
        { name: "Perencanaan", count: 8, color: "bg-blue-100 text-blue-700" },
        { name: "Darurat", count: 3, color: "bg-red-100 text-red-700" },
        { name: "Logistik", count: 12, color: "bg-purple-100 text-purple-700" },
        { name: "SDM", count: 6, color: "bg-green-100 text-green-700" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                    Pusat Dokumen
                </h1>
                <p className="text-muted-foreground">
                    Penyimpanan terpusat berbasis cloud untuk seluruh dokumen
                    dan sumber daya PKKMB
                </p>
            </div>

            {/* Bagian Unggah */}
            <Card className="border-dashed">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Upload className="h-5 w-5 text-primary" />
                        Unggah Dokumen
                    </CardTitle>
                    <CardDescription>
                        Bagikan SOP, jadwal, rencana darurat, dan berkas penting
                        lainnya kepada tim Anda
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        <input
                            type="file"
                            id="dokumen"
                            className="hidden"
                            accept=".pdf,.doc,.docx,.xls,.xlsx"
                        />

                        <label
                            htmlFor="dokumen"
                            className="flex cursor-pointer flex-nowrap items-center gap-2 rounded-md bg-primary/90 px-3 py-1.5 text-white"
                        >
                            <Upload className="h-4 w-4" />
                            Pilih Berkas
                        </label>

                        <p className="text-sm text-muted-foreground">
                            Format yang didukung: PDF, DOC, DOCX, XLS, XLSX
                            (Maks 10MB)
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Kategori */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {categories.map((category) => (
                    <Card
                        key={category.name}
                        className="cursor-pointer transition-shadow hover:shadow-md"
                    >
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="mb-1 text-sm text-muted-foreground">
                                        Kategori
                                    </p>
                                    <p className="font-semibold text-foreground">
                                        {category.name}
                                    </p>
                                </div>
                                <Badge className={category.color}>
                                    {category.count}
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Pencarian dan Daftar Dokumen */}
            <Card>
                <CardHeader>
                    <CardTitle>Semua Dokumen</CardTitle>
                    <CardDescription>
                        Telusuri dan unduh berkas yang dibagikan
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                        <Input
                            placeholder="Cari dokumen..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>

                    {/* Daftar Dokumen */}
                    <div className="space-y-3">
                        {documents.map((doc, index) => (
                            <div
                                key={index}
                                className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
                            >
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    {/* Info Dokumen */}
                                    <div className="flex min-w-0 flex-1 items-start gap-4 sm:items-center">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <FileText className="h-5 w-5 text-primary" />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="break-words font-medium text-foreground sm:truncate">
                                                {doc.name}
                                            </p>

                                            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <User className="h-3 w-3" />
                                                    {doc.uploadedBy}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {doc.date}
                                                </span>
                                                <span>{doc.size}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Aksi Dokumen */}
                                    <div className="flex flex-wrap items-center justify-between gap-2 sm:flex-nowrap sm:justify-end sm:gap-3">
                                        <Badge
                                            variant="secondary"
                                            className="text-xs sm:text-sm"
                                        >
                                            {doc.type}
                                        </Badge>

                                        <div className="flex items-center gap-1">
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                className="flex-shrink-0"
                                            >
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                className="flex-shrink-0"
                                            >
                                                <Download className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Documents;
