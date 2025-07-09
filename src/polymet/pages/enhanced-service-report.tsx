import { useParams, Link } from "react-router-dom";
import BackButton from "@/polymet/components/back-button";
import EnhancedServiceReportHeader from "@/polymet/components/enhanced-service-report-header";
import EnhancedServiceTimeCard from "@/polymet/components/enhanced-service-time-card";
import EnhancedHomeScoreCard from "@/polymet/components/enhanced-home-score-card";
import EnhancedServiceSummaryCard from "@/polymet/components/enhanced-service-summary-card";
import TechnicianNotesCard from "@/polymet/components/technician-notes-card";
import EnhancedBeforeAfterPhotos from "@/polymet/components/enhanced-before-after-photos";
import EnhancedActionButton from "@/polymet/components/enhanced-action-button";
import { ShareIcon } from "lucide-react";
import { SERVICE_REPORT_DATA } from "@/polymet/data/updated-service-report-data";
import { usePhotoStorageContext } from "@/polymet/contexts/PhotoStorageContext";

export default function EnhancedServiceReport() {
  const { jobId = "1" } = useParams();
  const { getPhotosByType } = usePhotoStorageContext();

  // Using the updated service report data with consistent customer name
  const serviceData = SERVICE_REPORT_DATA;
  
  // Get photos from storage for this job
  const beforePhotos = getPhotosByType(jobId, "before");
  const afterPhotos = getPhotosByType(jobId, "after");
  
  // Use stored photos if available, otherwise fallback to mock data
  const beforeImages = beforePhotos.length > 0 
    ? beforePhotos.map(photo => photo.preview)
    : serviceData.beforeImages;
  
  const afterImages = afterPhotos.length > 0 
    ? afterPhotos.map(photo => photo.preview) 
    : serviceData.afterImages;

  const handleSaveNotes = (notes: string) => {
    console.log("Saving notes:", notes);
    // In a real app, this would update the notes in the database
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 pb-20">
      <div className="sticky top-0 z-10 p-4 bg-white border-b border-gray-100">
        <BackButton to={`/jobs/${jobId}/checklist`} label="Back" />

        <h1 className="text-xl font-bold mt-2">Service Report</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <EnhancedServiceReportHeader
          customerName={serviceData.customerName}
          address={serviceData.address}
          date={serviceData.date}
        />

        <EnhancedServiceTimeCard
          checkInTime={serviceData.checkInTime}
          checkOutTime={serviceData.checkOutTime}
        />

        <EnhancedHomeScoreCard
          previousScore={serviceData.previousScore}
          currentScore={serviceData.currentScore}
        />

        <EnhancedServiceSummaryCard
          summary={serviceData.summary}
          checklistItems={serviceData.checklistItems}
        />

        <TechnicianNotesCard
          initialNotes={serviceData.technicianNotes}
          onSave={handleSaveNotes}
        />

        <EnhancedBeforeAfterPhotos
          beforeImages={beforeImages}
          afterImages={afterImages}
        />

        <div className="mt-4 space-y-3">
          <EnhancedActionButton
            label="Share Report"
            icon={<ShareIcon className="h-4 w-4" />}
            variant="primary"
            className="w-full"
          />

          <Link to="/jobs" className="block">
            <EnhancedActionButton
              label="Return to Jobs"
              variant="outline"
              className="w-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
