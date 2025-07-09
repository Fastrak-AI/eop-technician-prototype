import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface BeforeAfterPhotosProps {
  beforeImages: string[];
  afterImages: string[];
}

export default function BeforeAfterPhotos({
  beforeImages,
  afterImages,
}: BeforeAfterPhotosProps) {
  const [activeTab, setActiveTab] = useState<"before" | "after">("after");
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = activeTab === "before" ? beforeImages : afterImages;

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 mb-4 shadow-sm">
      <h3 className="text-sm font-medium mb-3">Service Photos</h3>

      <div className="flex border border-gray-200 rounded-lg mb-3 overflow-hidden">
        <button
          className={`flex-1 py-2 text-sm font-medium ${
            activeTab === "before"
              ? "bg-gray-100 text-gray-900"
              : "bg-white text-gray-500"
          }`}
          onClick={() => {
            setActiveTab("before");
            setCurrentIndex(0);
          }}
        >
          Before
        </button>
        <button
          className={`flex-1 py-2 text-sm font-medium ${
            activeTab === "after"
              ? "bg-gray-100 text-gray-900"
              : "bg-white text-gray-500"
          }`}
          onClick={() => {
            setActiveTab("after");
            setCurrentIndex(0);
          }}
        >
          After
        </button>
      </div>

      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-2">
        {images.length > 0 ? (
          <img
            src={images[currentIndex]}
            alt={`${activeTab} image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No images available
          </div>
        )}

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full ${
                currentIndex === 0 ? "opacity-50" : "opacity-90"
              }`}
            >
              <ChevronLeftIcon className="h-4 w-4" strokeWidth={2} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
              className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full ${
                currentIndex === images.length - 1 ? "opacity-50" : "opacity-90"
              }`}
            >
              <ChevronRightIcon className="h-4 w-4" strokeWidth={2} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full ${
                index === currentIndex
                  ? "w-4 bg-[#D05F8E]"
                  : "w-1.5 bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
