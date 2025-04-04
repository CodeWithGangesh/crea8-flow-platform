
import { AppShell } from "@/components/layout/AppShell";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { User, Bell, Shield, CreditCard, HelpCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "integrations", label: "Integrations", icon: Globe },
    { id: "help", label: "Help", icon: HelpCircle },
  ];

  return (
    <AppShell>
      <div className="container py-8 animate-fade-in">
        <DashboardHeader 
          title="Settings" 
          subtitle="Configure your account and preferences"
        />
        
        <div className="bg-white rounded-lg shadow mt-8">
          <div className="md:flex">
            <div className="md:w-64 p-6 border-r">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center px-3 py-2 w-full text-left rounded-md ${
                      activeTab === tab.id 
                        ? "bg-crea8-blue text-white" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <tab.icon className="h-5 w-5 mr-3" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="flex-1 p-6">
              {activeTab === "profile" && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
                  
                  <div className="flex items-center mb-8">
                    <div className="h-20 w-20 rounded-full bg-crea8-blue flex items-center justify-center text-white text-2xl font-bold">
                      U
                    </div>
                    <div className="ml-6">
                      <Button variant="outline">Change Photo</Button>
                      <p className="mt-2 text-sm text-gray-500">PNG, JPG or GIF. Max 2MB.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                          placeholder="Enter your first name"
                          value="Jane"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                          placeholder="Enter your last name"
                          value="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                        placeholder="Enter your email"
                        value="jane.doe@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                        placeholder="Enter your company name"
                        value="Acme Inc."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      <textarea 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                        placeholder="Write a short bio"
                        rows={4}
                        value="Content creator and marketing professional with 5+ years of experience in video production and digital storytelling."
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button className="bg-crea8-blue hover:bg-blue-700">Save Changes</Button>
                      <Button variant="outline" className="ml-4">Cancel</Button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "notifications" && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3">Email Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Project Updates</p>
                            <p className="text-sm text-gray-500">Receive updates about your projects</p>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle">
                            <input 
                              type="checkbox" 
                              id="notification-1" 
                              className="peer sr-only" 
                              defaultChecked 
                            />
                            <label 
                              htmlFor="notification-1" 
                              className="block h-6 w-11 cursor-pointer rounded-full bg-gray-300 peer-checked:bg-crea8-blue after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-5"
                            ></label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Comments</p>
                            <p className="text-sm text-gray-500">Receive notifications when someone comments</p>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle">
                            <input 
                              type="checkbox" 
                              id="notification-2" 
                              className="peer sr-only" 
                              defaultChecked 
                            />
                            <label 
                              htmlFor="notification-2" 
                              className="block h-6 w-11 cursor-pointer rounded-full bg-gray-300 peer-checked:bg-crea8-blue after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-5"
                            ></label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Reminders</p>
                            <p className="text-sm text-gray-500">Receive reminders about deadlines</p>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle">
                            <input 
                              type="checkbox" 
                              id="notification-3" 
                              className="peer sr-only" 
                            />
                            <label 
                              htmlFor="notification-3" 
                              className="block h-6 w-11 cursor-pointer rounded-full bg-gray-300 peer-checked:bg-crea8-blue after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-5"
                            ></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Marketing Preferences</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Product Updates</p>
                            <p className="text-sm text-gray-500">Receive product updates and announcements</p>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle">
                            <input 
                              type="checkbox" 
                              id="marketing-1" 
                              className="peer sr-only" 
                              defaultChecked 
                            />
                            <label 
                              htmlFor="marketing-1" 
                              className="block h-6 w-11 cursor-pointer rounded-full bg-gray-300 peer-checked:bg-crea8-blue after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-5"
                            ></label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Educational Content</p>
                            <p className="text-sm text-gray-500">Receive tutorials and best practices</p>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle">
                            <input 
                              type="checkbox" 
                              id="marketing-2" 
                              className="peer sr-only" 
                            />
                            <label 
                              htmlFor="marketing-2" 
                              className="block h-6 w-11 cursor-pointer rounded-full bg-gray-300 peer-checked:bg-crea8-blue after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-5"
                            ></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="bg-crea8-blue hover:bg-blue-700">Save Preferences</Button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab !== "profile" && activeTab !== "notifications" && (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center p-4 bg-gray-100 rounded-full mb-4">
                    {tabs.find(tab => tab.id === activeTab)?.icon && (
                      <tabs.find(tab => tab.id === activeTab)!.icon className="h-8 w-8 text-gray-600" />
                    )}
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{tabs.find(tab => tab.id === activeTab)?.label} Settings</h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    This section is under development. Check back soon for {tabs.find(tab => tab.id === activeTab)?.label.toLowerCase()} settings and options.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default Settings;
