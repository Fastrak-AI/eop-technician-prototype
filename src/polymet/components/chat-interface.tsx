import { useState, useEffect } from "react";
import { SendIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "customer" | "technician";
  timestamp: Date;
}

interface ChatInterfaceProps {
  customerName: string;
  customerAvatar?: string;
  initialMessages?: Message[];
}

export default function ChatInterface({
  customerName,
  customerAvatar,
  initialMessages = [],
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  // Update messages when initialMessages prop changes
  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "technician",
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
      {/* Chat header */}
      <div className="flex items-center p-3 bg-white border-b border-gray-100">
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage src={customerAvatar} alt={customerName} />

          <AvatarFallback>{customerName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-sm font-medium">{customerName}</h3>
          <p className="text-xs text-gray-500">Customer</p>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 p-3 space-y-3 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-gray-400">No messages yet</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.sender === "technician"
                  ? "justify-end"
                  : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                  message.sender === "technician"
                    ? "bg-[#D05F8E] text-white rounded-tr-none"
                    : "bg-white border border-gray-200 rounded-tl-none"
                )}
              >
                <p>{message.text}</p>
                <p
                  className={cn(
                    "text-[10px] mt-1",
                    message.sender === "technician"
                      ? "text-pink-100"
                      : "text-gray-400"
                  )}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Message input */}
      <div className="p-3 bg-white border-t border-gray-100">
        <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Message..."
            className="flex-1 bg-transparent outline-none text-sm"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />

          <button
            onClick={handleSendMessage}
            disabled={newMessage.trim() === ""}
            className={cn(
              "ml-2 p-1.5 rounded-full",
              newMessage.trim() !== ""
                ? "bg-[#D05F8E] text-white"
                : "bg-gray-200 text-gray-400"
            )}
          >
            <SendIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
