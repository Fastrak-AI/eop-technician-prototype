import { cn } from "@/lib/utils";
import { ClockIcon, StarIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface MetricTileProps {
  title: string;
  value: string | number;
  total?: string | number;
  type: "progress" | "stars" | "time";
  progress?: number;
  className?: string;
}

export default function MetricTile({
  title,
  value,
  total,
  type,
  progress = 0,
  className,
}: MetricTileProps) {
  return (
    <div
      className={cn("p-3 rounded-xl bg-white/80 backdrop-blur-sm", className)}
    >
      <h3 className="text-xs font-medium text-gray-500 mb-1">{title}</h3>

      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-baseline">
          <span className="text-lg font-bold">{value}</span>
          {total && (
            <span className="text-sm text-gray-500 ml-1">/ {total}</span>
          )}
        </div>
      </div>

      {type === "progress" && <Progress value={progress} className="h-1.5" />}

      {type === "stars" && (
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={cn(
                "w-3.5 h-3.5",
                i < Number(value)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              )}
              strokeWidth={1.5}
            />
          ))}
        </div>
      )}

      {type === "time" && (
        <div className="flex items-center">
          <div className="flex items-center bg-rose-100 text-rose-700 px-2 py-0.5 rounded-md text-xs">
            <ClockIcon className="w-3 h-3 mr-1" strokeWidth={1.5} />

            <span>{value}</span>
          </div>
        </div>
      )}
    </div>
  );
}
