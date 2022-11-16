import { PulseLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center bg-gray-900 items-center h-screen">
      <PulseLoader color="#FFF" />
    </div>
  );
}
