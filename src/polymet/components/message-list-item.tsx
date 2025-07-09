import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface MessageListItemProps {
  id: string;
  customerName: string;
  customerAvatar?: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  isActive?: boolean;
}

export default function MessageListItem({
  id,
  customerName,
  customerAvatar,
  lastMessage,
  lastMessageTime,
  unreadCount,
  isActive = false,
}: MessageListItemProps) {
  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffInDays === 0) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (diffInDays === 1) {
      return "Yesterday";
    } else if (diffInDays < 7) {
      return date.toLocaleDateString([], { weekday: "short" });
    } else {
      return date.toLocaleDateString([], {
        month: "short",
        day: "numeric",
      });
    }
  };

  return (
    <Link to={`/messages/${id}`}>
      <div
        className={cn(
          "flex items-center p-3 hover:bg-gray-50 transition-colors",
          isActive && "bg-gray-50"
        )}
      >
        <Avatar className="h-12 w-12 mr-3">
          <AvatarImage src={customerAvatar} alt={customerName} />

          <AvatarFallback>{customerName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-sm truncate">{customerName}</h3>
            <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
              {formatTime(lastMessageTime)}
            </span>
          </div>
          <p className="text-sm text-gray-500 truncate">{lastMessage}</p>
        </div>
        {unreadCount > 0 && (
          <Badge
            variant="default"
            className="ml-2 bg-[#D05F8E] hover:bg-[#D05F8E] text-white rounded-full h-5 min-w-5 flex items-center justify-center px-1.5"
          >
            {unreadCount}
          </Badge>
        )}
      </div>
    </Link>
  );
}
