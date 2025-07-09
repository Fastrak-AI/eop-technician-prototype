import { useParams, Link } from "react-router-dom";
import BackButton from "@/polymet/components/back-button";
import ServiceReportHeader from "@/polymet/components/service-report-header";
import ServiceTimeCard from "@/polymet/components/service-time-card";
import HomeScoreCard from "@/polymet/components/home-score-card";
import ServiceSummaryCard from "@/polymet/components/service-summary-card";
import BeforeAfterPhotos from "@/polymet/components/before-after-photos";
import ActionButton from "@/polymet/components/action-button";
import { ShareIcon } from "lucide-react";
import { SERVICE_REPORT_DATA } from "@/polymet/data/updated-service-report-data";

export default function ServiceReport() {
  const { jobId = "1" } = useParams();

  // Using the updated service report data with consistent customer name
  const serviceData = SERVICE_REPORT_DATA;

  return (
    <div className="flex flex-col h-full bg-gray-50 pb-20">
      <div className="p-4 bg-white border-b border-gray-100">
        <BackButton to={`/jobs/${jobId}/checklist`} label="Back" />

        <h1 className="text-xl font-bold mt-2">Service Report</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <ServiceReportHeader
          customerName={serviceData.customerName}
          address={serviceData.address}
        />

        <ServiceTimeCard
          checkInTime={serviceData.checkInTime}
          checkOutTime={serviceData.checkOutTime}
        />

        <HomeScoreCard
          previousScore={serviceData.previousScore}
          currentScore={serviceData.currentScore}
        />

        <ServiceSummaryCard summary={serviceData.summary} />

        <BeforeAfterPhotos
          beforeImages={serviceData.beforeImages}
          afterImages={serviceData.afterImages}
        />

        <div className="mt-4 space-y-3">
          <ActionButton
            label="Share Report"
            variant="primary"
            icon={<ShareIcon className="h-4 w-4" />}
            className="w-full"
          />

          <Link to="/jobs" className="block">
            <ActionButton
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
