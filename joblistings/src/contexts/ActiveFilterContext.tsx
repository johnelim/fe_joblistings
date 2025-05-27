import type { ActiveFilterContextType } from "./ActiveFilterContextType";
import { createContext } from "react";

export const ActiveFilterContext = createContext<
  ActiveFilterContextType | undefined
>(undefined);
