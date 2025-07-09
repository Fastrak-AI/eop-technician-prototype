import { ClockIcon } from "lucide-react";

interface EnhancedServiceTimeCardProps {
  checkInTime: Date;
  checkOutTime: Date;
}

export default function EnhancedServiceTimeCard({
  checkInTime,
  checkOutTime,
}: EnhancedServiceTimeCardProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDuration = (start: Date, end: Date) => {
    const durationMs = end.getTime() - start.getTime();
    const minutes = Math.floor(durationMs / 60000);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
      return `${remainingMinutes}m`;
    }

    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 mb-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center mb-4">
        <div className="bg-gray-100 p-2 rounded-full mr-3">
          <ClockIcon className="h-5 w-5 text-gray-500" strokeWidth={1.5} />
        </div>

        <h3 className="text-base font-medium">Service Time</h3>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-500 mb-1">Check In</p>
          <p className="text-sm font-medium">{formatTime(checkInTime)}</p>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-500 mb-1">Check Out</p>
          <p className="text-sm font-medium">{formatTime(checkOutTime)}</p>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-500 mb-1">Duration</p>
          <p className="text-sm font-medium">
            {formatDuration(checkInTime, checkOutTime)}
          </p>
        </div>
      </div>
    </div>
  );
}
