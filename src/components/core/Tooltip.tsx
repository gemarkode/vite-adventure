import { useState } from "react";
import { Transition } from "@headlessui/react";
import clsx from "clsx";

interface TooltipProps {
  content: string;
  className?: string;
  title?: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export default function Tooltip(props: TooltipProps) {
  const { content, className, title, children, position = "bottom" } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Transition
        show={open}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className={clsx("relative", className)}
      >
        <div
          className={clsx(
            "bg-gray-800 text-white rounded-md absolute pt-1 pb-1.5 px-2",
            "shadow-lg",
            position === "top" && "bottom-2 left-1/2 -translate-x-1/2",
            position === "bottom" && "top-2 left-1/2 -translate-x-1/2",
            position === "left" && "right-2 top-1/2 -translate-y-1/2",
            position === "right" && "left-full top-0"
          )}
        >
          <h3 className="text-sm">{title}</h3>
          <p className="text-xs italic w-max">{content}</p>
        </div>
      </Transition>
      <div
        onMouseEnter={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        onMouseLeave={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
      >
        {children}
      </div>
    </>
  );
}
