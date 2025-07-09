import { TrendingUpIcon } from "lucide-react";

interface EnhancedHomeScoreCardProps {
  previousScore: number;
  currentScore: number;
}

export default function EnhancedHomeScoreCard({
  previousScore,
  currentScore,
}: EnhancedHomeScoreCardProps) {
  const scoreDifference = currentScore - previousScore;
  const percentageIncrease = ((scoreDifference / previousScore) * 100).toFixed(
    0
  );

  // Calculate the progress percentage for the visual bar
  const progressPercentage = (currentScore / 100) * 100;

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 mb-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-green-50 p-2 rounded-full mr-3">
            <TrendingUpIcon
              className="h-5 w-5 text-green-600"
              strokeWidth={1.5}
            />
          </div>
          <h3 className="text-base font-medium">Home Score</h3>
        </div>

        <div className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
          <TrendingUpIcon className="h-3 w-3 mr-1" strokeWidth={2} />

          <span>+{percentageIncrease}%</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-xs text-gray-500 block mb-1">Previous</span>
          <span className="text-xl font-semibold">{previousScore}</span>
        </div>

        <div className="h-8 w-8 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M14 6L20 12L14 18"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="text-right">
          <span className="text-xs text-gray-500 block mb-1">Current</span>
          <span className="text-xl font-semibold text-[#D05F8E]">
            {currentScore}
          </span>
        </div>
      </div>

      <div className="relative h-2.5 bg-gray-100 rounded-full mb-3 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D05F8E] to-[#E879A3] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <p className="text-xs text-gray-500">
        Pool condition improved by{" "}
        <span className="font-medium text-green-600">
          {scoreDifference} points
        </span>
      </p>
    </div>
  );
}
