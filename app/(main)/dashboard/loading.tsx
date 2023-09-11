import { Skeleton } from "@/components/ui/skeleton";
import { Guid } from "guid-typescript";

export default function Loading() {
  const myButtons = ["", "", ""];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {" "}
      {myButtons.map((_, index) => (
        <Skeleton
          key={index + "_" + Guid.create().toString()}
          className={"w-[200px] h-[100px] rounded-2xl"}
        />
      ))}
    </div>
  );
}
