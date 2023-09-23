"use client";
import { ReactNode, useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import { Icons } from "@/components/ui/icon";
import { useTheme } from "next-themes";
export default function Admin({ children }: { children?: ReactNode }) {
  const theme = useTheme();
  const [isSideOpen, setIsSideOpen] = useState<boolean>(true);
  const toggleSide = () => {
    setIsSideOpen(!isSideOpen);
  };
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // redirect to admin/dashboard if the url is /admin

    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Icons.spinner className="  mr-2 h-4 w-4 animate-spin" />
        </div>
      ) : (
        <div className="flex h-screen">
          {/* Sidebar */}
          {isSideOpen && <Sidebar />}

          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Navbar */}
            <Navbar isSideOpen={isSideOpen} toggleSide={toggleSide} />

            <main className="relative flex-1 overflow-x-hidden overflow-y-auto p-2">
              {children}
            </main>
          </div>
        </div>
      )}
    </>
  );
}
