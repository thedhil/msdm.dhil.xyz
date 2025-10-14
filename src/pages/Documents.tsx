import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  User
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
      category: "planning"
    },
    {
      name: "Standard Operating Procedures",
      type: "SOP",
      uploadedBy: "Management Team",
      date: "Dec 14, 2025",
      size: "1.8 MB",
      category: "policy"
    },
    {
      name: "Emergency Response Plan",
      type: "Emergency",
      uploadedBy: "Safety Committee",
      date: "Dec 13, 2025",
      size: "3.2 MB",
      category: "emergency"
    },
    {
      name: "Venue Layout and Setup Guide",
      type: "Guide",
      uploadedBy: "Logistics Team",
      date: "Dec 12, 2025",
      size: "5.1 MB",
      category: "logistics"
    },
    {
      name: "Committee Roles and Responsibilities",
      type: "Guide",
      uploadedBy: "HR Team",
      date: "Dec 10, 2025",
      size: "1.2 MB",
      category: "hr"
    },
    {
      name: "Budget Allocation Report",
      type: "Report",
      uploadedBy: "Finance Team",
      date: "Dec 8, 2025",
      size: "892 KB",
      category: "finance"
    }
  ];

  const categories = [
    { name: "Planning", count: 8, color: "bg-blue-100 text-blue-700" },
    { name: "Emergency", count: 3, color: "bg-red-100 text-red-700" },
    { name: "Logistics", count: 12, color: "bg-purple-100 text-purple-700" },
    { name: "HR", count: 6, color: "bg-green-100 text-green-700" }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Document Center</h1>
        <p className="text-muted-foreground">
          Centralized cloud storage for all PKKMB documentation and resources
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
            Share SOPs, schedules, emergency plans, and other important files with your team
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="gap-2">
              <Upload className="h-4 w-4" />
              Choose File
            </Button>
            <p className="text-sm text-muted-foreground self-center">
              Supported formats: PDF, DOC, DOCX, XLS, XLSX (Max 10MB)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Category</p>
                  <p className="font-semibold text-foreground">{category.name}</p>
                </div>
                <Badge className={category.color}>{category.count}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>All Documents</CardTitle>
          <CardDescription>Browse and download shared files</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{doc.name}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
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
                  <Badge variant="secondary">{doc.type}</Badge>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Button size="sm" variant="ghost">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Download className="h-4 w-4" />
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

export default Documents;
