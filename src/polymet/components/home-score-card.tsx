import { TrendingUpIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface HomeScoreCardProps {
  previousScore: number;
  currentScore: number;
}

export default function HomeScoreCard({
  previousScore,
  currentScore,
}: HomeScoreCardProps) {
  const scoreDifference = currentScore - previousScore;
  const percentageIncrease = ((scoreDifference / previousScore) * 100).toFixed(
    0
  );

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 mb-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium">Home Score</h3>
        <div className="flex items-center bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs">
          <TrendingUpIcon className="h-3 w-3 mr-1" strokeWidth={2} />

          <span>+{percentageIncrease}%</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500">Previous</span>
        <span className="text-xs text-gray-500">Current</span>
      </div>

      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-semibold">{previousScore}</span>
        <span className="text-lg font-semibold text-[#D05F8E]">
          {currentScore}
        </span>
      </div>

      <Progress value={currentScore} max={100} className="h-2 mb-1" />

      <p className="text-xs text-gray-500 mt-2">
        Pool condition improved by {scoreDifference} points
      </p>
    </div>
  );
}
