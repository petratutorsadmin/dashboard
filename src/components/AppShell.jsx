"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  LogOut, 
  Menu, 
  X, 
  ChevronRight,
  UserCircle,
  RefreshCw
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

// Small premium micro-interactive Reload button
function ReloadButton() {
  const [isRotating, setIsRotating] = useState(false);

  const handleReload = () => {
    setIsRotating(true);
    setTimeout(() => {
      window.location.reload();
    }, 450);
  };

  return (
    <button
      onClick={handleReload}
      title="Reload Portal Data"
      className="inline-flex items-center justify-center h-7 w-7 rounded-md border border-border bg-white text-muted-foreground hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all focus:outline-none shrink-0 shadow-none"
    >
      <RefreshCw className={cn(
        "h-3.5 w-3.5 transition-transform duration-500 ease-out",
        isRotating && "rotate-180 text-primary"
      )} />
    </button>
  );
}

export function AppShell({ children, navItems = [], user = null, onLogout }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 transform border-r border-border bg-white transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 shadow-sm flex flex-col",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary font-bold text-xs text-primary-foreground shadow-sm">
              P
            </div>
            <span className="text-md font-semibold tracking-tight text-foreground">Petra Portal</span>
          </div>
          
          {/* Desktop Reload Button */}
          <ReloadButton />
        </div>

        <nav className="flex-1 space-y-1.5 px-3 py-4 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = item.isActive !== undefined ? item.isActive : pathname === item.href;
            return (
              <button
                key={item.label}
                onClick={() => {
                  if (item.onClick) {
                    item.onClick();
                  } else if (item.href) {
                    router.push(item.href);
                  }
                  setIsSidebarOpen(false);
                }}
                className={cn(
                  "group flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-xs font-medium transition-colors focus:outline-none",
                  isActive 
                    ? "bg-primary/5 text-primary border border-primary/20 shadow-none" 
                    : "text-muted-foreground hover:bg-zinc-100/50 hover:text-foreground border border-transparent"
                )}
              >
                {item.icon && <item.icon className={cn(
                  "h-4 w-4 shrink-0",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary transition-colors"
                )} />}
                <span className="flex-1 text-left truncate">{item.label}</span>
                {isActive && <ChevronRight className="h-3 w-3 text-primary opacity-60" />}
              </button>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="border-t border-border p-3.5 bg-zinc-50/40">
          {user && (
            <div className="mb-3 flex items-center gap-2.5 px-1.5">
              <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center border border-primary/15">
                <UserCircle className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-foreground leading-tight">{user.name}</p>
                <p className="truncate text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">{user.role || 'User'}</p>
              </div>
            </div>
          )}
          <button
            onClick={onLogout}
            className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-destructive/5 hover:text-destructive transition-colors focus:outline-none"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Mobile Header */}
        <header className="flex h-16 items-center justify-between border-b border-border bg-white px-4 lg:hidden">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-zinc-50 hover:text-foreground transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="ml-3 flex h-7 w-7 items-center justify-center rounded-md bg-primary font-bold text-xs text-primary-foreground">
              P
            </div>
            <span className="ml-2 text-md font-semibold tracking-tight text-foreground">Petra</span>
          </div>
          
          {/* Mobile Reload Button */}
          <ReloadButton />
        </header>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
