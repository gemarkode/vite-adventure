import { Quit } from "../icons";
import { useNavigate } from "react-router-dom";
import styles from "./notap.module.css";
import clsx from "clsx";
import { useAppDispatch } from "../../hooks";
import { reset } from "../../store/slices/stage";

export default function Exit() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleQuit = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    dispatch(reset());
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
