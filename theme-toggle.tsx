"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ThemeToggle({ isDarkMode, setIsDarkMode }: ThemeToggleProps) {

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      if (storedTheme === "dark") {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDarkScheme);
      if (prefersDarkScheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [setIsDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem("theme", newTheme);
  }

  return (
    <Button
      variant="outline"
      className={`gap-2 ${isDarkMode ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-white text-white hover:bg-gray-700' : 'border-black text-black bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hover:bg-gray-200'}`}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <Sun className="w-4 h-4 sm:w-6 sm:h-6" />
      ) : (
        <Moon className="w-4 h-4 sm:w-6 sm:h-6" />
      )}
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </Button>
  )
}

