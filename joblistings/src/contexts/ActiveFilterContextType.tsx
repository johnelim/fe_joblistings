export interface ActiveFilterContextType {
  activeFilters: string[];
  addFilter: (newFilter: string) => void;
  removeFilter: (targetFilter: string) => void;
  clearFilters: () => void;
}
