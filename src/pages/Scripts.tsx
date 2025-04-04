
import { AppShell } from "@/components/layout/AppShell";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

const Scripts = () => {
  return (
    <AppShell>
      <div className="container py-8 animate-fade-in">
        <DashboardHeader 
          title="Scripts" 
          subtitle="Manage and create your content scripts"
        />
        
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Your Scripts</h2>
          <p className="text-gray-600">
            This is the scripts page where you can manage all your content scripts.
            Start creating or browse your existing scripts.
          </p>
        </div>
      </div>
    </AppShell>
  );
};

export default Scripts;
