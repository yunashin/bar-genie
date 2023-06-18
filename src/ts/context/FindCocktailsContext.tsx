import { createContext, useContext } from "react";

export interface FindCocktailsState {
  selectedSpirits: string[];
  selectedFlavors: string[];
}

export interface FindCocktailsContent extends FindCocktailsState {
  setSelectedSpirits: (spirits: string[]) => void;
  setSelectedFlavors: (flavors: string[]) => void;
}

export const FindCocktailsContext = createContext<FindCocktailsContent>({
  selectedSpirits: [],
  selectedFlavors: [],
  setSelectedSpirits: () => { },
  setSelectedFlavors: () => []
});

export const useFindCocktailsContext = () => useContext(FindCocktailsContext);
