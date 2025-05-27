import { useState, type ReactNode } from "react";
import { ActiveFilterContext } from "./ActiveFilterContext";

export default function ActiveFilterProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  function addFilter(newFilter: string) {
    if (!activeFilters.includes(newFilter)) {
      setActiveFilters([...activeFilters, newFilter]);
    }
  }

  function removeFilter(targetFilter: string) {
    if (activeFilters.includes(targetFilter)) {
      setActiveFilters(
        [...activeFilters].filter((filter) => filter !== targetFilter)
      );
    }
  }

  function clearFilters() {
    setActiveFilters([]);
  }

  return (
    <ActiveFilterContext.Provider
      value={{ activeFilters, addFilter, clearFilters, removeFilter }}
    >
      {children}
    </ActiveFilterContext.Provider>
  );
}
