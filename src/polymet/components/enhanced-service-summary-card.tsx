import { SparklesIcon, CheckIcon } from "lucide-react";

interface ChecklistItem {
  task: string;
  completed: boolean;
}

interface EnhancedServiceSummaryCardProps {
  summary: string;
  checklistItems: ChecklistItem[];
}

export default function EnhancedServiceSummaryCard({
  summary,
  checklistItems,
}: EnhancedServiceSummaryCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 mb-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center mb-4">
        <div className="bg-[#FDF2F8] p-2 rounded-full mr-3">
          <SparklesIcon className="h-5 w-5 text-[#D05F8E]" strokeWidth={1.5} />
        </div>
        <h3 className="text-base font-medium">AI Service Summary</h3>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed mb-4">{summary}</p>

      {checklistItems.length > 0 && (
        <div className="mt-4 border-t border-gray-100 pt-4">
          <h4 className="text-sm font-medium mb-3">Service Checklist</h4>
          <ul className="space-y-2">
            {checklistItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-gray-700"
              >
                <div
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-2 ${
                    item.completed ? "bg-green-500" : "bg-gray-200"
                  }`}
                >
                  {item.completed && (
                    <CheckIcon className="h-3 w-3 text-white" strokeWidth={3} />
                  )}
                </div>
                <span className={item.completed ? "" : "text-gray-400"}>
                  {item.task}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
