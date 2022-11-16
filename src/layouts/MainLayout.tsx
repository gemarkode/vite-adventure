// render the AppRouter component inside the MainLayout component
// src\layouts\MainLayout.tsx
import { Outlet } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

export default function MainLayout() {
  return (
    <main className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <ReactAudioPlayer src="/Secunda.webm" autoPlay loop />
      <Outlet />
    </main>
  );
}
