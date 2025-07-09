import { cn } from "@/lib/utils";

interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function TabButton({ label, active, onClick }: TabButtonProps) {
  return (
    <button
      className={cn(
        "flex-1 py-2.5 text-sm font-medium transition-colors",
        active
          ? "text-[#D05F8E] border-b-2 border-[#D05F8E]"
          : "text-gray-500 border-b border-gray-200"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
