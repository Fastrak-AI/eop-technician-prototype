import { CheckCircleIcon } from "lucide-react";

interface EnhancedServiceReportHeaderProps {
  customerName: string;
  address: string;
  date: string;
}

export default function EnhancedServiceReportHeader({
  customerName,
  address,
  date,
}: EnhancedServiceReportHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-[#FDF2F8] to-[#FCE7F3] rounded-xl p-5 mb-4 shadow-sm">
      <div className="flex items-center mb-3">
        <div className="bg-white/70 backdrop-blur-sm p-1.5 rounded-full mr-3">
          <CheckCircleIcon
            className="h-6 w-6 text-[#D05F8E]"
            strokeWidth={1.5}
          />
        </div>

        <h1 className="text-lg font-bold text-[#D05F8E]">Service Completed</h1>
      </div>

      <h2 className="text-base font-semibold mb-1">{customerName}</h2>
      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600">
        <p className="mr-2">{address}</p>
        <div className="hidden sm:block text-gray-400 mx-2">•</div>
        <p className="text-gray-500">{date}</p>
      </div>
    </div>
  );
}
