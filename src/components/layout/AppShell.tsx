
import { ReactNode } from "react";
import { SidebarNav } from "./SidebarNav";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-crea8-lightGray to-white">
      <div className="flex">
        <SidebarNav />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
