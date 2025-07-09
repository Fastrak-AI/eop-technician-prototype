import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import BackButton from "@/polymet/components/back-button";
import TabButton from "@/polymet/components/tab-button";
import ChecklistItem from "@/polymet/components/checklist-item";
import MediaUploadCard from "@/polymet/components/media-upload-card";
import TimeTracker from "@/polymet/components/time-tracker";
import SignaturePad from "@/polymet/components/signature-pad";
import ActionButton from "@/polymet/components/action-button";
import { CheckIcon } from "lucide-react";

export default function ServiceChecklist() {
  const { jobId = "1" } = useParams();
  const [activeTab, setActiveTab] = useState("checklist");
  const [checkInTime, setCheckInTime] = useState<Date | null>(new Date());
  const [checkOutTime, setCheckOutTime] = useState<Date | null>(null);
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>(
    {}
  );
  const [signature, setSignature] = useState<string | null>(null);

  const poolChecklistItems = [
    { id: "skim", label: "Skim / Net Pool Surface" },
    { id: "skimmer", label: "Empty Skimmer Baskets" },
    { id: "cleaner", label: "Empty Cleaner Bag" },
    { id: "vacuum", label: "Hose Vacuum for Dirt/Sediment" },
    { id: "brush", label: "Brush Walls/Steps" },
    { id: "leaves", label: "Power Vacuum for Leaves" },
    { id: "leaks", label: "Check Equipment for Leaks" },
    { id: "pump", label: "Empty Pump Basket" },
  ];

  const handleToggleItem = (id: string, checked: boolean) => {
    setCompletedItems((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const handleCheckIn = () => {
    setCheckInTime(new Date());
  };

  const handleCheckOut = () => {
    setCheckOutTime(new Date());
  };

  const handleSignatureChange = (signatureData: string | null) => {
    setSignature(signatureData);
  };

  const allItemsCompleted = poolChecklistItems.every(
    (item) => completedItems[item.id]
  );
  const canComplete = allItemsCompleted && checkOutTime && signature;

  return (
    <div className="flex flex-col h-full bg-white pb-20">
      <div className="p-4 border-b border-gray-100">
        <BackButton to={`/jobs/${jobId}`} label="Back to Job" />

        <h1 className="text-xl font-bold mt-2">Service Checklist</h1>
      </div>

      <div className="flex border-b border-gray-200">
        <TabButton
          label="Pool Checklist"
          active={activeTab === "checklist"}
          onClick={() => setActiveTab("checklist")}
        />

        <TabButton
          label="Documentation"
          active={activeTab === "documentation"}
          onClick={() => setActiveTab("documentation")}
        />

        <TabButton
          label="Completion"
          active={activeTab === "completion"}
          onClick={() => setActiveTab("completion")}
        />
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === "checklist" && (
          <div className="space-y-2">
            <div className="bg-[#FDF2F8] rounded-lg p-3 mb-4">
              <p className="text-sm text-[#D05F8E]">
                Complete all items in the checklist before proceeding to
                documentation.
              </p>
            </div>

            {poolChecklistItems.map((item) => (
              <ChecklistItem
                key={item.id}
                id={item.id}
                label={item.label}
                initialChecked={completedItems[item.id] || false}
                onToggle={handleToggleItem}
              />
            ))}

            {allItemsCompleted && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <ActionButton
                  label="Continue to Documentation"
                  variant="primary"
                  onClick={() => setActiveTab("documentation")}
                />
              </div>
            )}
          </div>
        )}

        {activeTab === "documentation" && (
          <div className="space-y-4">
            <MediaUploadCard title="Before Service Photo" type="photo" />

            <MediaUploadCard title="After Service Photo" type="photo" />

            <MediaUploadCard title="Video Recording (Optional)" type="video" />

            <MediaUploadCard title="Voice Note (Optional)" type="voice" />

            <div className="mt-4 pt-4 border-t border-gray-100">
              <ActionButton
                label="Continue to Completion"
                variant="primary"
                onClick={() => setActiveTab("completion")}
              />
            </div>
          </div>
        )}

        {activeTab === "completion" && (
          <div className="space-y-4">
            <TimeTracker
              checkInTime={checkInTime}
              checkOutTime={checkOutTime}
              onCheckIn={handleCheckIn}
              onCheckOut={handleCheckOut}
            />

            <SignaturePad onSignatureChange={handleSignatureChange} />

            <div className="mt-6">
              <Link to={`/jobs/${jobId}/report`} className="w-full block">
                <ActionButton
                  label="Complete Service"
                  variant="primary"
                  icon={<CheckIcon className="h-4 w-4" />}
                  disabled={!canComplete}
                  className={`w-full ${!canComplete ? "opacity-50" : ""}`}
                />
              </Link>

              {!canComplete && (
                <p className="text-xs text-gray-500 text-center mt-2">
                  Please complete all checklist items, check out, and collect
                  customer signature
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
