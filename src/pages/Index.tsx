
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ProjectGrid } from "@/components/dashboard/ProjectGrid";
import { CreateProjectDialog } from "@/components/dashboard/CreateProjectDialog";

// Sample project data
const sampleProjects = [
  {
    id: "1",
    title: "Travel Vlog Series",
    description: "A series of travel vlogs exploring hidden gems in Europe.",
    lastEdited: "2023-04-03T16:30:00",
    progress: 65,
    stage: "editing"
  },
  {
    id: "2",
    title: "Product Review",
    description: "In-depth review of the latest smartphone technology.",
    lastEdited: "2023-04-01T10:15:00",
    progress: 40,
    stage: "production"
  },
  {
    id: "3",
    title: "Cooking Tutorial",
    description: "Step-by-step guide to making signature pasta dishes.",
    lastEdited: "2023-03-28T14:45:00",
    progress: 90,
    stage: "publishing"
  },
  {
    id: "4",
    title: "Interview Series",
    description: "Interviews with industry experts on future trends.",
    lastEdited: "2023-03-20T09:30:00",
    progress: 20,
    stage: "scripting"
  }
];

const Index = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState(sampleProjects);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  
  const handleCreateProject = (projectData: { title: string; description: string }) => {
    const newProject = {
      id: (projects.length + 1).toString(),
      title: projectData.title,
      description: projectData.description,
      lastEdited: new Date().toISOString(),
      progress: 0,
      stage: "ideation"
    };
    
    setProjects([...projects, newProject]);
    setIsCreateDialogOpen(false);
  };
  
  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <AppShell>
      <div className="container py-8 animate-fade-in">
        <DashboardHeader 
          title="Crea8 Flow Dashboard" 
          subtitle="Manage your content creation projects"
        />
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Your Projects</h2>
          <Button 
            className="bg-crea8-blue hover:bg-crea8-darkBlue"
            onClick={() => setIsCreateDialogOpen(true)}
          >
            <PlusIcon className="h-4 w-4 mr-2" /> 
            New Project
          </Button>
        </div>
        
        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </ProjectGrid>
        
        <CreateProjectDialog 
          open={isCreateDialogOpen}
          onOpenChange={setIsCreateDialogOpen}
          onSubmit={handleCreateProject}
        />
      </div>
    </AppShell>
  );
};

export default Index;
