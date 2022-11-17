import { Quit } from "../icons";
import { useNavigate } from "react-router-dom";
import styles from "./notap.module.css";
import clsx from "clsx";

export default function Exit() {
  const navigate = useNavigate();

  const handleQuit = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    navigate("/");
  };

  return (
    <button
      className={clsx(
        "flex items-center justify-center focus:outline-none",
        styles.notap
      )}
      onClick={handleQuit}
    >
      <Quit />
    </button>
  );
}
