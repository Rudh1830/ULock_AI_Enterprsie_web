"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-1 bg-secondary/50 rounded-full p-1 border border-border/50">
      <Button
        variant="ghost"
        size="icon"
        className={`w-8 h-8 rounded-full ${theme === "light" ? "bg-background shadow-sm" : ""}`}
        onClick={() => setTheme("light")}
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`w-8 h-8 rounded-full ${theme === "dark" ? "bg-background shadow-sm" : ""}`}
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`w-8 h-8 rounded-full ${theme === "system" ? "bg-background shadow-sm" : ""}`}
        onClick={() => setTheme("system")}
      >
        <Monitor className="h-4 w-4" />
      </Button>
    </div>
  );
}
