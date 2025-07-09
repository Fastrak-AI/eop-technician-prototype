import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChecklistItemProps {
  id: string;
  label: string;
  initialChecked?: boolean;
  onToggle?: (id: string, checked: boolean) => void;
}

export default function ChecklistItem({
  id,
  label,
  initialChecked = false,
  onToggle,
}: ChecklistItemProps) {
  const [checked, setChecked] = useState(initialChecked);

  const handleToggle = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);
    if (onToggle) {
      onToggle(id, newCheckedState);
    }
  };

  return (
    <div
      className="flex items-center py-3 border-b border-gray-100"
      onClick={handleToggle}
    >
      <div
        className={cn(
          "w-6 h-6 rounded-full flex items-center justify-center mr-3 border transition-colors",
          checked ? "bg-[#D05F8E] border-[#D05F8E]" : "bg-white border-gray-300"
        )}
      >
        {checked && <Check className="h-4 w-4 text-white" />}
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
}
