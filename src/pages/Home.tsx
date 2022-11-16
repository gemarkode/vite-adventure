import { Link } from "react-router-dom";
import Button from "../components/core/Button";
import { useAppDispatch } from "../hooks";
import { setStage } from "../store/slices/stage";

export default function Home() {
  const dispatch = useAppDispatch();
  const startAdventuring = () => {
    dispatch(setStage("1"));
  };
  return (
    <div className="md:h-[300px] md:w-[600px] md:border flex flex-col items-center justify-center rounded-sm">
      <div className="flex items-center justify-center flex-col">
        <h1
          className="text-4xl font-bold bg-gradient-to-r text-transparent
        bg-clip-text from-gray-100 to-gray-500 animate-pulse"
        >
          Adventure
        </h1>
        <Link to="/start" className="w-full">
          <Button className="mt-1.5" fullWidth onClick={startAdventuring}>
            Start
          </Button>
        </Link>
      </div>
    </div>
  );
}
