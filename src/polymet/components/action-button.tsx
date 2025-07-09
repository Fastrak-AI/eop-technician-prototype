import { cn } from "@/lib/utils";

interface ActionButtonProps {
  label: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function ActionButton({
  label,
  icon,
  variant = "primary",
  onClick,
  className,
  disabled = false,
}: ActionButtonProps) {
  const baseStyles =
    "flex items-center justify-center rounded-full py-3 px-5 font-medium text-sm transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100";

  const variantStyles = {
    primary: "bg-[#D05F8E] text-white shadow-sm",
    secondary: "bg-blue-500 text-white shadow-sm",
    outline: "bg-white border border-gray-200 text-gray-700",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
}
