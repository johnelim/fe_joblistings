import FilterBar from "./FilterBar";

export default function Header() {
  return (
    <header className="h-24 relative bg-cover bg-[url('./src/assets/bg-header-mobile.svg')] sm:bg-[url('./src/assets/bg-header-desktop.svg')]">
      <FilterBar />
    </header>
  );
}
