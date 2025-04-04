
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface ScriptAnalysisProps {
  content: string;
}

export function ScriptAnalysis({ content }: ScriptAnalysisProps) {
  // In a real application, this would do actual analysis
  // Here we're just counting things for demonstration
  
  const wordCount = content.split(/\s+/).filter(word => word.length > 0).length;
  const paragraphCount = content.split("\n\n").filter(p => p.trim().length > 0).length;
  const shotDirections = content.match(/\[.*?\]/g)?.length || 0;
  
  // Mock tone analysis
  const toneAnalysis = {
    formal: 65,
    conversational: 30,
    technical: 20,
    emotional: 15
  };
  
  // Mock keywords
  const keywords = ["travel", "europe", "culture", "hidden", "explore", "local"];

  // Mock estimated runtime calculation
  const estimatedRuntime = Math.round(wordCount / 150 * 60); // Roughly 150 words per minute
  const minutes = Math.floor(estimatedRuntime / 60);
  const seconds = estimatedRuntime % 60;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Script Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Word Count</span>
                <span className="text-sm">{wordCount}</span>
              </div>
              <Progress value={Math.min(100, wordCount / 10)} />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Paragraphs</span>
                <span className="text-sm">{paragraphCount}</span>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Shot Directions</span>
                <span className="text-sm">{shotDirections}</span>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Estimated Runtime</span>
                <span className="text-sm">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Content Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Tone Analysis</h3>
              <div className="space-y-2">
                {Object.entries(toneAnalysis).map(([tone, value]) => (
                  <div key={tone}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">{tone.charAt(0).toUpperCase() + tone.slice(1)}</span>
                      <span className="text-sm">{value}%</span>
                    </div>
                    <Progress value={value} />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Key Topics</h3>
              <div className="flex flex-wrap gap-2">
                {keywords.map(keyword => (
                  <Badge key={keyword} variant="outline" className="bg-blue-50">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
