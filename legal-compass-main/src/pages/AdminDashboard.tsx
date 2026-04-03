import { Users, Shield, FileText, BarChart3, CheckCircle, XCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { label: "Total Users", value: "3,421", icon: Users },
  { label: "Total Advocates", value: "287", icon: Shield },
  { label: "Consultations", value: "1,892", icon: BarChart3 },
  { label: "Articles", value: "156", icon: FileText },
];

const pendingAdvocates = [
  { name: "Dr. Kavita Nair", spec: "Criminal Law", city: "Kolkata" },
  { name: "Adv. Fatima Khan", spec: "Family Law", city: "Lucknow" },
  { name: "Adv. Sneha Rao", spec: "Cyber Crime", city: "Hyderabad" },
];

const AdminDashboard = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1 py-8">
      <div className="container mx-auto px-4 max-w-6xl space-y-8">
        <h1 className="font-heading text-2xl font-bold">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-card rounded-xl border border-border p-5">
              <Icon className="w-5 h-5 text-accent mb-2" />
              <p className="text-2xl font-heading font-bold">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* Pending verifications */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="font-heading font-semibold mb-4">Pending Advocate Verifications</h2>
          <div className="space-y-3">
            {pendingAdvocates.map((a, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div>
                  <p className="font-medium text-sm">{a.name}</p>
                  <p className="text-xs text-muted-foreground">{a.spec} • {a.city}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm"><Eye className="w-4 h-4" /></Button>
                  <Button variant="teal" size="sm"><CheckCircle className="w-4 h-4" /> Approve</Button>
                  <Button variant="destructive" size="sm"><XCircle className="w-4 h-4" /></Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="font-heading font-semibold mb-4">User Management</h2>
            <p className="text-sm text-muted-foreground">Manage registered users and their accounts.</p>
            <Button variant="outline" size="sm" className="mt-3">View All Users</Button>
          </div>
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="font-heading font-semibold mb-4">Article Moderation</h2>
            <p className="text-sm text-muted-foreground">Review and moderate published articles.</p>
            <Button variant="outline" size="sm" className="mt-3">View Articles</Button>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default AdminDashboard;
