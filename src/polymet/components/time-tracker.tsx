import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimeTrackerProps {
  checkInTime?: Date | null;
  checkOutTime?: Date | null;
  onCheckIn?: () => void;
  onCheckOut?: () => void;
}

export default function TimeTracker({
  checkInTime: initialCheckInTime = null,
  checkOutTime: initialCheckOutTime = null,
  onCheckIn,
  onCheckOut,
}: TimeTrackerProps) {
  const [checkInTime, setCheckInTime] = useState<Date | null>(
    initialCheckInTime
  );
  const [checkOutTime, setCheckOutTime] = useState<Date | null>(
    initialCheckOutTime
  );
  const [elapsedTime, setElapsedTime] = useState<string>("00:00");

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (checkInTime && !checkOutTime) {
      interval = setInterval(() => {
        const now = new Date();
        const elapsed = now.getTime() - checkInTime.getTime();

        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);

        setElapsedTime(
          `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [checkInTime, checkOutTime]);

  const handleCheckIn = () => {
    const now = new Date();
    setCheckInTime(now);
    if (onCheckIn) onCheckIn();
  };

  const handleCheckOut = () => {
    const now = new Date();
    setCheckOutTime(now);
    if (onCheckOut) onCheckOut();
  };

  const formatTime = (date: Date | null) => {
    if (!date) return "--:--";
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="p-3 border-b border-gray-100">
        <h3 className="text-sm font-medium">Service Time Tracking</h3>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-gray-500 mr-2" />

            <span className="text-sm">Check-in Time:</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-medium mr-2">
              {formatTime(checkInTime)}
            </span>
            {!checkInTime && (
              <button
                onClick={handleCheckIn}
                className="text-xs bg-[#D05F8E] text-white py-1 px-2 rounded-full"
              >
                Check In
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-gray-500 mr-2" />

            <span className="text-sm">Check-out Time:</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-medium mr-2">
              {formatTime(checkOutTime)}
            </span>
            {checkInTime && !checkOutTime && (
              <button
                onClick={handleCheckOut}
                className="text-xs bg-[#D05F8E] text-white py-1 px-2 rounded-full"
              >
                Check Out
              </button>
            )}
          </div>
        </div>

        <div
          className={cn(
            "flex items-center justify-center p-2 rounded-lg",
            checkInTime && !checkOutTime ? "bg-[#FDF2F8]" : "bg-gray-50"
          )}
        >
          <span
            className={cn(
              "text-lg font-semibold",
              checkInTime && !checkOutTime ? "text-[#D05F8E]" : "text-gray-500"
            )}
          >
            {checkInTime && checkOutTime
              ? `Total: ${formatElapsedTime(checkInTime, checkOutTime)}`
              : `Elapsed: ${elapsedTime}`}
          </span>
        </div>
      </div>
    </div>
  );
}

function formatElapsedTime(start: Date, end: Date): string {
  const elapsed = end.getTime() - start.getTime();

  const minutes = Math.floor(elapsed / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);

  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
