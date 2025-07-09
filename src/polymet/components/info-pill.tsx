import { cn } from "@/lib/utils";

interface InfoPillProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
  variant?: "default" | "highlight";
  className?: string;
}

export default function InfoPill({
  label,
  value,
  icon,
  variant = "default",
  className,
}: InfoPillProps) {
  return (
    <div
      className={cn(
        "flex items-center px-4 py-2.5 rounded-full",
        variant === "default" ? "bg-gray-50" : "bg-[#FDF2F8]",
        className
      )}
    >
      {icon && <div className="mr-2.5">{icon}</div>}
      <div className="flex flex-col">
        <span className="text-xs text-gray-500">{label}</span>
        <span
          className={cn(
            "text-sm font-medium",
            variant === "highlight" && "text-[#D05F8E]"
          )}
        >
          {value}
        </span>
      </div>
    </div>
  );
}
