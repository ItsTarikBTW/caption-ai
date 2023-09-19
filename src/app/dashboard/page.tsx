"use client"
import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Navbar from "../components/navbar";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [isSideOpen, setIsSideOpen] = useState<boolean>(true);
  const toggleSide = () => {
    setIsSideOpen(!isSideOpen);
  }
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {isSideOpen && <Sidebar />}

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar isSideOpen={isSideOpen} toggleSide={toggleSide} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {/* Page content */}
          <div className="p-6">Your page content goes here
          <Button >Button</Button>
          </div>
          {/* Theme switcher */}
        </main>
      </div>
    </div>
  );
}
