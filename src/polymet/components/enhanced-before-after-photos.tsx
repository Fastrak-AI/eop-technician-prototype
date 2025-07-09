import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface EnhancedBeforeAfterPhotosProps {
  beforeImages: string[];
  afterImages: string[];
}

export default function EnhancedBeforeAfterPhotos({
  beforeImages,
  afterImages,
}: EnhancedBeforeAfterPhotosProps) {
  const [activeTab, setActiveTab] = useState<"before" | "after">("after");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = activeTab === "before" ? beforeImages : afterImages;

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setIsTransitioning(true);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsTransitioning(true);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTabChange = (tab: "before" | "after") => {
    if (tab !== activeTab) {
      setIsTransitioning(true);
      setActiveTab(tab);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 mb-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center mb-4">
        <h3 className="text-base font-medium">Service Photos</h3>
      </div>

      <div className="flex border border-gray-200 rounded-lg mb-4 overflow-hidden">
        <button
          className={`flex-1 py-2.5 text-sm font-medium transition-colors duration-200 ${
            activeTab === "before"
              ? "bg-gray-100 text-gray-900"
              : "bg-white text-gray-500 hover:bg-gray-50"
          }`}
          onClick={() => handleTabChange("before")}
        >
          Before
        </button>
        <button
          className={`flex-1 py-2.5 text-sm font-medium transition-colors duration-200 ${
            activeTab === "after"
              ? "bg-gray-100 text-gray-900"
              : "bg-white text-gray-500 hover:bg-gray-50"
          }`}
          onClick={() => handleTabChange("after")}
        >
          After
        </button>
      </div>

      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-3">
        {images.length > 0 ? (
          <div className="w-full h-full">
            <img
              src={images[currentIndex]}
              alt={`${activeTab} image ${currentIndex + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
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
              className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm transition-opacity duration-200 ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-90 hover:opacity-100"
              }`}
            >
              <ChevronLeftIcon className="h-4 w-4" strokeWidth={2} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
              className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm transition-opacity duration-200 ${
                currentIndex === images.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-90 hover:opacity-100"
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
              className={`h-1.5 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "w-5 bg-[#D05F8E]"
                  : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
