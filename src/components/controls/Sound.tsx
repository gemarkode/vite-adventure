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
import { Play, Pause, VolumeFull, VolumeLow, VolumeMute } from "../icons";

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
    <div className="flex items-center gap-2">
      <audio ref={audio} src={backsound} loop />
      <button className="flex items-center focus:outline-none" onClick={toggle}>
        {isPlaying ? <Pause /> : <Play />}
      </button>
      <button
        className={clsx(
          "relative flex items-center focus:outline-none",
          moduleStyle.button
        )}
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

        <div
          className={clsx(
            "absolute right-1/2 transform translate-x-1/2",
            "transition-all duration-300 ease-in-out -rotate-90",
            "bg-white/25 rounded-full",
            "flex items-center justify-center",
            "w-max py-1 px-1.5",
            showVolume ? "bottom-16" : "bottom-14 opacity-0"
          )}
        >
          <input
            id="default-range"
            ref={slider}
            type="range"
            defaultValue={100}
            className={clsx(
              "transition-transform duration-300 ease-in-out",
              moduleStyle.range,
              "w-20 focus:outline-none",
              showVolume ? "opacity-100" : "opacity-0",
              "bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            )}
            onBlur={() => setShowVolume(false)}
            onChange={handleVolume}
            min={0}
            max={100}
          />
        </div>
      </button>
    </div>
  );
}
