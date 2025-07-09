import { Link } from "react-router-dom";
import Header from "@/polymet/components/header";
import OverviewCard from "@/polymet/components/overview-card";
import JobCard from "@/polymet/components/job-card";
import FullWidthTabBar from "@/polymet/components/full-width-tab-bar";

export default function UpdatedJobsScreen() {
  const jobs = [
    {
      id: "1",
      address: "456 Oak Street",
      date: "Thu, Jun 15",
      timeWindow: "10:30 - 11:30 AM (1h)",
      status: "Pending",
    },
    {
      id: "2",
      address: "789 Pine Lane",
      date: "Thu, Jun 15",
      timeWindow: "1:00 - 2:00 PM (1h)",
      status: "Pending",
    },
  ];

  return (
    <div className="relative pb-24">
      {/* Header */}
      <Header />

      {/* Overview Card */}
      <div className="px-4 py-2">
        <OverviewCard />
      </div>

      {/* Jobs List */}
      <div className="px-4 pt-4">
        <h2 className="text-xl font-bold mb-4">Today's Jobs</h2>
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              address={job.address}
              date={job.date}
              timeWindow={job.timeWindow}
              status={job.status}
            />
          ))}
        </div>
      </div>

      {/* Tab Bar */}
      <FullWidthTabBar activeTab="Jobs" />
    </div>
  );
}
