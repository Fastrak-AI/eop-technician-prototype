import { Link } from "react-router-dom";
import Header from "@/polymet/components/header";
import OverviewCard from "@/polymet/components/overview-card";
import JobCard from "@/polymet/components/job-card";
import FixedTabBar from "@/polymet/components/fixed-tab-bar";

export default function FixedJobsScreen() {
  const jobsData = [
    {
      id: "1",
      address: "456 Oak Street",
      date: "Thu, Jun 15",
      timeWindow: "10:30 - 11:30 AM (1h)",
      status: "Pending" as const,
    },
    {
      id: "2",
      address: "789 Pine Lane",
      date: "Thu, Jun 15",
      timeWindow: "12:00 - 1:00 PM (1h)",
      status: "Pending" as const,
    },
    {
      id: "3",
      address: "321 Cedar Avenue",
      date: "Thu, Jun 15",
      timeWindow: "2:00 - 3:00 PM (1h)",
      status: "Pending" as const,
    },
    {
      id: "4",
      address: "654 Maple Drive",
      date: "Thu, Jun 15",
      timeWindow: "3:30 - 4:30 PM (1h)",
      status: "Pending" as const,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white pb-24">
      <Header />

      <div className="mt-2 mb-5">
        <OverviewCard />
      </div>

      <div className="px-4 mb-4">
        <h2 className="text-lg font-bold">Today's Jobs</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        {jobsData.map((job) => (
          <Link to={`/jobs/${job.id}`} key={job.id} className="block">
            <JobCard
              id={job.id}
              address={job.address}
              date={job.date}
              timeWindow={job.timeWindow}
              status={job.status}
            />
          </Link>
        ))}
      </div>

      <FixedTabBar activeTab="Jobs" />
    </div>
  );
}
