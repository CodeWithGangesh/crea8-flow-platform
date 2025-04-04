
import { AppShell } from "@/components/layout/AppShell";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { FileText, Edit, Copy, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Scripts = () => {
  const scriptList = [
    { id: "1", title: "Product Launch Video", status: "Draft", lastEdited: "2 days ago", words: 1250 },
    { id: "2", title: "Customer Testimonial", status: "Completed", lastEdited: "1 week ago", words: 850 },
    { id: "3", title: "Tutorial Series: Episode 1", status: "In Review", lastEdited: "3 days ago", words: 1600 },
    { id: "4", title: "Brand Story", status: "Draft", lastEdited: "Just now", words: 920 },
  ];

  return (
    <AppShell>
      <div className="container py-8 animate-fade-in">
        <DashboardHeader 
          title="Scripts" 
          subtitle="Manage and create your content scripts"
        />
        
        <div className="flex justify-between mb-6">
          <div className="w-64">
            <input 
              type="text" 
              placeholder="Search scripts..." 
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <Button className="bg-crea8-blue hover:bg-blue-700">
            <FileText className="mr-2 h-4 w-4" />
            New Script
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Edited</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Word Count</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {scriptList.map((script) => (
                <tr key={script.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{script.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      script.status === "Completed" 
                        ? "bg-green-100 text-green-800" 
                        : script.status === "In Review" 
                          ? "bg-yellow-100 text-yellow-800" 
                          : "bg-gray-100 text-gray-800"
                    }`}>
                      {script.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{script.lastEdited}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{script.words}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm"><Copy className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
};

export default Scripts;
