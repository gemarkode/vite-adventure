import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Start() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/stage/1");
  }, []);

  return <></>;
}
