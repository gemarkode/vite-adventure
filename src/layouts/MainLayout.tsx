// render the AppRouter component inside the MainLayout component
// src\layouts\MainLayout.tsx
import Controls from "@/components/controls";
import { Outlet } from "react-router-dom";
import Inventory from "@/components/inventory";
import { motion } from "framer-motion";
import InventoryControls from "@/components/inventory/Controls";
import { useAppSelector } from "@/hooks";
import { selectExpand } from "@/store/slices/inventory";
import clsx from "clsx";

export default function MainLayout() {
  const expand = useAppSelector(selectExpand);

  return (
    <div className="bg-gray-900 text-white h-screen flex items-center justify-center relative p-4">
      <main
        className={clsx(
          "relative z-[1] bg-black/10 h-96 w-[600px]",
          "hidden backdrop-blur-sm sm:flex items-center justify-center",
          expand ? " rounded-l-md" : "rounded-md"
        )}
      >
        <Outlet />
      </main>
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: expand ? 300 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={clsx(
          "relative h-96 z-[0]",
          "bg bg-gradient-to-r from-black/10 to-black/20",
          "rounded-r-md backdrop-blur-sm flex items-center justify-center"
        )}
      >
        <Inventory />
        <InventoryControls />
      </motion.div>

      <div className="sm:hidden">
        <p className="text-center">Mobile version coming soon!</p>
      </div>
      <Controls />
    </div>
  );
}
