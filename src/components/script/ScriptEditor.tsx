
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScriptAnalysis } from "./ScriptAnalysis";
import { 
  WandIcon, 
  SaveIcon, 
  AlertCircleIcon,
  CheckCircleIcon
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ScriptEditorProps {
  initialContent: string;
}

export function ScriptEditor({ initialContent }: ScriptEditorProps) {
  const [content, setContent] = useState(initialContent);
  const [savedContent, setSavedContent] = useState(initialContent);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const { toast } = useToast();
  
  const handleSave = () => {
    setSavedContent(content);
    toast({
      title: "Script saved",
      description: "Your script has been saved successfully.",
      variant: "default",
    });
  };
  
  const handleGenerateAiSuggestion = () => {
    // In a real app, this would call an AI service
    const mockSuggestions = [
      "Consider adding more descriptive visual cues to enhance the storyboarding process.",
      "The introduction might benefit from a stronger hook to capture viewer attention in the first 10 seconds.",
      "For the interview section, prepare some follow-up questions based on possible answers.",
      "Add more specific details about location requirements to help with production planning."
    ];
    
    setAiSuggestion(mockSuggestions[Math.floor(Math.random() * mockSuggestions.length)]);
    
    toast({
      title: "AI suggestion generated",
      description: "New content suggestion is ready for review.",
      variant: "default",
    });
  };
  
  const handleApplySuggestion = () => {
    if (!aiSuggestion) return;
    
    setContent(content + "\n\n" + aiSuggestion);
    setAiSuggestion("");
    
    toast({
      title: "Suggestion applied",
      description: "The AI suggestion has been added to your script.",
      variant: "default",
    });
  };
  
  const hasUnsavedChanges = content !== savedContent;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Script Editor</h2>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handleGenerateAiSuggestion}
          >
            <WandIcon className="h-4 w-4 mr-2" />
            AI Suggestions
          </Button>
          <Button 
            onClick={handleSave}
            disabled={!hasUnsavedChanges}
            className="bg-crea8-blue hover:bg-crea8-darkBlue"
          >
            <SaveIcon className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      </div>
      
      {hasUnsavedChanges && (
        <div className="flex items-center bg-amber-50 border border-amber-200 p-3 rounded-md">
          <AlertCircleIcon className="h-5 w-5 text-amber-500 mr-2" />
          <p className="text-sm text-amber-700">You have unsaved changes</p>
        </div>
      )}
      
      <Tabs defaultValue="editor">
        <TabsList>
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="editor" className="pt-4">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[500px] font-mono"
            placeholder="Write your script here..."
          />
        </TabsContent>
        
        <TabsContent value="preview" className="pt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="prose max-w-none">
                {content.split("\n").map((line, index) => {
                  if (line.startsWith("# ")) {
                    return <h1 key={index} className="text-2xl font-bold mt-4 mb-2">{line.substring(2)}</h1>;
                  } else if (line.startsWith("## ")) {
                    return <h2 key={index} className="text-xl font-semibold mt-4 mb-2">{line.substring(3)}</h2>;
                  } else if (line.startsWith("[") && line.endsWith("]")) {
                    return <p key={index} className="text-blue-600 italic my-2">{line}</p>;
                  } else if (line.trim() === "") {
                    return <br key={index} />;
                  } else {
                    return <p key={index} className="my-2">{line}</p>;
                  }
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analysis" className="pt-4">
          <ScriptAnalysis content={content} />
        </TabsContent>
      </Tabs>
      
      {aiSuggestion && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <WandIcon className="h-5 w-5 text-crea8-green mr-2" />
              AI Suggestion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800 mb-4">{aiSuggestion}</p>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="bg-crea8-green hover:bg-green-700"
                onClick={handleApplySuggestion}
              >
                <CheckCircleIcon className="h-4 w-4 mr-2" />
                Apply Suggestion
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setAiSuggestion("")}
              >
                Dismiss
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
