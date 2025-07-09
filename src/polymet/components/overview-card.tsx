import SegmentedToggle from "@/polymet/components/segmented-toggle";
import MetricTile from "@/polymet/components/metric-tile";

export default function OverviewCard() {
  return (
    <div className="mx-4 p-4 rounded-xl bg-gray-50/80 backdrop-blur-md shadow-sm border border-gray-100">
      <div className="mb-4">
        <SegmentedToggle
          options={["Day", "Week", "Month"]}
          defaultValue="Day"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <MetricTile
          title="Jobs Completed"
          value="0"
          total="4"
          type="progress"
          progress={0}
        />

        <MetricTile
          title="On-Time Rate"
          value="9"
          total="10"
          type="progress"
          progress={90}
        />

        <MetricTile
          title="Customer Rating"
          value={4.8}
          total="5.0"
          type="stars"
        />

        <MetricTile title="Average Service Time" value="1h 17m" type="time" />
      </div>
    </div>
  );
}
