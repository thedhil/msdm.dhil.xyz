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
            name: "PKKMB Master Schedule 2025",
            type: "Schedule",
            uploadedBy: "Coordination Team",
            date: "Dec 15, 2025",
            size: "2.4 MB",
            category: "planning",
        },
        {
            name: "Standard Operating Procedures",
            type: "SOP",
            uploadedBy: "Management Team",
            date: "Dec 14, 2025",
            size: "1.8 MB",
            category: "policy",
        },
        {
            name: "Emergency Response Plan",
            type: "Emergency",
            uploadedBy: "Safety Committee",
            date: "Dec 13, 2025",
            size: "3.2 MB",
            category: "emergency",
        },
        {
            name: "Venue Layout and Setup Guide",
            type: "Guide",
            uploadedBy: "Logistics Team",
            date: "Dec 12, 2025",
            size: "5.1 MB",
            category: "logistics",
        },
        {
            name: "Committee Roles and Responsibilities",
            type: "Guide",
            uploadedBy: "HR Team",
            date: "Dec 10, 2025",
            size: "1.2 MB",
            category: "hr",
        },
        {
            name: "Budget Allocation Report",
            type: "Report",
            uploadedBy: "Finance Team",
            date: "Dec 8, 2025",
            size: "892 KB",
            category: "finance",
        },
    ];

    const categories = [
        { name: "Planning", count: 8, color: "bg-blue-100 text-blue-700" },
        { name: "Emergency", count: 3, color: "bg-red-100 text-red-700" },
        {
            name: "Logistics",
            count: 12,
            color: "bg-purple-100 text-purple-700",
        },
        { name: "HR", count: 6, color: "bg-green-100 text-green-700" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                    Document Center
                </h1>
                <p className="text-muted-foreground">
                    Centralized cloud storage for all PKKMB documentation and
                    resources
                </p>
            </div>

            {/* Upload Section */}
            <Card className="border-dashed">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Upload className="h-5 w-5 text-primary" />
                        Upload Documents
                    </CardTitle>
                    <CardDescription>
                        Share SOPs, schedules, emergency plans, and other
                        important files with your team
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        {/* Hidden real input */}
                        <input
                            type="file"
                            id="dokumentes"
                            className="hidden"
                            accept=".pdf,.doc,.docx,.xls,.xlsx"
                        />

                        {/* Label triggers the hidden input */}
                        <label
                            htmlFor="dokumentes"
                            className="flex cursor-pointer flex-nowrap items-center gap-2 rounded-md bg-primary/90 px-3 py-1.5 text-white"
                        >
                            {/* <Button type="button" className="gap-2"> */}
                            <Upload className="h-4 w-4" />
                            Choose File
                            {/* </Button> */}
                        </label>

                        <p className="text-sm text-muted-foreground">
                            Supported formats: PDF, DOC, DOCX, XLS, XLSX (Max
                            10MB)
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Categories */}
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
                                        Category
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

            {/* Search and Filter */}
            <Card>
                <CardHeader>
                    <CardTitle>All Documents</CardTitle>
                    <CardDescription>
                        Browse and download shared files
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                        <Input
                            placeholder="Search documents..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>

                    {/* Document List */}
                    <div className="space-y-3">
                        {documents.map((doc, index) => (
                            <div
                                key={index}
                                className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
                            >
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    {/* Left section: file info */}
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

                                    {/* Right section: badge + buttons */}
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
