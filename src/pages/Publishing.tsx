
import { AppShell } from "@/components/layout/AppShell";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

const Publishing = () => {
  return (
    <AppShell>
      <div className="container py-8 animate-fade-in">
        <DashboardHeader 
          title="Publishing" 
          subtitle="Distribute your content across platforms"
        />
        
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Publishing Tools</h2>
          <p className="text-gray-600">
            This is the publishing page where you can manage distribution of your content
            across different platforms, schedule publishing, and track performance.
          </p>
        </div>
      </div>
    </AppShell>
  );
};

export default Publishing;
