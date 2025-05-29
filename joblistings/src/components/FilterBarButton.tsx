import { useSearchParams } from "react-router";
import RemoveIcon from "/assets/icon-remove.svg";

export default function FilterBarButton({ label }: { label: string }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const removeFilter = (filterToRemove: string) => {
    const activeFilters = searchParams.getAll("filter");
    if (activeFilters.includes(filterToRemove)) {
      setSearchParams({
        filter: activeFilters.filter((f) => f !== filterToRemove),
      });
    }
  };

  return (
    <button
      type="button"
      className="filter-button-nav group"
      onClick={() => removeFilter(label)}
    >
      <span>{label}</span>
      <img
        src={RemoveIcon}
        alt="remove-icon"
        className="filter-remove-icon group-hover:bg-dark-border"
      />
    </button>
  );
}
