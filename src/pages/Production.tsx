
import { AppShell } from "@/components/layout/AppShell";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Calendar, Video, Users, Clock, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const Production = () => {
  const upcomingShoots = [
    { id: "1", title: "Office Tour Video", date: "April 10, 2025", location: "HQ Building", crew: 4, status: "Confirmed" },
    { id: "2", title: "Product Demo", date: "April 15, 2025", location: "Studio A", crew: 3, status: "Planning" },
    { id: "3", title: "Customer Interview", date: "April 22, 2025", location: "Remote", crew: 2, status: "Confirmed" },
  ];

  const equipment = [
    { id: "1", name: "Sony A7III Camera", status: "Available", nextBooking: "Apr 12" },
    { id: "2", name: "DJI Ronin Gimbal", status: "In Use", nextAvailable: "Apr 8" },
    { id: "3", name: "Rode Wireless Mic", status: "Maintenance", nextAvailable: "Apr 15" },
    { id: "4", name: "Aputure 120D Light Kit", status: "Available", nextBooking: "Apr 20" },
  ];

  return (
    <AppShell>
      <div className="container py-8 animate-fade-in">
        <DashboardHeader 
          title="Production" 
          subtitle="Manage your production process"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Upcoming Shoots</h2>
                <Button variant="outline" className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Button>
              </div>
              
              <div className="space-y-4">
                {upcomingShoots.map((shoot) => (
                  <div key={shoot.id} className="border rounded-lg p-4 flex justify-between">
                    <div>
                      <h3 className="font-medium">{shoot.title}</h3>
                      <div className="mt-2 space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{shoot.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{shoot.crew} crew members</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        shoot.status === "Confirmed" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {shoot.status}
                      </span>
                      <div className="mt-4">
                        <Button size="sm">Details</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button>
                  <Video className="mr-2 h-4 w-4" />
                  Schedule New Shoot
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Equipment</h2>
              
              <div className="space-y-3">
                {equipment.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-3">
                    <div className="flex items-center">
                      <Camera className="h-5 w-5 text-gray-500 mr-3" />
                      <span>{item.name}</span>
                    </div>
                    <div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.status === "Available" 
                          ? "bg-green-100 text-green-800" 
                          : item.status === "In Use"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  Manage Equipment
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">Production Stats</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Projects in Production</span>
                    <span className="font-semibold">5</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Shoot Days This Month</span>
                    <span className="font-semibold">12</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Hours of Footage</span>
                    <span className="font-semibold">32.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default Production;
