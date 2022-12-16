import Button from "../components/core/Button";
import { useNavigate } from "react-router-dom";

export default function OnProgress() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-semibold">
        The next stage is currently on progress, stay tuned!
      </h1>
      <Button onClick={() => navigate("/")} className="mt-2">
        Back to start page
      </Button>
    </div>
  );
}
