interface StatsProps {
  amount: number;
  icon: React.ReactNode;
}

export default function Stats({ amount, icon }: StatsProps) {
  return (
    <div className="flex gap-2 items-center w-full bg-white/10 py-1.5 px-2 rounded-md">
      {icon}
      <p className="relative bottom-[1.5px] select-none">{amount}</p>
    </div>
  );
}
