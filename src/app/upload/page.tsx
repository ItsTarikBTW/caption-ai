import ThemeSwitcher from "../components/ThemeSwitcher";
import VideoInput from "../components/VideoInput";

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <ThemeSwitcher />
      <VideoInput />
    </main>
  );
}