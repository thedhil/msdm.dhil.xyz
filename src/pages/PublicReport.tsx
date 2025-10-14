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
                    Public Incident Report
                </h1>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                    Use this form to report issues, safety concerns, or
                    logistical problems during the event. Your feedback helps
                    the committee respond faster and ensure everything runs
                    smoothly.
                </p>
            </div>

            <Card className="mx-auto max-w-2xl">
                <CardHeader>
                    <CardTitle>Submit an Incident</CardTitle>
                    <CardDescription>
                        Please fill out all relevant fields
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="reporter">Your Name (optional)</Label>
                        <Input id="reporter" placeholder="Enter your name" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="contact">Contact Email or Phone</Label>
                        <Input
                            id="contact"
                            placeholder="We’ll reach you if we need clarification"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="title">Incident Title</Label>
                        <Input
                            id="title"
                            placeholder="Brief summary of the issue"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">
                            Detailed Description
                        </Label>
                        <Textarea
                            id="description"
                            placeholder="Describe what happened, where, and when..."
                            rows={4}
                        />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="priority">Severity Level</Label>
                            <Select>
                                <SelectTrigger id="priority">
                                    <SelectValue placeholder="Select severity" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="high">
                                        High - Urgent
                                    </SelectItem>
                                    <SelectItem value="medium">
                                        Medium - Important
                                    </SelectItem>
                                    <SelectItem value="low">
                                        Low - Minor
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input
                                id="location"
                                placeholder="Where did it happen?"
                            />
                        </div>
                    </div>

                    {/* File upload */}
                    {/* <div className="space-y-2">
            <Label htmlFor="attachment">
              Attach Photo or Document (optional)
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
                  {fileName ? "Change File" : "Choose File"}
                </Button>
              </label>
              <p className="text-sm text-muted-foreground truncate max-w-[180px]">
                {fileName || "No file selected"}
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Supported formats: JPG, PNG, PDF, DOC, DOCX (Max 10MB)
            </p>
          </div> */}

                    <div className="flex justify-end gap-4">
                        <Button>Submit Report</Button>
                        <Button variant="outline" type="reset">
                            Clear Form
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PublicIncidentReport;
