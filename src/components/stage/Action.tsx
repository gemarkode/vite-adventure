import Button from "../core/Button";
import { useAppDispatch } from "../../hooks";
import { setStage } from "../../store/slices/stage";

interface ActionProps {
  target: string;
  text: string;
}

export default function Action({ target, text }: ActionProps) {
  const dispatch = useAppDispatch();

  const handleNext = () => {
    dispatch(setStage(target));
  };

  return (
    <div>
      <Button onClick={handleNext}>{text}</Button>
    </div>
  );
}
