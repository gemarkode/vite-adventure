import Quit from "./Quit";
import Sound from "./Sound";

export default function Controls() {
  return (
    <footer className="absolute bottom-4 flex gap-2 items-center justify-center bg-black/30 py-1 px-3 backdrop-blur-sm rounded-md">
      <Sound />
      <Quit />
    </footer>
  );
}
