import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center">
        <Avatar className="h-9 w-9 mr-2 border border-gray-100">
          <AvatarImage
            src="https://github.com/yusufhilmi.png"
            alt="Alex Rivera"
          />

          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
        <span className="font-medium text-sm">Alex Rivera</span>
      </div>

      <div className="flex items-center">
        <div className="mr-4">
          <span className="font-bold tracking-tight text-lg">CERV</span>
        </div>

        <div className="relative">
          <BellIcon className="h-6 w-6 text-gray-700" strokeWidth={1.5} />

          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
            2
          </span>
        </div>
      </div>
    </div>
  );
}
