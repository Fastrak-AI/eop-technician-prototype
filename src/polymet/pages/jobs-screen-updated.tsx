import Header from "@/polymet/components/header";
import OverviewCard from "@/polymet/components/overview-card";
import JobCard from "@/polymet/components/job-card";
import IosTabBar from "@/polymet/components/ios-tab-bar";
import { Link } from "react-router-dom";

export default function JobsScreenUpdated() {
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
      timeWindow: "12:00 - 1:00 PM (1h)",
      status: "Pending",
    },
    {
      id: "3",
      address: "123 Maple Avenue",
      date: "Thu, Jun 15",
      timeWindow: "2:30 - 3:30 PM (1h)",
      status: "Pending",
    },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <Header />

      <div className="flex-1 overflow-y-auto px-4 pb-24">
        <OverviewCard />

        <h2 className="text-xl font-bold mt-6 mb-4">Today's Jobs</h2>
        <div className="space-y-4 mb-6">
          {jobs.map((job) => (
            <Link key={job.id} to={`/jobs/${job.id}`}>
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
      </div>
      <IosTabBar />
    </div>
  );
}
