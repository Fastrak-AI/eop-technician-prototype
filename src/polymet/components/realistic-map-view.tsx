import { MapPinIcon } from "lucide-react";

interface RealisticMapViewProps {
  address: string;
  className?: string;
}

export default function RealisticMapView({
  address,
  className,
}: RealisticMapViewProps) {
  return (
    <div className={`relative w-full rounded-xl overflow-hidden ${className}`}>
      {/* Map container */}
      <div className="relative w-full h-full">
        {/* Base map layer */}
        <div className="absolute inset-0 bg-[#E8ECEF]">
          {/* Streets */}
          {/* Horizontal streets */}
          <div className="absolute top-[15%] left-0 right-0 h-[3px] bg-white"></div>
          <div className="absolute top-[40%] left-0 right-[25%] h-[3px] bg-white"></div>
          <div className="absolute top-[65%] left-0 right-0 h-[3px] bg-white"></div>
          <div className="absolute bottom-[10%] left-0 right-0 h-[4px] bg-white"></div>

          {/* Vertical streets */}
          <div className="absolute left-[20%] top-0 bottom-0 w-[3px] bg-white"></div>
          <div className="absolute left-[50%] top-0 bottom-0 w-[3px] bg-white"></div>
          <div className="absolute left-[75%] top-[40%] bottom-[10%] w-[3px] bg-white"></div>

          {/* Street names */}
          <div className="absolute top-[8%] left-[40%] text-[8px] text-gray-600 font-light">
            Johnson St
          </div>
          <div className="absolute top-[35%] left-[25%] text-[8px] text-gray-600 font-light">
            Fleet Walk
          </div>
          <div className="absolute top-[60%] left-[30%] text-[8px] text-gray-600 font-light">
            Hudson Walk
          </div>
          <div className="absolute bottom-[5%] left-[40%] text-[8px] text-gray-600 font-light">
            Myrtle Ave
          </div>
          <div className="absolute left-[15%] top-[50%] text-[8px] text-gray-600 font-light rotate-90">
            Carlton Ave
          </div>
          <div className="absolute left-[45%] top-[50%] text-[8px] text-gray-600 font-light rotate-90">
            Cadman Plaza E
          </div>
          <div className="absolute right-[20%] top-[50%] text-[8px] text-gray-600 font-light rotate-90">
            Navy St
          </div>
          <div className="absolute right-[10%] top-[50%] text-[8px] text-gray-600 font-light rotate-90">
            GEDNEY St
          </div>

          {/* Building footprints */}
          <div className="absolute top-[18%] left-[5%] w-[12%] h-[20%] bg-[#F0F0F0] border border-gray-200"></div>
          <div className="absolute top-[18%] left-[25%] w-[20%] h-[20%] bg-[#F0F0F0] border border-gray-200"></div>
          <div className="absolute top-[18%] left-[55%] w-[15%] h-[20%] bg-[#F0F0F0] border border-gray-200"></div>
          <div className="absolute top-[18%] left-[78%] w-[15%] h-[20%] bg-[#F0F0F0] border border-gray-200"></div>

          {/* Avalon Fort Greene tower */}
          <div className="absolute top-[43%] left-[53%] w-[10%] h-[20%] bg-[#F0F0F0] border border-gray-200"></div>
          <div className="absolute top-[43%] left-[53%] w-[10%] h-[5%] text-[6px] text-center text-gray-500 flex items-center justify-center">
            Avalon Fort Greene
          </div>

          {/* Ingersoll Community Center */}
          <div className="absolute bottom-[15%] right-[15%] w-[25%] h-[15%] bg-[#F0F0F0] border border-gray-200 flex items-center justify-center">
            <span className="text-[6px] text-gray-500">
              Ingersoll Community Center
            </span>
          </div>

          {/* L-shaped building */}
          <div className="absolute top-[43%] left-[25%] w-[15%] h-[20%] bg-[#F0F0F0] border border-gray-200"></div>
          <div className="absolute top-[43%] left-[25%] w-[5%] h-[30%] bg-[#F0F0F0] border border-gray-200"></div>

          {/* Small POI icons and pins */}
          <div className="absolute top-[25%] left-[10%] w-[3%] h-[3%] rounded-full bg-blue-500 border border-blue-600"></div>
          <div className="absolute top-[25%] left-[30%] w-[3%] h-[3%] rounded-full bg-blue-500 border border-blue-600"></div>
          <div className="absolute top-[25%] left-[60%] w-[3%] h-[3%] rounded-full bg-blue-500 border border-blue-600"></div>
          <div className="absolute top-[50%] left-[30%] w-[3%] h-[3%] rounded-full bg-blue-500 border border-blue-600"></div>
          <div className="absolute top-[70%] left-[40%] w-[3%] h-[3%] rounded-full bg-blue-500 border border-blue-600"></div>
          <div className="absolute bottom-[20%] right-[25%] w-[3%] h-[3%] rounded-full bg-blue-500 border border-blue-600"></div>

          {/* POI labels (very small) */}
          <div className="absolute top-[29%] left-[8%] text-[6px] text-gray-700">
            Garden Nails & Spa
          </div>
          <div className="absolute top-[29%] left-[28%] text-[6px] text-gray-700">
            Pita Design
          </div>
          <div className="absolute top-[29%] left-[58%] text-[6px] text-gray-700">
            Johnsons Coffee
          </div>
          <div className="absolute bottom-[24%] right-[23%] text-[6px] text-gray-700">
            Ingersoll Laundry
          </div>

          {/* Larger pin for Avalon Fort Greene */}
          <div className="absolute top-[48%] left-[58%] w-[4%] h-[4%] rounded-full bg-blue-500 border-2 border-blue-600 z-10"></div>

          {/* Google My Maps logo */}
          <div className="absolute bottom-[2%] left-1/2 transform -translate-x-1/2 text-[6px] text-gray-500 font-medium">
            Google My Maps
          </div>
        </div>

        {/* Destination pin - this is the main address pin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative">
            <MapPinIcon
              className="h-8 w-8 text-[#D05F8E] drop-shadow-md"
              strokeWidth={2}
              fill="#FDF2F8"
            />

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-[#D05F8E] rounded-full border-2 border-white shadow-md"></div>
          </div>
        </div>

        {/* Current location blue dot */}
        <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow-md flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Address pill */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md z-30">
        <div className="flex items-center">
          <MapPinIcon
            className="h-4 w-4 text-[#D05F8E] mr-1.5"
            strokeWidth={2}
          />

          <span className="font-medium text-sm">{address}</span>
        </div>
      </div>
    </div>
  );
}
