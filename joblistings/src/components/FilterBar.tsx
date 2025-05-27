import { useContext } from "react";
import FilterBarButton from "./FilterBarButton";
import FilterBarClearButton from "./FilterBarClearButton";
import { ActiveFilterContext } from "../contexts/ActiveFilterContext";

export default function FilterBar() {
  const context = useContext(ActiveFilterContext);
  if (!context) {
    throw new Error("undefined context");
  }
  const { activeFilters, clearFilters } = context;

  if (activeFilters.length > 0) {
    return (
      <div className="filter-bar-nav">
        {activeFilters.map((filter) => (
          <FilterBarButton key={filter} label={filter} />
        ))}
        <FilterBarClearButton handleClearClick={clearFilters} />
      </div>
    );
  }

  return <></>;
}
