import { useState } from "react";
import { cn } from "@/lib/utils";

interface SegmentedToggleProps {
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function SegmentedToggle({
  options,
  defaultValue,
  onChange,
}: SegmentedToggleProps) {
  const [selected, setSelected] = useState(defaultValue || options[0]);

  const handleSelect = (option: string) => {
    setSelected(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className="flex p-1 bg-gray-100 rounded-lg">
      {options.map((option) => (
        <button
          key={option}
          className={cn(
            "flex-1 py-1.5 px-3 text-xs font-medium rounded-md transition-all duration-200",
            selected === option
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          )}
          onClick={() => handleSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
