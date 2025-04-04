
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrashIcon,
  MoveUpIcon,
  MoveDownIcon,
  PencilIcon,
  ImageIcon,
} from "lucide-react";

interface Shot {
  id: string;
  description: string;
  notes: string;
  image?: string;
}

interface StoryboardShotProps {
  shot: Shot;
  position: number;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function StoryboardShot({
  shot,
  position,
  onDelete,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
}: StoryboardShotProps) {
  return (
    <Card className="border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between py-3">
        <div className="flex items-center">
          <Badge className="mr-3 bg-blue-600 hover:bg-blue-700">Shot {position}</Badge>
          <CardTitle className="text-base">{shot.description}</CardTitle>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" onClick={onMoveUp} disabled={isFirst}>
            <MoveUpIcon className="h-4 w-4" />
            <span className="sr-only">Move Up</span>
          </Button>
          <Button variant="ghost" size="sm" onClick={onMoveDown} disabled={isLast}>
            <MoveDownIcon className="h-4 w-4" />
            <span className="sr-only">Move Down</span>
          </Button>
          <Button variant="ghost" size="sm" className="text-crea8-red" onClick={onDelete}>
            <TrashIcon className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 bg-gray-100 rounded-md flex items-center justify-center h-36">
            {shot.image ? (
              <img
                src={shot.image}
                alt={`Storyboard for ${shot.description}`}
                className="h-full w-full object-contain rounded-md"
              />
            ) : (
              <div className="flex flex-col items-center text-gray-400">
                <ImageIcon className="h-8 w-8 mb-2" />
                <span className="text-xs">No image</span>
              </div>
            )}
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium mb-2">Notes:</h3>
            <p className="text-gray-600 text-sm">{shot.notes}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="py-3 flex justify-end">
        <Button variant="outline" size="sm">
          <PencilIcon className="h-4 w-4 mr-2" />
          Edit Shot
        </Button>
      </CardFooter>
    </Card>
  );
}
