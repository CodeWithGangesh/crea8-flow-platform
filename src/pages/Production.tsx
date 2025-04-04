
import { AppShell } from "@/components/layout/AppShell";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

const Production = () => {
  return (
    <AppShell>
      <div className="container py-8 animate-fade-in">
        <DashboardHeader 
          title="Production" 
          subtitle="Manage your production process"
        />
        
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Production Management</h2>
          <p className="text-gray-600">
            This is the production page where you can manage filming schedules, 
            equipment, and crew details for your content production.
          </p>
        </div>
      </div>
    </AppShell>
  );
};

export default Production;
