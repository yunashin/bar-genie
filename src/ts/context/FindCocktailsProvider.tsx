import { ReactElement, useCallback, useState } from "react";

import { FindCocktailsContext } from "./FindCocktailsContext";

export const FindCocktailsProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [favoriteCocktails, updateFavoriteCocktails] = useState<string[]>(JSON.parse(window.localStorage.getItem('favoriteCocktails') || '[]'));
  const [selectedSpirits, updateSelectedSpirits] = useState<string[]>([]);
  const [selectedFlavors, updateSelectedFlavors] = useState<string[]>([]);

  const setFavoriteCocktails = useCallback((favorites: string[]) => {
    updateFavoriteCocktails(favorites);
  }, []);

  const setSelectedSpirits = useCallback((spirits: string[]) => {
    updateSelectedSpirits(spirits);
  }, []);

  const setSelectedFlavors = useCallback((flavors: string[]) => {
    updateSelectedFlavors(flavors);
  }, []);

  const data = {
    favoriteCocktails,
    selectedSpirits,
    selectedFlavors,
    setFavoriteCocktails,
    setSelectedSpirits,
    setSelectedFlavors,
  };
  return <FindCocktailsContext.Provider value={data}>{children}</FindCocktailsContext.Provider>;
};
