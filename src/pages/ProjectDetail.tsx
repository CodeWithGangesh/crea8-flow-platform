
import { useParams } from "react-router-dom";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScriptEditor } from "@/components/script/ScriptEditor";
import { Storyboard } from "@/components/storyboard/Storyboard";
import { ProductionPlanner } from "@/components/production/ProductionPlanner";
import { PublishingTools } from "@/components/publishing/PublishingTools";

// Sample project data
const projectData = {
  "1": {
    id: "1",
    title: "Travel Vlog Series",
    description: "A series of travel vlogs exploring hidden gems in Europe.",
    script: "# Travel Vlog: Hidden Gems of Europe\n\n## Introduction\n\nHello everyone! Today we're exploring some of the most beautiful hidden spots in Europe that most tourists never see.\n\n## Location 1: Coastal Village\n\n[Establishing shot of village from hilltop]\n\nNestled between the cliffs and the sea, this tiny village has remained unchanged for centuries.\n\n## Location 2: Forest Retreat\n\n[Walking shot through dense forest]\n\nJust two hours from the capital, this ancient forest feels like stepping into another world.",
    storyboard: [
      { id: "s1", description: "Opening drone shot of coastline", notes: "Start high, then gradually descend" },
      { id: "s2", description: "Host walking through village streets", notes: "Capture local architecture in background" },
      { id: "s3", description: "Interview with local shopkeeper", notes: "Ensure good audio setup for outdoor recording" }
    ],
    production: {
      locations: ["Coastal Village", "Mountain Forest", "Capital City"],
      equipment: ["Main Camera", "Drone", "Lav Mic", "Tripod", "Stabilizer"],
      schedule: "April 15-22, 2023"
    }
  },
  "2": {
    id: "2",
    title: "Product Review",
    description: "In-depth review of the latest smartphone technology.",
    script: "# Comprehensive Smartphone Review\n\n## Introduction\n\nToday we're taking an in-depth look at the latest flagship smartphone and seeing if it lives up to the hype.\n\n## Design and Build Quality\n\nThe phone features an aluminum body with glass front and back. Let's talk about how it feels in the hand and the overall build quality.\n\n## Camera System\n\nThis phone boasts a triple camera system with some impressive specs. We'll test it in various lighting conditions and see how it performs.",
    storyboard: [
      { id: "s1", description: "Product unboxing shot", notes: "Clean background, good lighting" },
      { id: "s2", description: "Close-up of phone features", notes: "Use macro lens for detail shots" },
      { id: "s3", description: "Side-by-side comparison with previous model", notes: "Show size and design differences" }
    ],
    production: {
      locations: ["Studio"],
      equipment: ["Main Camera", "Lighting Kit", "Product Table", "Backdrop"],
      schedule: "April 10, 2023"
    }
  },
  "3": {
    id: "3",
    title: "Cooking Tutorial",
    description: "Step-by-step guide to making signature pasta dishes.",
    script: "# Homemade Pasta Masterclass\n\n## Introduction\n\nWelcome to our kitchen! Today I'll be showing you how to make authentic Italian pasta from scratch.\n\n## Ingredients\n\nFor the pasta dough, you'll need:\n- 2 cups of flour\n- 3 eggs\n- A pinch of salt\n- 1 tablespoon of olive oil\n\n## Preparation\n\nFirst, we'll mix our ingredients and knead the dough until it reaches the perfect consistency.",
    storyboard: [
      { id: "s1", description: "Ingredients laid out on counter", notes: "Organize ingredients aesthetically" },
      { id: "s2", description: "Mixing and kneading process", notes: "Show hands working dough from multiple angles" },
      { id: "s3", description: "Rolling and cutting pasta", notes: "Close-up of technique" }
    ],
    production: {
      locations: ["Kitchen Set"],
      equipment: ["Main Camera", "Overhead Camera", "Lighting Kit", "Lav Mic"],
      schedule: "April 5, 2023"
    }
  },
  "4": {
    id: "4",
    title: "Interview Series",
    description: "Interviews with industry experts on future trends.",
    script: "# Tech Industry Insights: Episode 1\n\n## Introduction\n\nToday we're sitting down with Jane Smith, a leading expert in artificial intelligence, to discuss the future of the technology and its impact on various industries.\n\n## Background\n\n[Brief introduction to Jane's background and expertise]\n\n## Questions\n\n1. How did you first get involved in AI research?\n2. What current developments in AI do you find most exciting?\n3. How do you see AI transforming everyday life in the next decade?",
    storyboard: [
      { id: "s1", description: "Host and guest seated in interview setup", notes: "Two-camera setup with medium shots" },
      { id: "s2", description: "B-roll of AI technology examples", notes: "Source stock footage of AI applications" },
      { id: "s3", description: "Closing thoughts with both speakers", notes: "Wide shot showing both in conversation" }
    ],
    production: {
      locations: ["Interview Studio"],
      equipment: ["Two Main Cameras", "Lighting Kit", "Two Lav Mics", "Backdrop"],
      schedule: "April 20, 2023"
    }
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [activeTab, setActiveTab] = useState("script");
  const project = projectId ? projectData[projectId as keyof typeof projectData] : null;

  if (!project) {
    return (
      <AppShell>
        <div className="container py-8">
          <p>Project not found</p>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="container py-8 animate-fade-in">
        <DashboardHeader 
          title={project.title} 
          subtitle={project.description}
        />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="script">Script</TabsTrigger>
            <TabsTrigger value="storyboard">Storyboard</TabsTrigger>
            <TabsTrigger value="production">Production</TabsTrigger>
            <TabsTrigger value="publishing">Publishing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="script" className="mt-4">
            <ScriptEditor initialContent={project.script} />
          </TabsContent>
          
          <TabsContent value="storyboard" className="mt-4">
            <Storyboard shots={project.storyboard} />
          </TabsContent>
          
          <TabsContent value="production" className="mt-4">
            <ProductionPlanner productionData={project.production} />
          </TabsContent>
          
          <TabsContent value="publishing" className="mt-4">
            <PublishingTools projectId={project.id} />
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default ProjectDetail;
