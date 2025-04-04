
import { AppShell } from "@/components/layout/AppShell";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Youtube, Instagram, Linkedin, Twitter, Calendar, Eye, ThumbsUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Publishing = () => {
  const scheduledPosts = [
    { id: "1", title: "Product Launch Teaser", platform: "Instagram", date: "Apr 12, 2025", time: "9:30 AM", status: "Scheduled" },
    { id: "2", title: "Customer Success Story", platform: "LinkedIn", date: "Apr 15, 2025", time: "11:00 AM", status: "Draft" },
    { id: "3", title: "How-To Tutorial", platform: "YouTube", date: "Apr 18, 2025", time: "2:00 PM", status: "Scheduled" },
    { id: "4", title: "Industry News Commentary", platform: "Twitter", date: "Apr 20, 2025", time: "10:15 AM", status: "Draft" },
  ];

  const analytics = [
    { platform: "YouTube", views: 12540, engagement: 8.2, growth: "+15%" },
    { platform: "Instagram", views: 8750, engagement: 4.7, growth: "+22%" },
    { platform: "LinkedIn", views: 5320, engagement: 3.9, growth: "+8%" },
    { platform: "Twitter", views: 15200, engagement: 2.1, growth: "+5%" },
  ];

  const platformIcon = (platform: string) => {
    switch(platform) {
      case "YouTube": return <Youtube className="h-5 w-5 text-red-600" />;
      case "Instagram": return <Instagram className="h-5 w-5 text-purple-600" />;
      case "LinkedIn": return <Linkedin className="h-5 w-5 text-blue-600" />;
      case "Twitter": return <Twitter className="h-5 w-5 text-blue-400" />;
      default: return null;
    }
  };

  return (
    <AppShell>
      <div className="container py-8 animate-fade-in">
        <DashboardHeader 
          title="Publishing" 
          subtitle="Distribute your content across platforms"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Publication Schedule</h2>
                <Button className="bg-crea8-blue hover:bg-blue-700">
                  Schedule New Post
                </Button>
              </div>
              
              <div className="overflow-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="pb-3 text-left">Content</th>
                      <th className="pb-3 text-left">Platform</th>
                      <th className="pb-3 text-left">Date & Time</th>
                      <th className="pb-3 text-left">Status</th>
                      <th className="pb-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduledPosts.map((post) => (
                      <tr key={post.id} className="border-b">
                        <td className="py-4">
                          <div className="font-medium">{post.title}</div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center">
                            {platformIcon(post.platform)}
                            <span className="ml-2">{post.platform}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.date}, {post.time}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            post.status === "Scheduled" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {post.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm">Preview</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Platform Analytics</h2>
              
              <div className="space-y-4">
                {analytics.map((platform) => (
                  <div key={platform.platform} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {platformIcon(platform.platform)}
                        <span className="ml-2 font-medium">{platform.platform}</span>
                      </div>
                      <span className="text-green-600 text-sm font-medium">{platform.growth}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 text-gray-500 mr-2" />
                        <div>
                          <div className="text-xs text-gray-500">Views</div>
                          <div className="font-semibold">{platform.views.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 text-gray-500 mr-2" />
                        <div>
                          <div className="text-xs text-gray-500">Engagement</div>
                          <div className="font-semibold">{platform.engagement}%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  View Full Analytics
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">Top Performing Content</h2>
              
              <div className="space-y-3">
                <div className="border-b pb-3">
                  <div className="flex items-center">
                    <Youtube className="h-5 w-5 text-red-600 mr-2" />
                    <span className="font-medium">Product Demo Video</span>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>5.2K views</span>
                    <MessageSquare className="h-4 w-4 ml-4 mr-1" />
                    <span>128 comments</span>
                  </div>
                </div>
                
                <div className="border-b pb-3">
                  <div className="flex items-center">
                    <Instagram className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="font-medium">Behind the Scenes</span>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>3.7K views</span>
                    <ThumbsUp className="h-4 w-4 ml-4 mr-1" />
                    <span>405 likes</span>
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

export default Publishing;
