import { SparklesIcon } from "lucide-react";

interface ServiceSummaryCardProps {
  summary: string;
}

export default function ServiceSummaryCard({
  summary,
}: ServiceSummaryCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 mb-4 shadow-sm">
      <div className="flex items-center mb-3">
        <SparklesIcon
          className="h-5 w-5 text-[#D05F8E] mr-2"
          strokeWidth={1.5}
        />

        <h3 className="text-sm font-medium">AI Service Summary</h3>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
        {summary}
      </p>
    </div>
  );
}
