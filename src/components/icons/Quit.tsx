import clsx from "clsx";

const styles = "text-xl hover:text-gray-300 transition-all duration-300";

export function Quit() {
  return <i className={clsx(styles, "bx bxs-door-open")}></i>;
}
