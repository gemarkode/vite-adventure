import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleExpand, selectExpand } from "@/store/slices/inventory";
import clsx from "clsx";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

export default function Controls() {
  const expand = useAppSelector(selectExpand);
  const dispatch = useAppDispatch();

  return (
    <div className="absolute top-2 -right-10">
      <div
        onClick={() => dispatch(toggleExpand())}
        className={clsx(
          "p-2 rounded-md cursor-pointer",
          expand ? "bg-gray-800" : "bg-black/10",
          "transition-colors duration-300"
        )}
      >
        <IoChevronForwardCircleOutline
          className={clsx(expand && "rotate-180")}
        />
      </div>
    </div>
  );
}
