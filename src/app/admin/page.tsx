"use client";
import { Children, ReactNode, useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
export default function Admin({ children }: { children?: ReactNode }) {
  const [isSideOpen, setIsSideOpen] = useState<boolean>(true);
  const toggleSide = () => {
    setIsSideOpen(!isSideOpen);
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {isSideOpen && <Sidebar />}

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar isSideOpen={isSideOpen} toggleSide={toggleSide} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {children || <div className="p-4">Content</div>}
        </main>
      </div>
    </div>
  );
}
