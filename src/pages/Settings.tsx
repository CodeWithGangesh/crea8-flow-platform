
import { AppShell } from "@/components/layout/AppShell";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

const Settings = () => {
  return (
    <AppShell>
      <div className="container py-8 animate-fade-in">
        <DashboardHeader 
          title="Settings" 
          subtitle="Configure your account and preferences"
        />
        
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <p className="text-gray-600">
            This is the settings page where you can manage your account details, 
            preferences, and application settings.
          </p>
        </div>
      </div>
    </AppShell>
  );
};

export default Settings;
