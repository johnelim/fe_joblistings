import { useContext } from "react";
import jobsData from "../data.json";
import type { JobEntry } from "../types/JobEntry";
import JobCard from "./JobCard";
import { ActiveFilterContext } from "../contexts/ActiveFilterContext";

export default function JobBoard() {
  const allJobs: JobEntry[] = jobsData;

  const context = useContext(ActiveFilterContext);
  if (!context) {
    throw new Error("undefined context provider");
  }

  const { activeFilters } = context;

  const filteredJobs = allJobs.filter((job) => {
    const tags = [
      job.role,
      job.level,
      ...(job.new ? ["new"] : []),
      ...(job.featured ? ["featured"] : []),
      ...(job.languages || []),
      ...(job.tools || []),
    ];
    return activeFilters.every((filter) => tags.includes(filter));
  });

  return (
    <main className="job-board">
      {filteredJobs.map((j) => (
        <JobCard {...j} key={j.id} />
      ))}
    </main>
  );
}
