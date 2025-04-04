
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPinIcon,
  CameraIcon,
  CalendarIcon,
  PlusIcon,
  TrashIcon,
  CheckCircleIcon,
  WandIcon
} from "lucide-react";
import { toast } from "sonner";

interface ProductionData {
  locations: string[];
  equipment: string[];
  schedule: string;
}

interface ProductionPlannerProps {
  productionData: ProductionData;
}

export function ProductionPlanner({ productionData }: ProductionPlannerProps) {
  const [locations, setLocations] = useState(productionData.locations);
  const [equipment, setEquipment] = useState(productionData.equipment);
  const [schedule, setSchedule] = useState(productionData.schedule);
  const [newItemText, setNewItemText] = useState("");
  
  const handleAddItem = (category: "locations" | "equipment") => {
    if (!newItemText.trim()) {
      toast.error("Please enter a value");
      return;
    }
    
    if (category === "locations") {
      setLocations([...locations, newItemText]);
    } else if (category === "equipment") {
      setEquipment([...equipment, newItemText]);
    }
    
    setNewItemText("");
    toast.success(`Added new ${category.slice(0, -1)}`);
  };
  
  const handleRemoveItem = (category: "locations" | "equipment", index: number) => {
    if (category === "locations") {
      setLocations(locations.filter((_, i) => i !== index));
    } else if (category === "equipment") {
      setEquipment(equipment.filter((_, i) => i !== index));
    }
    
    toast.success(`Removed ${category.slice(0, -1)}`);
  };
  
  const handleOptimize = () => {
    toast.success("Schedule optimized! The AI has reorganized your shooting plan for maximum efficiency.");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Production Planner</h2>
        <Button
          onClick={handleOptimize}
          className="bg-crea8-blue hover:bg-crea8-darkBlue"
        >
          <WandIcon className="h-4 w-4 mr-2" />
          Optimize Schedule
        </Button>
      </div>
      
      <Tabs defaultValue="locations">
        <TabsList>
          <TabsTrigger value="locations">
            <MapPinIcon className="h-4 w-4 mr-2" />
            Locations
          </TabsTrigger>
          <TabsTrigger value="equipment">
            <CameraIcon className="h-4 w-4 mr-2" />
            Equipment
          </TabsTrigger>
          <TabsTrigger value="schedule">
            <CalendarIcon className="h-4 w-4 mr-2" />
            Schedule
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="locations" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Shooting Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex">
                  <input
                    type="text"
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                    placeholder="Add a new location..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-crea8-blue"
                  />
                  <Button 
                    className="rounded-l-none"
                    onClick={() => handleAddItem("locations")}
                  >
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
                
                <div className="space-y-2">
                  {locations.length > 0 ? (
                    locations.map((location, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                      >
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 text-crea8-blue mr-2" />
                          <span>{location}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem("locations", index)}
                        >
                          <TrashIcon className="h-4 w-4 text-crea8-red" />
                        </Button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-gray-500">
                      No locations added yet
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="equipment" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Equipment Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex">
                  <input
                    type="text"
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                    placeholder="Add equipment item..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-crea8-blue"
                  />
                  <Button 
                    className="rounded-l-none"
                    onClick={() => handleAddItem("equipment")}
                  >
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
                
                <div className="space-y-2">
                  {equipment.length > 0 ? (
                    equipment.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                      >
                        <div className="flex items-center">
                          <CameraIcon className="h-4 w-4 text-crea8-blue mr-2" />
                          <span>{item}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem("equipment", index)}
                        >
                          <TrashIcon className="h-4 w-4 text-crea8-red" />
                        </Button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-gray-500">
                      No equipment added yet
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="schedule" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Shooting Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 border border-gray-200 rounded-md">
                <div className="flex items-center mb-4">
                  <CalendarIcon className="h-5 w-5 text-crea8-blue mr-2" />
                  <span className="font-medium">{schedule}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  This is a placeholder for the full scheduling functionality. In a complete application, this would include a calendar view with day-by-day shooting breakdowns.
                </p>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircleIcon className="h-4 w-4 text-crea8-green mr-2" />
                    <span>Day 1: Location scouting and equipment setup</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircleIcon className="h-4 w-4 text-crea8-green mr-2" />
                    <span>Day 2: Main interview footage and b-roll</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircleIcon className="h-4 w-4 text-crea8-green mr-2" />
                    <span>Day 3: Secondary locations and additional footage</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
