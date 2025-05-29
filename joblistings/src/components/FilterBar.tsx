import { useSearchParams } from "react-router";
import FilterBarButton from "./FilterBarButton";
import FilterBarClearButton from "./FilterBarClearButton";

export default function FilterBar() {
  const [searchParams] = useSearchParams();
  const activeFilters = searchParams.getAll("filter");
  if (activeFilters.length > 0) {
    return (
      <div className="filter-bar-nav">
        {activeFilters.map((filter) => (
          <FilterBarButton key={filter} label={filter} />
        ))}
        <FilterBarClearButton />
      </div>
    );
  }

  return <></>;
}
