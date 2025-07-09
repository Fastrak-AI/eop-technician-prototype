import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import BackButton from "@/polymet/components/back-button";

interface MessagesHeaderProps {
  showBackButton?: boolean;
  title?: string;
  onSearch?: (query: string) => void;
}

export default function MessagesHeader({
  showBackButton = false,
  title = "Messages",
  onSearch,
}: MessagesHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-100 p-3 sticky top-0 z-10">
      <div className="flex items-center gap-3">
        {showBackButton && <BackButton to="/messages" />}
        <h1 className="text-lg font-semibold flex-1">{title}</h1>
        {onSearch && (
          <div className="relative w-full max-w-xs">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />

            <Input
              placeholder="Search messages"
              className="pl-9 h-9 text-sm bg-gray-50"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
