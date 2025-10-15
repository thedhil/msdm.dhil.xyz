import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload, Camera } from "lucide-react";
import { useState } from "react";

const Presence = () => {
    const [photo, setPhoto] = useState<File | null>(null);

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setPhoto(file);
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                    Presensi Kehadiran
                </h1>
                <p className="text-muted-foreground">
                    Silakan isi data berikut untuk mencatat kehadiran Anda dalam
                    kegiatan PKKMB FISIPOL UNESA 2025.
                </p>
            </div>

            <Card className="mx-auto max-w-xl">
                <CardHeader>
                    <CardTitle>Formulir Presensi</CardTitle>
                    <CardDescription>
                        Lengkapi data diri dan unggah foto untuk bukti
                        kehadiran.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input
                            id="name"
                            placeholder="Masukkan nama lengkap Anda"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="nim">Nomor Induk Mahasiswa (NIM)</Label>
                        <Input id="nim" placeholder="Masukkan NIM Anda" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="division">Divisi / Panitia</Label>
                        <Input
                            id="division"
                            placeholder="Contoh: Logistik, Acara, Dokumentasi..."
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="photo">Foto Kehadiran</Label>
                        <div className="flex flex-col items-center gap-3 sm:flex-row">
                            <Input
                                id="photo"
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoUpload}
                                className="hidden"
                            />
                            <Label
                                htmlFor="photo"
                                className="w-full cursor-pointer sm:w-auto"
                            >
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full gap-2 sm:w-auto"
                                >
                                    <Camera className="h-4 w-4" />
                                    {photo
                                        ? "Ganti Foto"
                                        : "Ambil / Unggah Foto"}
                                </Button>
                            </Label>
                            {photo && (
                                <p className="text-sm text-muted-foreground">
                                    {photo.name.length > 30
                                        ? photo.name.slice(0, 30) + "..."
                                        : photo.name}
                                </p>
                            )}
                        </div>
                    </div>

                    <Button className="mt-4 w-full">Kirim Presensi</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default Presence;
