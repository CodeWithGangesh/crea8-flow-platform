
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

interface Project {
  id: string;
  title: string;
  description: string;
  lastEdited: string;
  progress: number;
  stage: "ideation" | "scripting" | "storyboarding" | "production" | "editing" | "publishing";
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const getStageBadgeColor = (stage: Project["stage"]) => {
    switch (stage) {
      case "ideation":
        return "bg-gray-200 text-gray-800";
      case "scripting":
        return "bg-blue-100 text-blue-800";
      case "storyboarding":
        return "bg-purple-100 text-purple-800";
      case "production":
        return "bg-yellow-100 text-yellow-800";
      case "editing":
        return "bg-orange-100 text-orange-800";
      case "publishing":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card 
      className="hover:shadow-md transition-shadow cursor-pointer border-gray-200"
      onClick={onClick}
    >
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-xl text-gray-900 mb-2">{project.title}</h3>
          <Badge className={getStageBadgeColor(project.stage)}>
            {project.stage.charAt(0).toUpperCase() + project.stage.slice(1)}
          </Badge>
        </div>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{project.description}</p>
        
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium text-gray-900">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>
      </CardContent>
      
      <CardFooter className="border-t border-gray-100 px-6 py-3">
        <p className="text-xs text-gray-500">
          Last edited {formatDistanceToNow(new Date(project.lastEdited))} ago
        </p>
      </CardFooter>
    </Card>
  );
}
