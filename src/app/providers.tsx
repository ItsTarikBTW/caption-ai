"use client";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState<boolean>(false);
  
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return <>{children}</>;

  return <ThemeProvider defaultTheme="system" attribute="class" > {children} </ThemeProvider>;
}
