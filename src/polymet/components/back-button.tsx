import { ChevronLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface BackButtonProps {
  to: string;
  label?: string;
}

export default function BackButton({ to, label = "Back" }: BackButtonProps) {
  return (
    <Link
      to={to}
      className="flex items-center text-[#D05F8E] font-medium text-sm"
    >
      <ChevronLeftIcon className="h-5 w-5 mr-0.5" strokeWidth={2} />

      {label}
    </Link>
  );
}
