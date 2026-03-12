import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Emergency from "./pages/Emergency";
import AdvocateProfile from "./pages/AdvocateProfile";
import AdvocateAuth from "./pages/AdvocateAuth";
import AdvocateDashboard from "./pages/AdvocateDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import AdvocateSearch from "./pages/AdvocateSearch";
import Articles from "./pages/Articles";
import UserProfile from "./pages/UserProfile";
import SavedAdvocates from "./pages/SavedAdvocates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/advocate/:id" element={<AdvocateProfile />} />
          <Route path="/advocate-login" element={<AdvocateAuth />} />
          <Route path="/advocate-dashboard" element={<AdvocateDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* User dashboard with sidebar layout */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<AdvocateSearch />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/saved" element={<SavedAdvocates />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
