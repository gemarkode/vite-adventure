import Items from "./items";
import { useAppSelector } from "@/hooks";
import { selectExpand } from "@/store/slices/inventory";
import clsx from "clsx";
import PlayerStatistics from "./player-statistics";

export default function Inventory() {
  const expand = useAppSelector(selectExpand);
  return (
    <aside className="overflow-hidden h-full w-full flex items-center justify-center flex-col">
      <PlayerStatistics />
      <Items />
    </aside>
  );
}
