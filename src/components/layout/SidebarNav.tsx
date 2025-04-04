
import { Home, FileText, Layout, Video, Share, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Scripts", icon: FileText, href: "/scripts" },
  { name: "Storyboards", icon: Layout, href: "/storyboards" },
  { name: "Production", icon: Video, href: "/production" },
  { name: "Publishing", icon: Share, href: "/publishing" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export function SidebarNav() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <aside
      className={cn(
        "bg-white border-r border-gray-200 h-screen flex flex-col transition-all duration-300",
        collapsed ? "w-[80px]" : "w-[250px]"
      )}
    >
      <div className="p-4 flex items-center justify-between border-b border-gray-100">
        <h2 className={cn("font-bold text-crea8-blue text-xl", 
          collapsed && "hidden"
        )}>
          Crea8Flow
        </h2>
        <span className={cn("text-2xl font-bold text-crea8-blue", 
          !collapsed && "hidden"
        )}>
          C8
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "→" : "←"}
        </Button>
      </div>
      
      <nav className="mt-6 flex flex-col gap-2 px-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              "flex items-center px-4 py-3 rounded-md transition-colors",
              "hover:bg-gray-100",
              location.pathname === item.href 
                ? "bg-gray-100 text-crea8-blue font-medium" 
                : "text-gray-600"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className={cn("ml-3", collapsed && "hidden")}>
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
      
      <div className="mt-auto p-4">
        <div className={cn(
          "bg-crea8-lightGray rounded-md p-3 flex items-center",
          collapsed && "justify-center"
        )}>
          <div className="h-8 w-8 rounded-full bg-crea8-blue flex items-center justify-center text-white font-bold">
            U
          </div>
          <div className={cn("ml-3", collapsed && "hidden")}>
            <div className="text-sm font-medium">User Name</div>
            <div className="text-xs text-gray-500">Pro Plan</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
