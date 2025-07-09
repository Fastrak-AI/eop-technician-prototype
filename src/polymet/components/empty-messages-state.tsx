import { MessageSquareIcon } from "lucide-react";

export default function EmptyMessagesState() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="bg-gray-100 p-4 rounded-full mb-4">
        <MessageSquareIcon className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">
        No messages yet
      </h3>
      <p className="text-sm text-gray-500 max-w-xs">
        When customers message you about their pool service, conversations will
        appear here.
      </p>
    </div>
  );
}
