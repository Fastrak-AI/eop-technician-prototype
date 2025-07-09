import { Link } from "react-router-dom";
import Header from "@/polymet/components/header";
import OverviewCard from "@/polymet/components/overview-card";
import JobCard from "@/polymet/components/job-card";
import IPhone16TabBar from "@/polymet/components/iphone-16-tab-bar";

export default function JobsScreenIPhone16() {
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
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <div className="flex-1 px-4 pb-24 overflow-y-auto">
        <OverviewCard />

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Today's Jobs</h2>
          <div className="space-y-4">
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
      </div>
      <IPhone16TabBar activeTab="Jobs" />
    </div>
  );
}
