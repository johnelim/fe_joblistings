export default function FilterBarClearButton({
  handleClearClick,
}: {
  handleClearClick: () => void;
}) {
  return (
    <button
      type="button"
      className="filter-bar-clear"
      onClick={() => handleClearClick()}
    >
      Clear
    </button>
  );
}
