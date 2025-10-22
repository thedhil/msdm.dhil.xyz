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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, GraduationCap, UserPlus } from "lucide-react";

const RecruitmentApply = () => {
    const [activeTab, setActiveTab] = useState("internal");

    return (
        <div className="space-y-8">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                    Portal Rekrutmen
                </h1>
                <p className="text-muted-foreground">
                    Formulir pendaftaran untuk anggota panitia internal dan
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

                {/* Formulir Internal */}
                <TabsContent value="internal" className="mt-6">
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
                                    <Label htmlFor="nim">
                                        NIM (Nomor Induk Mahasiswa)
                                    </Label>
                                    <Input
                                        id="nim"
                                        placeholder="Masukkan NIM Anda"
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
                                    placeholder="Ceritakan pengalaman Anda dalam organisasi acara atau keterampilan yang relevan..."
                                    rows={4}
                                />
                            </div>

                            <Button className="w-full">Kirim Lamaran</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Formulir Eksternal */}
                <TabsContent value="external" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Building2 className="h-5 w-5 text-primary" />
                                Daftar Sebagai Profesional Eksternal
                            </CardTitle>
                            <CardDescription>
                                Bergabung sebagai konsultan profesional
                                berpengalaman
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="ext-fullname">
                                        Nama Lengkap
                                    </Label>
                                    <Input
                                        id="ext-fullname"
                                        placeholder="Masukkan nama lengkap Anda"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="ext-id">
                                        ID Profesional
                                    </Label>
                                    <Input
                                        id="ext-id"
                                        placeholder="Masukkan ID profesional Anda"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="ext-email">Alamat Email</Label>
                                <Input
                                    id="ext-email"
                                    type="email"
                                    placeholder="email@perusahaan.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="ext-position">
                                    Posisi yang Diinginkan
                                </Label>
                                <Select>
                                    <SelectTrigger id="ext-position">
                                        <SelectValue placeholder="Pilih posisi" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="coordinator">
                                            Koordinator Acara
                                        </SelectItem>
                                        <SelectItem value="media">
                                            Hubungan Media
                                        </SelectItem>
                                        <SelectItem value="it">
                                            Infrastruktur TI
                                        </SelectItem>
                                        <SelectItem value="finance">
                                            Spesialis Keuangan
                                        </SelectItem>
                                        <SelectItem value="consultant">
                                            Konsultan Manajemen
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="ext-experience">
                                    Pengalaman Profesional
                                </Label>
                                <Textarea
                                    id="ext-experience"
                                    placeholder="Jelaskan pengalaman dan kualifikasi profesional Anda..."
                                    rows={4}
                                />
                            </div>

                            <Button className="w-full">Kirim Lamaran</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default RecruitmentApply;
