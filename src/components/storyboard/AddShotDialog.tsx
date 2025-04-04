
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface AddShotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: { description: string; notes: string }) => void;
}

export function AddShotDialog({
  open,
  onOpenChange,
  onSubmit,
}: AddShotDialogProps) {
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      onSubmit({ description, notes });
      setDescription("");
      setNotes("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Add Storyboard Shot</DialogTitle>
          <DialogDescription>
            Create a new shot for your storyboard. You can add an image and notes.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="description">Shot Description</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="E.g., Opening scene with main character"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Camera angles, lighting, special instructions, etc."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Shot Image (Coming Soon)</Label>
            <div className="border-2 border-dashed border-gray-200 rounded-md p-6 flex flex-col items-center justify-center">
              <p className="text-sm text-gray-500">
                Image upload will be available in a future update
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-crea8-blue hover:bg-crea8-darkBlue">
              Add Shot
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
