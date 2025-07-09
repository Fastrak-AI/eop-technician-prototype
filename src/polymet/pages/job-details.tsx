import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  KeyIcon,
  ClockIcon,
  MapPinIcon,
  CheckIcon,
  ExternalLinkIcon,
} from "lucide-react";
import BackButton from "@/polymet/components/back-button";
import RealisticMapView from "@/polymet/components/realistic-map-view";
import ActionButton from "@/polymet/components/action-button";
import ChatInterface from "@/polymet/components/chat-interface";
import InfoPill from "@/polymet/components/info-pill";

// Mock job data - in a real app, this would come from an API
const jobsData = [
  {
    id: "1",
    address: "456 Oak Street",
    date: "Thu, Jun 15",
    timeWindow: "10:30 - 11:30 AM (1h)",
    status: "Pending",
    customerName: "Sarah Johnson",
    customerAvatar: "https://github.com/denizbuyuktas.png",
    gateCode: "4321",
    messages: [
      {
        id: "1",
        text: "Hi! Just checking if you're still coming today?",
        sender: "customer",
        timestamp: new Date(Date.now() - 45 * 60000),
      },
      {
        id: "2",
        text: "Yes, I'm scheduled to arrive between 10:30-11:30 AM. I'll let you know when I'm on my way.",
        sender: "technician",
        timestamp: new Date(Date.now() - 40 * 60000),
      },
      {
        id: "3",
        text: "Perfect, thanks! The gate code is 4321 if you need it.",
        sender: "customer",
        timestamp: new Date(Date.now() - 35 * 60000),
      },
    ],
  },
  {
    id: "2",
    address: "789 Pine Lane",
    date: "Thu, Jun 15",
    timeWindow: "12:00 - 1:00 PM (1h)",
    status: "Pending",
    customerName: "Michael Chen",
    customerAvatar: "https://github.com/furkanksl.png",
    gateCode: "8765",
    messages: [
      {
        id: "1",
        text: "Do you need me to be home for the pool service?",
        sender: "customer",
        timestamp: new Date(Date.now() - 2 * 60 * 60000),
      },
      {
        id: "2",
        text: "No, as long as I have access to the backyard, you don't need to be home.",
        sender: "technician",
        timestamp: new Date(Date.now() - 1.9 * 60 * 60000),
      },
    ],
  },
  {
    id: "3",
    address: "321 Cedar Avenue",
    date: "Thu, Jun 15",
    timeWindow: "2:00 - 3:00 PM (1h)",
    status: "Pending",
    customerName: "Emma Rodriguez",
    customerAvatar: "https://github.com/yahyabedirhan.png",
    gateCode: "1122",
    messages: [],
  },
  {
    id: "4",
    address: "654 Maple Drive",
    date: "Thu, Jun 15",
    timeWindow: "3:30 - 4:30 PM (1h)",
    status: "Pending",
    customerName: "David Kim",
    customerAvatar: "https://github.com/kdrnp.png",
    gateCode: "3344",
    messages: [],
  },
];

export default function JobDetails() {
  const { jobId = "1" } = useParams();
  const [onMyWaySent, setOnMyWaySent] = useState(false);
  const [hasArrived, setHasArrived] = useState(false);

  // Find the job data based on jobId
  const job = jobsData.find((j) => j.id === jobId) || jobsData[0];

  const handleOnMyWay = () => {
    setOnMyWaySent(true);
    // In a real app, this would send a notification to the customer
  };

  const handleIveArrived = () => {
    setHasArrived(true);
    // In a real app, this would send a notification to the customer and update job status
  };

  const handleOpenInMaps = () => {
    // In a real app, this would open the native maps app with the address
    alert(`Opening ${job.address} in Maps`);
  };

  return (
    <div className="flex flex-col h-full bg-white pb-6">
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between">
        <BackButton to="/" label="Jobs" />

        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">
          {job.status}
        </div>
      </div>

      {/* Map View - Now using the RealisticMapView component */}
      <div className="px-4">
        <RealisticMapView address={job.address} className="h-48" />
      </div>

      {/* Info Pills */}
      <div className="px-4 mt-4 flex space-x-3">
        <InfoPill
          label="Gate Code"
          value={job.gateCode}
          icon={<KeyIcon className="h-4 w-4 text-gray-500" />}
          variant="highlight"
          className="flex-1"
        />

        <InfoPill
          label="Appointment"
          value={job.timeWindow}
          icon={<ClockIcon className="h-4 w-4 text-gray-500" />}
          className="flex-1"
        />
      </div>

      {/* Action Buttons */}
      <div className="px-4 mt-4 space-y-3">
        {!onMyWaySent ? (
          <ActionButton
            label="On my way"
            icon={<MapPinIcon className="h-4 w-4" />}
            variant="primary"
            onClick={handleOnMyWay}
            className="w-full"
          />
        ) : !hasArrived ? (
          <ActionButton
            label="I've Arrived"
            icon={<CheckIcon className="h-4 w-4" />}
            variant="secondary"
            onClick={handleIveArrived}
            className="w-full"
          />
        ) : (
          <ActionButton
            label="Start Service"
            icon={<CheckIcon className="h-4 w-4" />}
            variant="primary"
            className="w-full"
          />
        )}

        <ActionButton
          label="Open in Maps"
          icon={<ExternalLinkIcon className="h-4 w-4" />}
          variant="outline"
          onClick={handleOpenInMaps}
          className="w-full"
        />
      </div>

      {/* Chat Interface */}
      <div className="px-4 mt-4 flex-1">
        <h3 className="text-sm font-medium mb-2">Customer Chat</h3>
        <ChatInterface
          customerName={job.customerName}
          customerAvatar={job.customerAvatar}
          initialMessages={job.messages}
        />
      </div>
    </div>
  );
}
