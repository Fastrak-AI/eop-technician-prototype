import { useState } from "react";
import { MESSAGES_DATA } from "@/polymet/data/messages-data";
import MessagesHeader from "@/polymet/components/messages-header";
import MessageListItem from "@/polymet/components/message-list-item";
import EmptyMessagesState from "@/polymet/components/empty-messages-state";
import IosTabBar from "@/polymet/components/ios-tab-bar";

export default function MessagesList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMessages = MESSAGES_DATA.filter(
    (thread) =>
      thread.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-white">
      <MessagesHeader onSearch={setSearchQuery} />

      <div className="flex-1 overflow-y-auto">
        {filteredMessages.length > 0 ? (
          <div className="divide-y">
            {filteredMessages.map((thread) => (
              <MessageListItem
                key={thread.id}
                id={thread.id}
                customerName={thread.customerName}
                customerAvatar={thread.customerAvatar}
                lastMessage={thread.lastMessage}
                lastMessageTime={thread.lastMessageTime}
                unreadCount={thread.unreadCount}
              />
            ))}
          </div>
        ) : (
          <EmptyMessagesState />
        )}
      </div>

      <div className="mt-auto">
        <IosTabBar activeTab="Messages" />
      </div>
    </div>
  );
}
