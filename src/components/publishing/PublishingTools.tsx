
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  YoutubeIcon, 
  InstagramIcon, 
  FacebookIcon, 
  TwitterIcon,
  ClockIcon,
  TagIcon,
  WandIcon,
  CheckIcon
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { PlatformSettings } from "./PlatformSettings";
import { toast } from "sonner";

interface PublishingToolsProps {
  projectId: string;
}

const platforms = [
  { id: "youtube", name: "YouTube", icon: YoutubeIcon, color: "text-red-600" },
  { id: "instagram", name: "Instagram", icon: InstagramIcon, color: "text-purple-600" },
  { id: "facebook", name: "Facebook", icon: FacebookIcon, color: "text-blue-600" },
  { id: "twitter", name: "Twitter", icon: TwitterIcon, color: "text-sky-500" }
];

export function PublishingTools({ projectId }: PublishingToolsProps) {
  const [activeTab, setActiveTab] = useState("metadata");
  const [title, setTitle] = useState("Travel Vlog: Hidden Gems of Europe");
  const [description, setDescription] = useState("Join me as I explore some of the most beautiful hidden spots in Europe that most tourists never see.");
  const [tags, setTags] = useState(["travel", "europe", "vlog", "hidden gems"]);
  const [newTag, setNewTag] = useState("");
  
  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };
  
  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  const handleOptimizeMetadata = () => {
    // In a real app, this would call an AI service
    setTitle("HIDDEN GEMS of Europe You NEED to Visit | Secret Travel Guide 2023");
    setDescription("🌍 Discover Europe's best-kept secrets! In this travel guide, I take you through stunning villages, breathtaking landscapes, and authentic local experiences that most tourists miss. From coastal hideaways to mountain retreats, these hidden gems will transform your European adventure!");
    setTags([...tags, "travel guide", "secret spots", "european vacation", "off the beaten path"]);
    
    toast.success("Metadata optimized for better engagement!");
  };
  
  const handleSchedulePublish = () => {
    toast.success("Your content has been scheduled for publishing!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Publishing</h2>
        <Button
          onClick={handleSchedulePublish}
          className="bg-crea8-green hover:bg-green-700"
        >
          <ClockIcon className="h-4 w-4 mr-2" />
          Schedule Publish
        </Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="metadata">Metadata</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="metadata" className="pt-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Content Metadata</CardTitle>
                <Button
                  onClick={handleOptimizeMetadata}
                  variant="outline"
                >
                  <WandIcon className="h-4 w-4 mr-2" />
                  Optimize with AI
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-medium">Tags</label>
                <div className="flex">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add tag..."
                    className="flex-1 rounded-r-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                  />
                  <Button 
                    onClick={handleAddTag}
                    className="rounded-l-none"
                  >
                    <TagIcon className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline"
                      className="px-3 py-1 flex items-center gap-1 bg-gray-50"
                    >
                      #{tag}
                      <button 
                        className="text-gray-500 hover:text-gray-700 ml-1"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="platforms" className="pt-4">
          <div className="grid grid-cols-1 gap-4">
            {platforms.map(platform => (
              <PlatformSettings
                key={platform.id}
                platform={platform}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Analytics Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-8 text-center text-gray-500">
                <p>Analytics will be available after publishing your content.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
