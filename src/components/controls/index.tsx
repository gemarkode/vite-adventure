import Quit from "./Quit";
import Sound from "./Sound";

export default function Controls() {
  return (
    <footer className="absolute bottom-4 flex gap-2 items-center justify-center">
      <Sound />
      <Quit />
    </footer>
  );
}
