import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { SendIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { MESSAGES_DATA } from "@/polymet/data/messages-data";
import MessagesHeader from "@/polymet/components/messages-header";
import EmptyMessagesState from "@/polymet/components/empty-messages-state";

export default function ChatDetail() {
  const { chatId = "" } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatThread = MESSAGES_DATA.find((thread) => thread.id === chatId);

  // Scroll to bottom of messages when component mounts or messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatThread?.messages]);

  if (!chatThread) {
    return (
      <div className="flex flex-col h-full bg-white">
        <MessagesHeader showBackButton title="Chat" />

        <EmptyMessagesState />
      </div>
    );
  }

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // In a real app, this would send the message to an API
    console.log("Sending message:", newMessage);

    // Clear the input
    setNewMessage("");
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <MessagesHeader showBackButton title={chatThread.customerName} />

      {/* Messages area */}
      <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-gray-50">
        {chatThread.messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.sender === "technician" ? "justify-end" : "justify-start"
            )}
          >
            {message.sender === "customer" && (
              <Avatar className="h-8 w-8 mr-2 self-end mb-1">
                <AvatarImage
                  src={chatThread.customerAvatar}
                  alt={chatThread.customerName}
                />

                <AvatarFallback>
                  {chatThread.customerName.charAt(0)}
                </AvatarFallback>
              </Avatar>
            )}

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
                  "text-[10px] mt-1 text-right",
                  message.sender === "technician"
                    ? "text-pink-100"
                    : "text-gray-400"
                )}
              >
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
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
