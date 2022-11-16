// render the AppRouter component inside the MainLayout component
// src\layouts\MainLayout.tsx
import { Outlet } from "react-router-dom";
// import ReactAudioPlayer from "react-audio-player";
import Sound from "../components/controls/Sound";

export default function MainLayout() {
  return (
    <main className="bg-gray-900 text-white h-screen flex items-center justify-center relative p-4">
      <Sound />
      <Outlet />
    </main>
  );
}
