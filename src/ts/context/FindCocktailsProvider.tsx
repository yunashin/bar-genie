import { ReactElement, useCallback, useState } from "react";

import { FindCocktailsContext } from "./FindCocktailsContext";

export const FindCocktailsProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [selectedSpirits, updateSelectedSpirits] = useState<string[]>([]);
  const [selectedFlavors, updateSelectedFlavors] = useState<string[]>([]);

  const setSelectedSpirits = useCallback((spirits: string[]) => {
    updateSelectedSpirits(spirits);
  }, []);

  const setSelectedFlavors = useCallback((flavors: string[]) => {
    updateSelectedFlavors(flavors);
  }, []);

  const data = {
    selectedSpirits,
    selectedFlavors,
    setSelectedSpirits,
    setSelectedFlavors,
  };
  return <FindCocktailsContext.Provider value={data}>{children}</FindCocktailsContext.Provider>;
};
