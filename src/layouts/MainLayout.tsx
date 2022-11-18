// render the AppRouter component inside the MainLayout component
// src\layouts\MainLayout.tsx
import Controls from "../components/controls";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { selectStage } from "../store/slices/stage";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";

export default function MainLayout() {
  const { pathname } = useLocation();
  const { imageQuery } = useAppSelector(selectStage);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loadedImage, setLoadedImage] = useState("");

  const url = import.meta.env.VITE_IMAGE_URL;

  useEffect(() => {
    setImageLoading(true);
    setImageLoaded(false);
    if (imageQuery) {
      fetch(`${url}${imageQuery}`)
        .then((res) => res.json())
        .then((data) => {
          const images = data.results;
          const randomImage = images[Math.floor(Math.random() * images.length)];
          setImageLoading(false);
          setImageLoaded(true);
          setLoadedImage(randomImage.urls.regular);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [imageQuery]);

  return (
    <main className="bg-gray-900 text-white h-screen flex items-center justify-center relative p-4">
      {pathname !== "/" && (
        <Transition
          show={imageLoaded}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <figure className="absolute z-0 top-0 left-0 w-full h-full">
            <img
              src={loadedImage}
              alt="background"
              className="object-cover w-full h-full"
            />
          </figure>
        </Transition>
      )}
      <main className="relative z-[1] bg-black/30 py-10 px-16 rounded-md backdrop-blur-sm">
        <Outlet />
      </main>
      <Controls />
    </main>
  );
}
