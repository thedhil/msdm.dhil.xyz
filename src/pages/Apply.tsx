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
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Recruitment Portal
        </h1>
        <p className="text-muted-foreground">
          Application forms for internal committee members and external
          professionals
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="internal" className="gap-2">
            <GraduationCap className="h-4 w-4" />
            Internal Recruitment
          </TabsTrigger>
          <TabsTrigger value="external" className="gap-2">
            <Building2 className="h-4 w-4" />
            External Professionals
          </TabsTrigger>
        </TabsList>

        {/* Internal Form */}
        <TabsContent value="internal" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-primary" />
                Apply for Committee Position
              </CardTitle>
              <CardDescription>
                Join the PKKMB organizing team for 2025
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input id="fullname" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nim">Student ID (NIM)</Label>
                  <Input id="nim" placeholder="Your student ID" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@unesa.ac.id"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Desired Position</Label>
                <Select>
                  <SelectTrigger id="position">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="logistics">
                      Logistics Coordinator
                    </SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="registration">
                      Registration Team
                    </SelectItem>
                    <SelectItem value="documentation">
                      Documentation Team
                    </SelectItem>
                    <SelectItem value="security">Security Team</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Relevant Experience</Label>
                <Textarea
                  id="experience"
                  placeholder="Describe your experience with event organization or relevant skills..."
                  rows={4}
                />
              </div>

              <Button className="w-full">Submit Application</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* External Form */}
        <TabsContent value="external" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Apply as External Professional
              </CardTitle>
              <CardDescription>
                Join as an experienced professional consultant
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ext-fullname">Full Name</Label>
                  <Input id="ext-fullname" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ext-id">Professional ID</Label>
                  <Input id="ext-id" placeholder="Your professional ID" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ext-email">Email Address</Label>
                <Input
                  id="ext-email"
                  type="email"
                  placeholder="your.email@company.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ext-position">Desired Position</Label>
                <Select>
                  <SelectTrigger id="ext-position">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coordinator">
                      Event Coordinator
                    </SelectItem>
                    <SelectItem value="media">Media Relations</SelectItem>
                    <SelectItem value="it">IT Infrastructure</SelectItem>
                    <SelectItem value="finance">Finance Specialist</SelectItem>
                    <SelectItem value="consultant">
                      Management Consultant
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ext-experience">Professional Experience</Label>
                <Textarea
                  id="ext-experience"
                  placeholder="Describe your professional experience and qualifications..."
                  rows={4}
                />
              </div>

              <Button className="w-full">Submit Application</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RecruitmentApply;
