import { Spinner } from "flowbite-react";

export default function Loading() {
  return (
    <div className="flex justify-center bg-gray-900 items-center h-screen">
      <Spinner color="gray" />
    </div>
  );
}
