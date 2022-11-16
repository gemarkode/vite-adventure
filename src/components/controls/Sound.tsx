import backsound from "../../assets/Secunda.webm";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import rangeStyles from "./range.module.css";

export default function Sound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);
  const slider = useRef<HTMLInputElement>(null);
  const [volume, setVolume] = useState(100);
  const [showVolume, setShowVolume] = useState(false);

  const toggle = () => {
    if (audio?.current?.paused) {
      audio.current.play();
      setIsPlaying(true);
    } else {
      audio?.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleVolume = (e: any) => {
    setVolume(e.target.value);

    // @ts-ignore
    slider.current.style.backgroundSize = `${e.target.value}% 100%`;
    // @ts-ignore
    audio.current.volume = e.target.value / 100;
  };

  return (
    <div className="absolute bottom-4 flex items-center gap-2">
      <audio ref={audio} src={backsound} loop />
      <button onClick={toggle}>{isPlaying ? <Pause /> : <Play />}</button>
      <button
        className="relative"
        onMouseEnter={() => setShowVolume(true)}
        onMouseLeave={() => setShowVolume(false)}
      >
        {volume < 0.1 ? (
          <VolumeMute />
        ) : volume < 50 ? (
          <VolumeLow />
        ) : (
          <VolumeFull />
        )}
        <input
          id="default-range"
          ref={slider}
          type="range"
          defaultValue={100}
          className={clsx(
            rangeStyles.range,
            "w-32 h-1.5 range-sm bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
            "absolute -top-3 left-0 transform -translate-x-1/2",
            showVolume ? "" : "opacity-0 bg-gray-800"
          )}
          onMouseEnter={(e) => e.stopPropagation()}
          // onMouseLeave={(e) => e.stopPropagation()}
          onChange={handleVolume}
          min={0}
          max={100}
        />
      </button>
    </div>
  );
}

const styles = "text-2xl hover:text-gray-300 transition-all duration-300";

function Play() {
  return <i className={clsx(styles, "bx bx-play")}></i>;
}

function Pause() {
  return <i className={clsx(styles, "bx bx-pause")}></i>;
}

function VolumeFull() {
  return <i className={clsx(styles, "bx bx-volume-full")}></i>;
}

function VolumeMute() {
  return <i className={clsx(styles, "bx bx-volume-mute")}></i>;
}

function VolumeLow() {
  return <i className={clsx(styles, "bx bx-volume-low")}></i>;
}
