import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectStage, reset } from "../store/slices/stage";
import Button from "../components/core/Button";
import Action from "../components/stage/Action";
import { useParams } from "react-router-dom";
import { getStory } from "../storyline";

export default function Stage() {
  const dispatch = useAppDispatch();
  const stage = useAppSelector(selectStage);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!Boolean(stage.id)) {
      navigate("/");
    }

    if (stage.id !== id) {
      const story = getStory(String(id));
      if (!story) {
        navigate("/on-progress");
      }
    }
  }, [stage.id, id, navigate]);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">{stage.title}</h1>
        <p>{stage?.description}</p>

        {stage.choices && (
          <div className="mt-4 flex gap-2 justify-center">
            {stage.choices?.map((choice, index) => (
              <Action key={index} target={choice.target} text={choice.text} />
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
