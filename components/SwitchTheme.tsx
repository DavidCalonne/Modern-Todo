"use client"

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import Button from "./ui/Button";
import { Moon, Sun } from "lucide-react";

export default function SwitchTheme(){
  const { theme, toggleTheme } = useTheme();

  return (
    <Button type="outline-primary" onClick={toggleTheme}>
      {theme === "light" ? <Moon width={16} height={16} /> : <Sun width={16} height={16} />}
    </Button>
  );
};
