import clsx from "clsx";

const styles = "text-2xl hover:text-gray-300 transition-all duration-300";

export function Play() {
  return <i className={clsx(styles, "bx bx-play")}></i>;
}

export function Pause() {
  return <i className={clsx(styles, "bx bx-pause")}></i>;
}

export function VolumeFull() {
  return <i className={clsx(styles, "bx bx-volume-full")}></i>;
}

export function VolumeMute() {
  return <i className={clsx(styles, "bx bx-volume-mute")}></i>;
}

export function VolumeLow() {
  return <i className={clsx(styles, "bx bx-volume-low")}></i>;
}
