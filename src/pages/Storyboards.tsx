
import { AppShell } from "@/components/layout/AppShell";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

const Storyboards = () => {
  return (
    <AppShell>
      <div className="container py-8 animate-fade-in">
        <DashboardHeader 
          title="Storyboards" 
          subtitle="Visualize your content with storyboards"
        />
        
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Your Storyboards</h2>
          <p className="text-gray-600">
            This is the storyboards page where you can create and manage visual representations 
            of your content. Plan your shots and sequences visually.
          </p>
        </div>
      </div>
    </AppShell>
  );
};

export default Storyboards;
