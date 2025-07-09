export interface Message {
  id: string;
  text: string;
  sender: "customer" | "technician";
  timestamp: Date;
}

export interface ChatThread {
  id: string;
  customerName: string;
  customerAvatar?: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  messages: Message[];
}

export const MESSAGES_DATA: ChatThread[] = [
  {
    id: "1",
    customerName: "John Smith",
    customerAvatar: "https://github.com/furkanksl.png",
    lastMessage: "Great! The gate code is 1234 if you need it.",
    lastMessageTime: new Date(Date.now() - 20 * 60000), // 20 minutes ago
    unreadCount: 0,
    messages: [
      {
        id: "1-1",
        text: "Hi! I'm wondering when you'll arrive for the pool service?",
        sender: "customer",
        timestamp: new Date(Date.now() - 30 * 60000), // 30 minutes ago
      },
      {
        id: "1-2",
        text: "I'll be there in about 20 minutes. Just finishing up my previous appointment.",
        sender: "technician",
        timestamp: new Date(Date.now() - 25 * 60000), // 25 minutes ago
      },
      {
        id: "1-3",
        text: "Great! The gate code is 1234 if you need it.",
        sender: "customer",
        timestamp: new Date(Date.now() - 20 * 60000), // 20 minutes ago
      },
    ],
  },
  {
    id: "2",
    customerName: "Sarah Johnson",
    customerAvatar: "https://github.com/yahyabedirhan.png",
    lastMessage: "Thank you for the service today! The pool looks great.",
    lastMessageTime: new Date(Date.now() - 3 * 3600000), // 3 hours ago
    unreadCount: 2,
    messages: [
      {
        id: "2-1",
        text: "Hello, just wanted to confirm our appointment for today at 2pm.",
        sender: "customer",
        timestamp: new Date(Date.now() - 6 * 3600000), // 6 hours ago
      },
      {
        id: "2-2",
        text: "Yes, I'll be there at 2pm as scheduled.",
        sender: "technician",
        timestamp: new Date(Date.now() - 5.5 * 3600000), // 5.5 hours ago
      },
      {
        id: "2-3",
        text: "Perfect, see you then!",
        sender: "customer",
        timestamp: new Date(Date.now() - 5 * 3600000), // 5 hours ago
      },
      {
        id: "2-4",
        text: "I've completed the service. Your pH levels were a bit high, so I adjusted them. Everything else looks good!",
        sender: "technician",
        timestamp: new Date(Date.now() - 3.5 * 3600000), // 3.5 hours ago
      },
      {
        id: "2-5",
        text: "Thank you for the service today! The pool looks great.",
        sender: "customer",
        timestamp: new Date(Date.now() - 3 * 3600000), // 3 hours ago
      },
    ],
  },
  {
    id: "3",
    customerName: "Michael Brown",
    customerAvatar: "https://github.com/kdrnp.png",
    lastMessage: "I'll leave the side gate unlocked for you.",
    lastMessageTime: new Date(Date.now() - 1 * 86400000), // 1 day ago
    unreadCount: 0,
    messages: [
      {
        id: "3-1",
        text: "Hi, I have a pool service scheduled for tomorrow morning.",
        sender: "customer",
        timestamp: new Date(Date.now() - 1.5 * 86400000), // 1.5 days ago
      },
      {
        id: "3-2",
        text: "That's correct. I'll be there between 9-10am.",
        sender: "technician",
        timestamp: new Date(Date.now() - 1.2 * 86400000), // 1.2 days ago
      },
      {
        id: "3-3",
        text: "I'll leave the side gate unlocked for you.",
        sender: "customer",
        timestamp: new Date(Date.now() - 1 * 86400000), // 1 day ago
      },
    ],
  },
  {
    id: "4",
    customerName: "Emily Davis",
    customerAvatar: "https://github.com/denizbuyuktas.png",
    lastMessage: "Is there anything I need to do before your visit?",
    lastMessageTime: new Date(Date.now() - 2 * 86400000), // 2 days ago
    unreadCount: 1,
    messages: [
      {
        id: "4-1",
        text: "Hello, I just scheduled a pool service for next week.",
        sender: "customer",
        timestamp: new Date(Date.now() - 3 * 86400000), // 3 days ago
      },
      {
        id: "4-2",
        text: "Great! I have you down for next Tuesday at 11am.",
        sender: "technician",
        timestamp: new Date(Date.now() - 2.5 * 86400000), // 2.5 days ago
      },
      {
        id: "4-3",
        text: "Is there anything I need to do before your visit?",
        sender: "customer",
        timestamp: new Date(Date.now() - 2 * 86400000), // 2 days ago
      },
    ],
  },
  {
    id: "5",
    customerName: "Robert Wilson",
    customerAvatar: "https://github.com/yusufhilmi.png",
    lastMessage:
      "I noticed the chlorine level seems low. Can you check that specifically?",
    lastMessageTime: new Date(Date.now() - 4 * 86400000), // 4 days ago
    unreadCount: 0,
    messages: [
      {
        id: "5-1",
        text: "Hi there, just confirming my regular service for this Friday.",
        sender: "customer",
        timestamp: new Date(Date.now() - 5 * 86400000), // 5 days ago
      },
      {
        id: "5-2",
        text: "Yes, we have you on the schedule for Friday between 1-2pm.",
        sender: "technician",
        timestamp: new Date(Date.now() - 4.8 * 86400000), // 4.8 days ago
      },
      {
        id: "5-3",
        text: "I noticed the chlorine level seems low. Can you check that specifically?",
        sender: "customer",
        timestamp: new Date(Date.now() - 4 * 86400000), // 4 days ago
      },
    ],
  },
];
