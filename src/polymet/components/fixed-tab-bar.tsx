import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  HomeIcon,
  MessageCircleIcon,
  BarChartIcon,
  SettingsIcon,
} from "lucide-react";

interface FixedTabBarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function FixedTabBar({
  activeTab: propActiveTab,
  onTabChange,
}: FixedTabBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(propActiveTab || "Jobs");

  // Update active tab based on current route
  useEffect(() => {
    if (location.pathname.includes("/jobs") || location.pathname === "/") {
      setActiveTab("Jobs");
    } else if (location.pathname.includes("/messages")) {
      setActiveTab("Messages");
    } else if (location.pathname.includes("/performance")) {
      setActiveTab("Performance");
    } else if (location.pathname.includes("/settings")) {
      setActiveTab("Settings");
    }
  }, [location.pathname]);

  const tabs = [
    {
      id: "Jobs",
      icon: HomeIcon,
      path: "/jobs",
    },
    {
      id: "Messages",
      icon: MessageCircleIcon,
      path: "/messages",
    },
    {
      id: "Performance",
      icon: BarChartIcon,
      path: "/performance",
    },
    {
      id: "Settings",
      icon: SettingsIcon,
      path: "/settings",
    },
  ];

  const handleTabPress = (tabId: string, path: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full max-w-[485px] mx-auto bg-white/90 backdrop-blur-md border-t border-gray-100 flex items-center justify-around px-6 pt-2 pb-8 z-50 shadow-[0_-1px_0_rgba(0,0,0,0.05)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const IconComponent = tab.icon;

        return (
          <Link
            key={tab.id}
            to={tab.path}
            className="flex flex-col items-center justify-center"
            onClick={() => handleTabPress(tab.id, tab.path)}
          >
            <div className="relative mb-1 transition-all duration-200 ease-in-out">
              <IconComponent
                size={22}
                strokeWidth={isActive ? 2.2 : 1.8}
                className={cn(
                  "transition-all duration-200",
                  isActive ? "text-[#D05F8E]" : "text-gray-500"
                )}
              />
            </div>
            <span
              className={cn(
                "text-[10px] font-medium transition-all duration-200",
                isActive ? "text-[#D05F8E]" : "text-gray-500"
              )}
            >
              {tab.id}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
