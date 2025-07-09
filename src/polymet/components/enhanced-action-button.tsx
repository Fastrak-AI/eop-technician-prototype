import { ReactNode } from "react";

interface EnhancedActionButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function EnhancedActionButton({
  label,
  variant = "primary",
  icon,
  className = "",
  onClick,
}: EnhancedActionButtonProps) {
  const baseClasses =
    "flex items-center justify-center rounded-xl py-3.5 px-4 font-medium text-sm transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-[#D05F8E] text-white hover:bg-[#C04F7E] focus:ring-[#D05F8E]/50",
    secondary:
      "bg-[#F9D2E4] text-[#D05F8E] hover:bg-[#F7C5DD] focus:ring-[#D05F8E]/30",
    outline:
      "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 focus:ring-gray-200",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
}
