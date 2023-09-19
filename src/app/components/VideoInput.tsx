"use client";

import React, {
  useRef,
  useState,
  ChangeEvent,
  useEffect,
  DragEvent,
} from "react";
import UploadCard from "./UploadCard";

export default function VideoInput() {
  // const inputRef = useRef<HTMLInputElement>(null);
  const [source, setSource] = useState<string | undefined>();
  const [isPending, setPending] = useState(false);
  const MAX_FILE_SIZE = 50_000_000; // 50 MB
  const SUPPORTED_FILE_TYPE = "video";
  const GOOD_ASPECT_RATIOS = [1 / 1, 9 / 16]; // 1:1, 9:16
  const [fileName, setFileName] = useState<string | undefined>();
  console.log("fileName", fileName);

  async function isValid(file: File, url: string): Promise<boolean> {
    if (file.size > MAX_FILE_SIZE) {
      // Display an error toast or handle the error appropriately.
      console.error("❌File size too large", file.size);
      return false;
    }
    console.log("✅file size", file.size);

    if (!file.type.includes(SUPPORTED_FILE_TYPE)) {
      // Display an error toast or handle the error appropriately.
      console.error("❌File type not supported", file.type);
      return false;
    }
    console.log("✅file type", file.type);

    const aspectRatio = await getVideoAspectRatio(url);
    if (!GOOD_ASPECT_RATIOS.includes(aspectRatio)) {
      // Display an error toast or handle the error appropriately.
      console.error("❌Aspect ratio is not good", aspectRatio);
      return false;
    }
    console.log("✅Aspect ratio is good", aspectRatio);

    setFileName(file.name);
    return true;
  }
  const getVideoAspectRatio = async (url: string): Promise<number> => {
    const videoElement = document.createElement("video");
    videoElement.src = url;

    return new Promise<number>((resolve) => {
      videoElement.addEventListener("loadedmetadata", () => {
        const aspectRatio = videoElement.videoWidth / videoElement.videoHeight;
        resolve(aspectRatio);
      });
    });
  };
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    handlefile(file);
  };
  const handleDrop = async (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handlefile(file);
  };

  const handlefile = async (file: File | undefined) => {
    if (!file) {
      return;
    }
    console.log("source", file);

    const url = URL.createObjectURL(file);
    if (await isValid(file, url)) {
      setPending(true);
      await new Promise((resolve) => {
        setInterval(resolve, 3000);
      });
      setPending(false);

      setSource(url);
    }
  };
  function reset() {
    setSource(undefined);
  }
  return (
    <div>
      {source && (
        <div className="w-full h-full flex justify-items-center items-center space-x-2">
          <div className="mx-auto max-w-xs">
            <input
              type="text"
              name="projectName"
              className="p-2 text-gray-800 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder={fileName}
            />
          </div>
          <div className="mx-auto max-w-xs">
            <select
              id="example2"
              defaultValue="en"
              className="block h-10 rounded-md  text-gray-800 border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
            >
              <option value="en">English</option>
              <option value="jp">Japanese</option>
              <option value="ch">Chinese</option>
            </select>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
            <div className="hidden sm:inline-block">Upload</div>
          </button>
          <button
            onClick={reset}
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg border border-red-500 bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fill="currentColor"
                d="M13.5 6.5V7h5v-.5a2.5 2.5 0 0 0-5 0Zm-2 .5v-.5a4.5 4.5 0 1 1 9 0V7H28a1 1 0 1 1 0 2h-1.508L24.6 25.568A5 5 0 0 1 19.63 30h-7.26a5 5 0 0 1-4.97-4.432L5.508 9H4a1 1 0 0 1 0-2h7.5Zm2.5 6.5a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0v-10Zm5-1a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-10a1 1 0 0 0-1-1Z"
              />
            </svg>
            <div className="hidden sm:inline-block">Delete</div>
          </button>
        </div>
      )}
      <div className="flex justify-center items-center p-2 ">
        <div className="relative  h-[32rem]">
          {source ? (
            <video className="w-full h-full" src={source} autoPlay muted />
          ) : (
            <UploadCard
              handleDrop={handleDrop}
              handleFileChange={handleFileChange}
              isPending={isPending}
            />
          )}
        </div>
      </div>
    </div>
  );
}
