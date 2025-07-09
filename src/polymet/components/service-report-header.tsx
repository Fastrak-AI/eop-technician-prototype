import { CheckCircleIcon } from "lucide-react";

interface ServiceReportHeaderProps {
  customerName: string;
  address: string;
}

export default function ServiceReportHeader({
  customerName,
  address,
}: ServiceReportHeaderProps) {
  return (
    <div className="bg-[#FDF2F8] rounded-xl p-4 mb-4">
      <div className="flex items-center mb-3">
        <CheckCircleIcon
          className="h-6 w-6 text-[#D05F8E] mr-2"
          strokeWidth={1.5}
        />

        <h1 className="text-lg font-bold text-[#D05F8E]">Service Completed</h1>
      </div>

      <h2 className="text-base font-semibold mb-1">{customerName}</h2>
      <p className="text-sm text-gray-600">{address}</p>
    </div>
  );
}
