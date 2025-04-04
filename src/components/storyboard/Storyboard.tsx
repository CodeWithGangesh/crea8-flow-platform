
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  PlusIcon, 
  TrashIcon, 
  MoveUpIcon, 
  MoveDownIcon,
  ImageIcon,
  WandIcon
} from "lucide-react";
import { StoryboardShot } from "./StoryboardShot";
import { AddShotDialog } from "./AddShotDialog";
import { useToast } from "@/hooks/use-toast";

interface Shot {
  id: string;
  description: string;
  notes: string;
  image?: string;
}

interface StoryboardProps {
  shots: Shot[];
}

export function Storyboard({ shots: initialShots }: StoryboardProps) {
  const [shots, setShots] = useState<Shot[]>(initialShots);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleAddShot = (newShot: Omit<Shot, "id">) => {
    const shot = {
      ...newShot,
      id: `shot-${Date.now()}`
    };
    
    setShots([...shots, shot]);
    setIsDialogOpen(false);
    
    toast({
      title: "Shot added",
      description: "New storyboard shot has been added.",
    });
  };
  
  const handleDeleteShot = (id: string) => {
    setShots(shots.filter(shot => shot.id !== id));
    
    toast({
      title: "Shot deleted",
      description: "Storyboard shot has been removed.",
    });
  };
  
  const handleMoveShot = (id: string, direction: "up" | "down") => {
    const index = shots.findIndex(shot => shot.id === id);
    if (index === -1) return;
    
    const newShots = [...shots];
    
    if (direction === "up" && index > 0) {
      [newShots[index], newShots[index - 1]] = [newShots[index - 1], newShots[index]];
    } else if (direction === "down" && index < shots.length - 1) {
      [newShots[index], newShots[index + 1]] = [newShots[index + 1], newShots[index]];
    } else {
      return;
    }
    
    setShots(newShots);
  };

  const handleGenerateFromScript = () => {
    toast({
      title: "AI Storyboard Generation",
      description: "In a real app, this would generate storyboards from your script.",
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Storyboard</h2>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handleGenerateFromScript}
          >
            <WandIcon className="h-4 w-4 mr-2" />
            Generate from Script
          </Button>
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="bg-crea8-blue hover:bg-crea8-darkBlue"
          >
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Shot
          </Button>
        </div>
      </div>
      
      {shots.length === 0 ? (
        <Card className="border-dashed border-2 border-gray-200">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <ImageIcon className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No Storyboard Shots Yet</h3>
            <p className="text-gray-500 text-center max-w-md mb-6">
              Start creating your storyboard by adding shots or generate them automatically from your script.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleGenerateFromScript}
              >
                <WandIcon className="h-4 w-4 mr-2" />
                Generate from Script
              </Button>
              <Button
                onClick={() => setIsDialogOpen(true)}
                className="bg-crea8-blue hover:bg-crea8-darkBlue"
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Shot
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {shots.map((shot, index) => (
            <StoryboardShot
              key={shot.id}
              shot={shot}
              position={index + 1}
              onDelete={() => handleDeleteShot(shot.id)}
              onMoveUp={() => handleMoveShot(shot.id, "up")}
              onMoveDown={() => handleMoveShot(shot.id, "down")}
              isFirst={index === 0}
              isLast={index === shots.length - 1}
            />
          ))}
        </div>
      )}
      
      <AddShotDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleAddShot}
      />
    </div>
  );
}
