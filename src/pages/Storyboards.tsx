
import { AppShell } from "@/components/layout/AppShell";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Layout, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Storyboards = () => {
  const storyboards = [
    { id: "1", title: "Product Launch Video", shots: 12, lastEdited: "Yesterday", thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=350&fit=crop" },
    { id: "2", title: "Customer Testimonial", shots: 8, lastEdited: "3 days ago", thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=350&fit=crop" },
    { id: "3", title: "Tutorial Walkthrough", shots: 15, lastEdited: "Last week", thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=350&fit=crop" },
  ];

  return (
    <AppShell>
      <div className="container py-8 animate-fade-in">
        <DashboardHeader 
          title="Storyboards" 
          subtitle="Visualize your content with storyboards"
        />
        
        <div className="flex justify-between mb-6">
          <div className="w-64">
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
              <option value="">All Projects</option>
              <option value="recent">Recent Only</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <Button className="bg-crea8-blue hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            New Storyboard
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {storyboards.map((storyboard) => (
            <div key={storyboard.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={storyboard.thumbnail} 
                  alt={storyboard.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                  <Layout className="h-5 w-5 text-crea8-blue" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{storyboard.title}</h3>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>{storyboard.shots} shots</span>
                  <span>Edited {storyboard.lastEdited}</span>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Button className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200">View</Button>
                  <Button className="w-full bg-crea8-blue text-white hover:bg-blue-700">Edit</Button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center h-80">
            <div className="text-center p-6">
              <div className="mx-auto h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Plus className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">Create new storyboard</h3>
              <p className="mt-2 text-sm text-gray-500">Start visualizing your content.</p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default Storyboards;
