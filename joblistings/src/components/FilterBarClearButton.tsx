import { useSearchParams } from "react-router";

export default function FilterBarClearButton() {
  const [, setSearchParams] = useSearchParams();

  return (
    <button
      type="button"
      className="filter-bar-clear"
      onClick={() => setSearchParams({})}
    >
      Clear
    </button>
  );
}
