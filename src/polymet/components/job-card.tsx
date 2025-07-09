import { MapPinIcon, ClockIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface JobCardProps {
  id?: string | number;
  address: string;
  date: string;
  timeWindow: string;
  status: "Pending" | "In Progress" | "Completed" | "Cancelled";
  onPress?: () => void;
}

export default function JobCard({
  id = "1",
  address,
  date,
  timeWindow,
  status = "Pending",
  onPress,
}: JobCardProps) {
  return (
    <Link
      to={`/jobs/${id}`}
      className="block relative mx-4 mb-3 rounded-xl bg-[#D05F8E] border border-[#D05F8E] shadow-sm overflow-hidden transition-all active:translate-y-0.5 active:shadow-none"
      onClick={onPress}
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <span className="text-white font-semibold text-xs tracking-wide border-t border-b border-white px-1">
                CERV
              </span>
              <span className="mx-1 text-xs text-white">|</span>
              <span className="text-white font-medium text-xs">POOL</span>
            </div>
          </div>

          <div className="bg-white px-2.5 py-1 rounded-full text-xs font-normal text-gray-600 border border-gray-200">
            {status}
          </div>
        </div>

        <div className="text-xs text-white mb-1.5">{date}</div>

        <div className="flex items-start mb-2">
          <MapPinIcon
            className="w-4 h-4 text-white mt-0.5 mr-1.5"
            strokeWidth={1.5}
          />

          <span className="text-sm font-medium text-white">{address}</span>
        </div>

        <div className="flex items-center text-xs text-white">
          <ClockIcon className="w-3.5 h-3.5 mr-1.5" strokeWidth={1.5} />

          <span>{timeWindow}</span>
        </div>
      </div>
    </Link>
  );
}
