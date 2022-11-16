import clsx from "clsx";

interface ButtonProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  fullWidth = false,
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "bg-slate-500/25 font-bold py-1.5 px-4 rounded",
        "hover:bg-gray-800",
        "transition-all duration-200 ease-linear",
        fullWidth && "w-full",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
