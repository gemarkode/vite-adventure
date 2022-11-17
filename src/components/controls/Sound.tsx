import backsound from "../../assets/Secunda.webm";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  play,
  pause,
  selectPlaying,
  selectVolume,
  setVolume,
} from "../../store/slices/music";

import moduleStyle from "./range.module.css";

export default function Sound() {
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector(selectPlaying);
  const volume = useAppSelector(selectVolume);

  const audio = useRef<HTMLAudioElement>(null);
  const slider = useRef<HTMLInputElement>(null);
  const [showVolume, setShowVolume] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audio.current?.play();
    } else {
      audio.current?.pause();
    }
  }, [isPlaying]);

  const toggle = () => {
    if (audio?.current?.paused) {
      dispatch(play());
    } else {
      dispatch(pause());
    }
  };

  const handleVolume = (e: any) => {
    dispatch(setVolume(e.target.value));

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
        className={clsx("relative", moduleStyle.button)}
        onMouseEnter={() => setShowVolume(true)}
        onMouseLeave={() => setShowVolume(false)}
        onClick={() => setShowVolume(!showVolume)}
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
            moduleStyle.range,
            "w-32 h-1.5 range-sm bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
            "absolute -top-3 left-0 transform -translate-x-1/2",
            showVolume ? "" : "opacity-0 bg-gray-800"
          )}
          onBlur={() => setShowVolume(false)}
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
