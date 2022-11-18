// render the AppRouter component inside the MainLayout component
// src\layouts\MainLayout.tsx
import { Outlet } from "react-router-dom";
import Controls from "../components/controls";
import { useAppSelector } from "../hooks";
import { selectStage } from "../store/slices/stage";

export default function MainLayout() {
  const { image } = useAppSelector(selectStage);

  return (
    <main className="bg-gray-900 text-white h-screen flex items-center justify-center relative p-4">
      {image && (
        <figure className="absolute z-0 top-0 left-0 w-full h-full">
          <img
            src={image}
            alt="background"
            className="object-cover w-full h-full"
          />
        </figure>
      )}
      <main className="relative z-[1] bg-black/30 py-10 px-16 rounded-md backdrop-blur-sm">
        <Outlet />
      </main>
      <Controls />
    </main>
  );
}
