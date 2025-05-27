import { useContext } from "react";
import RemoveIcon from "../assets/icon-remove.svg";
import { ActiveFilterContext } from "../contexts/ActiveFilterContext";

export default function FilterBarButton({ label }: { label: string }) {
  const context = useContext(ActiveFilterContext);

  if (!context) {
    throw new Error("undefined");
  }

  const { removeFilter } = context;

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
