"use client";

import { useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Users, Building2, Check, X, Loader2 } from "lucide-react";

export default function RecruitmentApproval() {
    const [activeTab, setActiveTab] = useState("internal");
    const [loading, setLoading] = useState<string | null>(null);
    const [filter, setFilter] = useState("all");

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
            position: "Kepala Dokumentasi",
            score: 88,
            status: "diterima",
            experience: "Fotografi & videografi",
        },
        {
            name: "Budi Santoso",
            position: "Dukungan Teknis",
            score: 85,
            status: "tinjauan",
            experience: "Infrastruktur TI",
        },
        {
            name: "Dewi Lestari",
            position: "Tim Registrasi",
            score: 79,
            status: "tinjauan",
            experience: "Pelayanan pelanggan",
        },
        {
            name: "Rudi Hermawan",
            position: "Tim Keamanan",
            score: 65,
            status: "menunggu",
            experience: "Relawan keamanan kampus",
        },
    ];

    const externalCandidates = [
        {
            name: "Ahmad Fauzi",
            position: "Koordinator Acara",
            score: 95,
            status: "diterima",
            experience: "3 tahun pengalaman profesional manajemen acara",
        },
        {
            name: "Maya Putri",
            position: "Hubungan Media",
            score: 91,
            status: "diterima",
            experience: "Spesialis PR di perusahaan swasta",
        },
        {
            name: "Rizky Pratama",
            position: "Infrastruktur TI",
            score: 88,
            status: "tinjauan",
            experience: "Administrator sistem",
        },
        {
            name: "Linda Sari",
            position: "Tim Keuangan",
            score: 83,
            status: "tinjauan",
            experience: "Profesional akuntansi",
        },
    ];

    const [internal, setInternal] = useState(internalCandidates);
    const [external, setExternal] = useState(externalCandidates);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "diterima":
                return "bg-green-100 text-green-700";
            case "tinjauan":
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

    const updateStatus = (
        listType: "internal" | "external",
        name: string,
        newStatus: string,
    ) => {
        setLoading(name);
        setTimeout(() => {
            if (listType === "internal") {
                setInternal((prev) =>
                    prev.map((c) =>
                        c.name === name ? { ...c, status: newStatus } : c,
                    ),
                );
            } else {
                setExternal((prev) =>
                    prev.map((c) =>
                        c.name === name ? { ...c, status: newStatus } : c,
                    ),
                );
            }
            setLoading(null);
        }, 500);
    };

    const renderCandidateList = (
        candidates: any[],
        listType: "internal" | "external",
    ) => {
        const filtered =
            filter === "all"
                ? candidates
                : candidates.filter((c) => c.status === filter);

        return (
            <div className="space-y-3">
                {filtered.map((candidate) => (
                    <div
                        key={candidate.name}
                        className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
                    >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            {/* Kiri: info kandidat */}
                            <div className="flex min-w-0 flex-1 items-start gap-4 sm:items-center">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                    {listType === "internal" ? (
                                        <Users className="h-5 w-5 text-primary" />
                                    ) : (
                                        <Building2 className="h-5 w-5 text-primary" />
                                    )}
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="break-words font-semibold text-foreground sm:truncate">
                                        {candidate.name}
                                    </p>
                                    <p className="break-words text-sm text-muted-foreground sm:truncate">
                                        {candidate.position}
                                    </p>
                                    <p className="mt-1 break-words text-xs text-muted-foreground">
                                        {candidate.experience}
                                    </p>
                                </div>
                            </div>

                            {/* Kanan: skor, status, dan tombol */}
                            <div className="flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap sm:justify-end sm:gap-4">
                                <div className="text-left sm:text-right">
                                    <p
                                        className={`text-xl font-bold sm:text-2xl ${getScoreColor(candidate.score)}`}
                                    >
                                        {candidate.score}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Skor
                                    </p>
                                </div>

                                <Badge
                                    className={`${getStatusColor(candidate.status)} text-xs sm:text-sm`}
                                >
                                    {candidate.status}
                                </Badge>

                                <div className="flex gap-1">
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        disabled={loading === candidate.name}
                                        onClick={() =>
                                            updateStatus(
                                                listType,
                                                candidate.name,
                                                "diterima",
                                            )
                                        }
                                        className="flex-shrink-0"
                                    >
                                        {loading === candidate.name ? (
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <Check className="h-4 w-4 text-green-600" />
                                        )}
                                    </Button>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        disabled={loading === candidate.name}
                                        onClick={() =>
                                            updateStatus(
                                                listType,
                                                candidate.name,
                                                "tinjauan",
                                            )
                                        }
                                        className="flex-shrink-0"
                                    >
                                        {loading === candidate.name ? (
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <Users className="h-4 w-4 text-blue-600" />
                                        )}
                                    </Button>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        disabled={loading === candidate.name}
                                        onClick={() =>
                                            updateStatus(
                                                listType,
                                                candidate.name,
                                                "menunggu",
                                            )
                                        }
                                        className="flex-shrink-0"
                                    >
                                        {loading === candidate.name ? (
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <X className="h-4 w-4 text-orange-600" />
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                    Tinjauan Rekrutmen
                </h1>
                <p className="text-muted-foreground">
                    Dasbor admin untuk persetujuan panitia internal dan
                    profesional eksternal
                </p>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Ringkasan Kandidat</CardTitle>
                        <Select value={filter} onValueChange={setFilter}>
                            <SelectTrigger className="w-[160px]">
                                <SelectValue placeholder="Filter status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Semua</SelectItem>
                                <SelectItem value="diterima">
                                    Diterima
                                </SelectItem>
                                <SelectItem value="tinjauan">
                                    Tinjauan
                                </SelectItem>
                                <SelectItem value="menunggu">
                                    Menunggu
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <CardDescription>
                        Beralih antara kandidat internal dan eksternal
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Tabs
                        value={activeTab}
                        onValueChange={setActiveTab}
                        className="w-full"
                    >
                        <TabsList className="grid w-full max-w-md grid-cols-2">
                            <TabsTrigger value="internal" className="gap-2">
                                <Users className="h-4 w-4" />
                                Internal
                            </TabsTrigger>
                            <TabsTrigger value="external" className="gap-2">
                                <Building2 className="h-4 w-4" />
                                Eksternal
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="internal" className="mt-6">
                            {renderCandidateList(internal, "internal")}
                        </TabsContent>

                        <TabsContent value="external" className="mt-6">
                            {renderCandidateList(external, "external")}
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}
