import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Documents from "./pages/Documents";
import Incidents from "./pages/Incidents";
import Tasks from "./pages/Tasks";
import Recruitment from "./pages/Recruitment";
import Evaluation from "./pages/Evaluation";
import NotFound from "./pages/NotFound";
import RecruitmentApproval from "./pages/RecruitmentApproval";
import RecruitmentApply from "./pages/Apply";
import PublicIncidentReport from "./pages/PublicReport";
import IncidentManagement from "./pages/ManageInsiden";

const App = () => {
    // Create QueryClient instance inside component to ensure proper React initialization
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                    },
                },
            }),
    );

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <TooltipProvider>
                    <Toaster />
                    <Sonner />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/"
                                element={
                                    <Layout>
                                        <Index />
                                    </Layout>
                                }
                            />
                            <Route
                                path="/dashboard"
                                element={
                                    <ProtectedRoute>
                                        <Layout>
                                            <Dashboard />
                                        </Layout>
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/documents"
                                element={
                                    <ProtectedRoute>
                                        <Layout>
                                            <Documents />
                                        </Layout>
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/incidents"
                                element={
                                    <ProtectedRoute>
                                        <Layout>
                                            <Incidents />
                                        </Layout>
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/tasks"
                                element={
                                    <ProtectedRoute>
                                        <Layout>
                                            <Tasks />
                                        </Layout>
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/recruitment"
                                element={
                                    //   <ProtectedRoute>
                                    <Layout>
                                        <Recruitment />
                                    </Layout>
                                    //   </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/apply"
                                element={
                                    //   <ProtectedRoute>
                                    <Layout>
                                        <RecruitmentApply />
                                    </Layout>
                                    //   </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/lapor"
                                element={
                                    //   <ProtectedRoute>
                                    <Layout>
                                        <PublicIncidentReport />
                                    </Layout>
                                    //   </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/managelapor"
                                element={
                                    <ProtectedRoute>
                                        <Layout>
                                            <IncidentManagement />
                                        </Layout>
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/approval"
                                element={
                                    <ProtectedRoute>
                                        <Layout>
                                            <RecruitmentApproval />
                                        </Layout>
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/evaluation"
                                element={
                                    <ProtectedRoute>
                                        <Layout>
                                            <Evaluation />
                                        </Layout>
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="*"
                                element={
                                    <Layout>
                                        <NotFound />
                                    </Layout>
                                }
                            />
                        </Routes>
                    </BrowserRouter>
                </TooltipProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
};

export default App;
