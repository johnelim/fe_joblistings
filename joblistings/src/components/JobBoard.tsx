import jobsData from "../data.json";
import type { JobEntry } from "../types/JobEntry";
import JobCard from "./JobCard";
import { useSearchParams } from "react-router";

export default function JobBoard() {
  const allJobs: JobEntry[] = jobsData;

  const [searchParams] = useSearchParams();
  const activeFilters = searchParams.getAll("filter");

  const filteredJobs = allJobs.filter((job) => {
    const jobTags = [
      job.role,
      job.level,
      ...(job.languages || []),
      ...(job.tools || []),
      ...(job.featured ? ["featured"] : []),
      ...(job.new ? ["new"] : []),
    ];

    return activeFilters.every((filter) => jobTags.includes(filter));
  });

  return (
    <main className="job-board">
      {filteredJobs.map((j) => (
        <JobCard {...j} key={j.id} />
      ))}
    </main>
  );
}
