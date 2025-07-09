import { MapPinIcon } from "lucide-react";

interface MapViewProps {
  address: string;
  className?: string;
}

export default function MapView({ address, className }: MapViewProps) {
  // In a real app, we would use coordinates to display the actual location
  // For this prototype, we'll use a static map image
  const mapSeed = address.replace(/\s+/g, "").toLowerCase();

  return (
    <div className={`relative w-full rounded-xl overflow-hidden ${className}`}>
      {/* Map image (placeholder) */}
      <div className="relative w-full h-full">
        <img
          src={`https://picsum.photos/seed/${mapSeed}/800/400`}
          alt={`Map view of ${address}`}
          className="w-full h-full object-cover"
        />

        {/* Semi-transparent overlay for better contrast with UI elements */}
        <div className="absolute inset-0 bg-black/5"></div>

        {/* Destination pin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <MapPinIcon
              className="h-10 w-10 text-[#D05F8E] drop-shadow-md"
              strokeWidth={2}
              fill="#FDF2F8"
            />

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-[#D05F8E] rounded-full border-2 border-white shadow-md"></div>
          </div>
        </div>

        {/* Current location blue dot (simulated) */}
        <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow-md flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Address pill */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
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
