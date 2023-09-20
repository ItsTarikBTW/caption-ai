"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        checked={theme === "light"}
      />
    </div>
  );
};
export default ThemeSwitcher;
