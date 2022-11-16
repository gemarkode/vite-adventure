import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectStage, setStage, reset } from "../store/slices/stage";
import Button from "../components/core/Button";
import { Link } from "react-router-dom";

export default function Stage() {
  const dispatch = useAppDispatch();
  const stage = useAppSelector(selectStage);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Boolean(stage.id)) {
      navigate("/");
    }
  }, [stage]);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl">{stage.title}</h1>
        <p>{stage?.description}</p>

        {stage.choices && (
          <div className="mt-4 flex gap-2 justify-center">
            {stage.choices?.map((choice, index) => (
              <Link to={`/stage/${choice.target}`} key={index}>
                <Button onClick={() => dispatch(setStage(choice.target))}>
                  {choice.text}
                </Button>
              </Link>
            ))}
          </div>
        )}
        {stage.ending && (
          <Button className="mt-4" onClick={() => dispatch(reset())}>
            Restart
          </Button>
        )}
      </div>
    </div>
  );
}
