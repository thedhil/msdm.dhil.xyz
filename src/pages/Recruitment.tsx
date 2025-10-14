import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  UserPlus,
  TrendingUp,
  Award,
  Target
} from "lucide-react";

const Recruitment = () => {
  const candidates = [
    {
      name: "Andi Pratama",
      position: "Logistics Coordinator",
      score: 92,
      status: "accepted",
      experience: "2 years event management"
    },
    {
      name: "Siti Nurhaliza",
      position: "Documentation Lead",
      score: 88,
      status: "accepted",
      experience: "Photography & videography"
    },
    {
      name: "Budi Santoso",
      position: "Technical Support",
      score: 85,
      status: "review",
      experience: "IT infrastructure"
    },
    {
      name: "Dewi Lestari",
      position: "Registration Team",
      score: 79,
      status: "review",
      experience: "Customer service"
    },
    {
      name: "Rudi Hermawan",
      position: "Security Team",
      score: 65,
      status: "pending",
      experience: "Campus security volunteer"
    }
  ];

  const positions = [
    { role: "Logistics Coordinator", slots: 3, filled: 2 },
    { role: "Technical Support", slots: 4, filled: 3 },
    { role: "Registration Team", slots: 6, filled: 5 },
    { role: "Documentation Team", slots: 3, filled: 2 },
    { role: "Security Team", slots: 5, filled: 3 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-700";
      case "review":
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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Recruitment Portal</h1>
        <p className="text-muted-foreground">
          Data-driven system for committee member selection and performance tracking
        </p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">45</p>
                <p className="text-sm text-muted-foreground">Applications</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">24</p>
                <p className="text-sm text-muted-foreground">Accepted</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">In Review</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">82</p>
                <p className="text-sm text-muted-foreground">Avg. Score</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Application Form */}
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
              <Input id="email" type="email" placeholder="your.email@unesa.ac.id" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Desired Position</Label>
              <Select>
                <SelectTrigger id="position">
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="logistics">Logistics Coordinator</SelectItem>
                  <SelectItem value="technical">Technical Support</SelectItem>
                  <SelectItem value="registration">Registration Team</SelectItem>
                  <SelectItem value="documentation">Documentation Team</SelectItem>
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

        {/* Available Positions */}
        <Card>
          <CardHeader>
            <CardTitle>Available Positions</CardTitle>
            <CardDescription>Current openings and filled slots</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {positions.map((position) => (
              <div key={position.role} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{position.role}</span>
                  <span className="text-sm text-muted-foreground">
                    {position.filled}/{position.slots} filled
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${(position.filled / position.slots) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Candidate List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
          <CardDescription>Candidates with performance scores and evaluation status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {candidates.map((candidate, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground">{candidate.name}</p>
                    <p className="text-sm text-muted-foreground">{candidate.position}</p>
                    <p className="text-xs text-muted-foreground mt-1">{candidate.experience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${getScoreColor(candidate.score)}`}>
                      {candidate.score}
                    </p>
                    <p className="text-xs text-muted-foreground">Score</p>
                  </div>
                  <Badge className={getStatusColor(candidate.status)}>
                    {candidate.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recruitment;
