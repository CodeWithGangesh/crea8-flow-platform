
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Platform {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
}

interface PlatformSettingsProps {
  platform: Platform;
}

export function PlatformSettings({ platform }: PlatformSettingsProps) {
  const [enabled, setEnabled] = useState(platform.id === "youtube");
  const [connected, setConnected] = useState(platform.id === "youtube");
  
  const handleConnect = () => {
    setConnected(true);
    toast.success(`Connected to ${platform.name}`);
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <platform.icon className={`h-5 w-5 ${platform.color}`} />
            <span className="font-medium">{platform.name}</span>
            {!connected && (
              <Badge variant="outline" className="text-xs bg-gray-100">
                Not Connected
              </Badge>
            )}
            {connected && (
              <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                Connected
              </Badge>
            )}
          </div>
          <Switch 
            checked={enabled}
            onCheckedChange={(checked) => {
              if (!connected && checked) {
                toast.error(`Please connect to ${platform.name} first`);
                return;
              }
              setEnabled(checked);
              if (checked) {
                toast.success(`${platform.name} publishing enabled`);
              } else {
                toast.info(`${platform.name} publishing disabled`);
              }
            }}
          />
        </div>
        
        <Separator className="my-4" />
        
        {!connected ? (
          <div className="mt-2">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={handleConnect}
            >
              Connect {platform.name} Account
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span>Format content for {platform.name}</span>
              <Toggle aria-label="Format content" defaultPressed />
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span>Apply custom branding</span>
              <Toggle aria-label="Apply branding" />
            </div>
            
            {platform.id === "youtube" && (
              <div className="flex items-center justify-between text-sm">
                <span>Add end screen</span>
                <Toggle aria-label="Add end screen" defaultPressed />
              </div>
            )}
            
            {(platform.id === "instagram" || platform.id === "facebook") && (
              <div className="flex items-center justify-between text-sm">
                <span>Add to story</span>
                <Toggle aria-label="Add to story" />
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
