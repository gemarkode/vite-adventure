import { useAppSelector } from "@/hooks";
import { selectItems } from "@/store/slices/inventory";

export default function Items() {
  const items = useAppSelector(selectItems);

  return (
    <ul className="flex-1">
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}

      {items.length === 0 && (
        <li className="text-center text-gray-400">No items</li>
      )}
    </ul>
  );
}
