import { Quit } from "../icons";
import { useNavigate } from "react-router-dom";

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
      className="flex items-center justify-center focus:outline-none"
      onClick={handleQuit}
    >
      <Quit />
    </button>
  );
}
