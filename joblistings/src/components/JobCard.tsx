import type { JobEntry } from "../types/JobEntry";
import { useSearchParams } from "react-router";

export default function JobCard({
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: JobEntry) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleAddFilter = (newFilter: string) => {
    const currentFilters = searchParams.getAll("filter");
    if (!currentFilters.includes(newFilter)) {
      setSearchParams({ filter: [...currentFilters, newFilter] });
    }
  };

  return (
    <article className="job-card group">
      <div className="flex flex-wrap flex-row items-center gap-6 w-full sm:w-1/2 h-full">
        <img
          src={logo}
          alt="job-logo"
          className="h-14 aspect-square absolute
          sm:static top-0 -translate-y-1/2 sm:translate-0"
        />
        <div className="flex flex-col justify-between h-full ">
          <div className="flex gap-2 items-center flex-wrap">
            <p className="text-dark-cyan">{company}</p>
            {isNew && (
              <button
                type="button"
                className="newjob rounded-button"
                onClick={() => handleAddFilter("new")}
              >
                NEW!
              </button>
            )}
            {featured && (
              <button
                type="button"
                className="featured rounded-button"
                onClick={() => handleAddFilter("featured")}
              >
                FEATURED!
              </button>
            )}
          </div>

          <h2 className="position-button group-hover:text-dark-cyan">
            {position}
          </h2>

          <div className="font-semibold text-gray-brush flex gap-2 items-center">
            <p>{postedAt}</p>
            <Bullet />
            <p>{contract}</p>
            <Bullet />
            <p>{location}</p>
          </div>
        </div>
      </div>

      <hr className="text-gray-300 sm:hidden m-2" />

      <div className="flex flex-wrap gap-2 w-full sm:w-1/2 sm:justify-end">
        <button
          type="button"
          className="filter-button"
          onClick={() => handleAddFilter(role)}
        >
          {role}
        </button>
        <button
          type="button"
          className="filter-button"
          onClick={() => handleAddFilter(level)}
        >
          {level}
        </button>
        {languages.map((l) => (
          <button
            key={l}
            className="filter-button"
            onClick={() => handleAddFilter(l)}
          >
            {l}
          </button>
        ))}
        {tools.map((t) => (
          <button
            key={t}
            className="filter-button"
            onClick={() => handleAddFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>
    </article>
  );
}

function Bullet() {
  return <div className="h-1 w-1 rounded-full bg-gray-brush" />;
}
