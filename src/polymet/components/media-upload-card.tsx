import { Camera, Mic, Upload, Video } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePhotoStorageContext } from "../contexts/PhotoStorageContext";

interface MediaUploadCardProps {
  title: string;
  type: "photo" | "video" | "voice";
  photoType?: "before" | "after" | "general";
  jobId?: string;
  onUpload?: (file: File) => void;
}

export default function MediaUploadCard({
  title,
  type,
  photoType = "general",
  jobId = "1",
  onUpload,
}: MediaUploadCardProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { addPhoto } = usePhotoStorageContext();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      if (type === "photo") {
        const reader = new FileReader();
        reader.onload = (e) => {
          const previewUrl = e.target?.result as string;
          setPreview(previewUrl);
          
          // Store photo in context
          addPhoto({
            type: photoType,
            file: selectedFile,
            preview: previewUrl,
            jobId,
          });
        };
        reader.readAsDataURL(selectedFile);
      }

      if (onUpload) {
        onUpload(selectedFile);
      }
    }
  };

  const getIcon = () => {
    switch (type) {
      case "photo":
        return <Camera className="h-6 w-6 text-[#D05F8E]" />;

      case "video":
        return <Video className="h-6 w-6 text-[#D05F8E]" />;

      case "voice":
        return <Mic className="h-6 w-6 text-[#D05F8E]" />;
    }
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="p-3 border-b border-gray-100">
        <h3 className="text-sm font-medium">{title}</h3>
      </div>

      {preview ? (
        <div className="aspect-video bg-gray-100 relative">
          <img
            src={preview}
            alt={title}
            className="w-full h-full object-cover"
          />

          <button
            className="absolute bottom-2 right-2 bg-white rounded-full p-1.5 shadow-sm"
            onClick={() => {
              setFile(null);
              setPreview(null);
            }}
          >
            <Upload className="h-4 w-4 text-[#D05F8E]" />
          </button>
        </div>
      ) : (
        <label
          className={cn(
            "flex flex-col items-center justify-center gap-2 p-6 cursor-pointer",
            type === "photo" ? "aspect-video bg-gray-50" : "py-6"
          )}
        >
          {getIcon()}
          <span className="text-sm text-gray-500">
            {type === "photo" && "Tap to upload photo"}
            {type === "video" && "Tap to record video"}
            {type === "voice" && "Tap to record voice note"}
          </span>
          <input
            type="file"
            accept={
              type === "photo"
                ? "image/*"
                : type === "video"
                  ? "video/*"
                  : "audio/*"
            }
            className="hidden"
            onChange={handleFileChange}
            capture={type === "photo" ? "environment" : undefined}
          />
        </label>
      )}
    </div>
  );
}
