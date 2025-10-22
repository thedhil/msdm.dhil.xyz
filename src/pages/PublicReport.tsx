import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { AlertTriangle, Upload } from "lucide-react";
import { useState } from "react";

const PublicIncidentReport = () => {
    const [fileName, setFileName] = useState<string>("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFileName(file ? file.name : "");
    };

    return (
        <div className="space-y-8">
            <div className="space-y-2 text-center">
                <h1 className="flex items-center justify-center gap-2 text-3xl font-bold text-foreground">
                    <AlertTriangle className="h-7 w-7 text-orange-600" />
                    Laporan Insiden Publik
                </h1>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                    Gunakan formulir ini untuk melaporkan masalah, kekhawatiran
                    keamanan, atau kendala logistik selama acara. Masukan Anda
                    membantu panitia merespons lebih cepat dan memastikan acara
                    berjalan dengan lancar.
                </p>
            </div>

            <Card className="mx-auto max-w-2xl">
                <CardHeader>
                    <CardTitle>Kirim Laporan Insiden</CardTitle>
                    <CardDescription>
                        Harap isi semua kolom yang relevan
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="reporter">Nama Anda (opsional)</Label>
                        <Input id="reporter" placeholder="Masukkan nama Anda" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="contact">
                            Kontak (Email atau Nomor HP)
                        </Label>
                        <Input
                            id="contact"
                            placeholder="Kami akan menghubungi jika diperlukan klarifikasi"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="title">Judul Insiden</Label>
                        <Input
                            id="title"
                            placeholder="Ringkasan singkat dari masalah"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Deskripsi Lengkap</Label>
                        <Textarea
                            id="description"
                            placeholder="Jelaskan apa yang terjadi, di mana, dan kapan..."
                            rows={4}
                        />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="priority">Tingkat Keparahan</Label>
                            <Select>
                                <SelectTrigger id="priority">
                                    <SelectValue placeholder="Pilih tingkat keparahan" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="high">
                                        Tinggi - Mendesak
                                    </SelectItem>
                                    <SelectItem value="medium">
                                        Sedang - Penting
                                    </SelectItem>
                                    <SelectItem value="low">
                                        Rendah - Minor
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="location">Lokasi Kejadian</Label>
                            <Input
                                id="location"
                                placeholder="Di mana insiden terjadi?"
                            />
                        </div>
                    </div>

                    {/* Unggah File */}
                    {/* <div className="space-y-2">
                        <Label htmlFor="attachment">
                            Lampirkan Foto atau Dokumen (opsional)
                        </Label>
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <input
                                type="file"
                                id="attachment"
                                className="hidden"
                                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="attachment" className="cursor-pointer">
                                <Button type="button" className="gap-2">
                                    <Upload className="h-4 w-4" />
                                    {fileName ? "Ganti File" : "Pilih File"}
                                </Button>
                            </label>
                            <p className="text-sm text-muted-foreground truncate max-w-[180px]">
                                {fileName || "Belum ada file yang dipilih"}
                            </p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Format yang didukung: JPG, PNG, PDF, DOC, DOCX (Maks 10MB)
                        </p>
                    </div> */}

                    <div className="flex justify-end gap-4">
                        <Button>Kirim Laporan</Button>
                        <Button variant="outline" type="reset">
                            Hapus Formulir
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PublicIncidentReport;
