import { useAppSelector } from "@/hooks";
import { selectPlayer } from "@/store/slices/player";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { SiDogecoin } from "react-icons/si";
import Stats from "./Stats";

export default function PlayerStatistics() {
  const { health, money, dabloons } = useAppSelector(selectPlayer);
  return (
    <aside className="p-3 w-full">
      <div className="flex gap-2 items-center w-full bg-white/10 py-1.5 px-2 rounded-md">
        <Stats amount={health} icon={<IoHeartOutline />} />
        <Stats amount={money} icon={<AiOutlineDollarCircle />} />
        <Stats amount={dabloons} icon={<SiDogecoin />} />
      </div>
    </aside>
  );
}
