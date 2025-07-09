import React from "react";

interface IPhoneFrameProps {
  children: React.ReactNode;
}

export default function IPhoneFrame({ children }: IPhoneFrameProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-[390px] h-[844px] bg-black rounded-[55px] shadow-xl overflow-hidden border-8 border-black">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[160px] h-[34px] bg-black rounded-b-3xl z-50"></div>

        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-[48px] px-8 flex justify-between items-center z-40">
          <div className="text-white text-xs font-medium">9:41</div>
          <div className="flex items-center space-x-2">
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9.5H2.5V2.5H1V9.5ZM4.75 9.5H6.25V2.5H4.75V9.5ZM11.75 2.5V9.5H13.25V2.5H11.75ZM8.5 9.5H10V2.5H8.5V9.5ZM15.5 9.5H17V2.5H15.5V9.5ZM0 12H18V0H0V12Z"
                fill="white"
              />
            </svg>
            <svg
              width="17"
              height="12"
              viewBox="0 0 17 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 2.5C10.2 2.5 11.75 3.34 12.77 4.61L14.35 3.03C12.94 1.36 10.85 0.25 8.5 0.25C6.15 0.25 4.06 1.36 2.65 3.03L4.23 4.61C5.25 3.34 6.8 2.5 8.5 2.5Z"
                fill="white"
              />

              <path
                d="M8.5 8C9.05 8 9.57 7.82 10 7.5L11.38 8.88C10.57 9.59 9.57 10 8.5 10C7.43 10 6.43 9.59 5.62 8.88L7 7.5C7.43 7.82 7.95 8 8.5 8Z"
                fill="white"
              />

              <path
                d="M8.5 5.25C8.91 5.25 9.25 5.59 9.25 6C9.25 6.41 8.91 6.75 8.5 6.75C8.09 6.75 7.75 6.41 7.75 6C7.75 5.59 8.09 5.25 8.5 5.25Z"
                fill="white"
              />

              <path
                d="M8.5 4.25C7.53 4.25 6.75 5.03 6.75 6C6.75 6.97 7.53 7.75 8.5 7.75C9.47 7.75 10.25 6.97 10.25 6C10.25 5.03 9.47 4.25 8.5 4.25ZM8.5 7C7.95 7 7.5 6.55 7.5 6C7.5 5.45 7.95 5 8.5 5C9.05 5 9.5 5.45 9.5 6C9.5 6.55 9.05 7 8.5 7Z"
                fill="white"
              />
            </svg>
            <div className="w-[25px] h-[12px] rounded-[3px] border border-white relative">
              <div className="absolute top-[2px] bottom-[2px] left-[2px] right-[5px] bg-white rounded-[1px]"></div>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[134px] h-[5px] bg-white rounded-full z-50"></div>

        {/* Content - Make sure content is contained within the frame */}
        <div className="absolute inset-0 bg-white overflow-hidden pt-[48px] pb-[34px]">
          <div className="h-full overflow-y-auto relative">{children}</div>
        </div>
      </div>
    </div>
  );
}
