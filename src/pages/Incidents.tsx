import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  AlertTriangle, 
  Plus,
  CheckCircle2,
  Clock,
  XCircle
} from "lucide-react";

const Incidents = () => {
  const [showForm, setShowForm] = useState(false);

  const incidents = [
    {
      id: "INC-001",
      title: "Microphone malfunction in Hall A",
      description: "Main microphone not working during opening speech rehearsal",
      reportedBy: "Audio Team",
      priority: "high",
      status: "in-progress",
      time: "12 minutes ago"
    },
    {
      id: "INC-002",
      title: "Registration desk computer issue",
      description: "One registration computer won't connect to database",
      reportedBy: "Registration Team",
      priority: "medium",
      status: "open",
      time: "1 hour ago"
    },
    {
      id: "INC-003",
      title: "Missing banners at entrance",
      description: "Welcome banners not yet installed at main entrance",
      reportedBy: "Decoration Team",
      priority: "medium",
      status: "resolved",
      time: "3 hours ago"
    },
    {
      id: "INC-004",
      title: "Insufficient parking space signage",
      description: "Need additional directional signs for parking area",
      reportedBy: "Logistics Team",
      priority: "low",
      status: "open",
      time: "5 hours ago"
    },
    {
      id: "INC-005",
      title: "Air conditioning not working in Room B",
      description: "Temperature control issue in breakout room",
      reportedBy: "Facilities Team",
      priority: "high",
      status: "resolved",
      time: "1 day ago"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "resolved":
        return <CheckCircle2 className="h-4 w-4" />;
      case "in-progress":
        return <Clock className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved":
        return "bg-green-100 text-green-700";
      case "in-progress":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-orange-100 text-orange-700";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Incident Reporting</h1>
          <p className="text-muted-foreground">
            Quick issue submission and real-time tracking dashboard
          </p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="h-4 w-4" />
          Report Incident
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid sm:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-sm text-muted-foreground">Open Issues</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Resolved</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Report New Incident</CardTitle>
            <CardDescription>
              Provide details about the issue for immediate response
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Incident Title</Label>
              <Input id="title" placeholder="Brief description of the issue" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Detailed Description</Label>
              <Textarea 
                id="description" 
                placeholder="Provide as much detail as possible..."
                rows={4}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="priority">Priority Level</Label>
                <Select>
                  <SelectTrigger id="priority">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High - Urgent</SelectItem>
                    <SelectItem value="medium">Medium - Important</SelectItem>
                    <SelectItem value="low">Low - Can Wait</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Where is the issue?" />
              </div>
            </div>
            <div className="flex gap-4">
              <Button>Submit Report</Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Incident List */}
      <Card>
        <CardHeader>
          <CardTitle>All Incidents</CardTitle>
          <CardDescription>Live tracking of reported issues</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div
                key={incident.id}
                className="p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="font-mono">
                      {incident.id}
                    </Badge>
                    <h3 className="font-semibold text-foreground">{incident.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={getPriorityColor(incident.priority) as any}>
                      {incident.priority}
                    </Badge>
                    <Badge className={getStatusColor(incident.status)}>
                      <span className="flex items-center gap-1">
                        {getStatusIcon(incident.status)}
                        {incident.status}
                      </span>
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{incident.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Reported by {incident.reportedBy}</span>
                  <span>{incident.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Incidents;
