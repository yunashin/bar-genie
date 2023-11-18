import { createContext, useContext } from "react";

export interface FindCocktailsState {
  favoriteCocktails: string[];
  selectedSpirits: string[];
  selectedFlavors: string[];
}

export interface FindCocktailsContent extends FindCocktailsState {
  setFavoriteCocktails: (favorites: string[]) => void;
  setSelectedSpirits: (spirits: string[]) => void;
  setSelectedFlavors: (flavors: string[]) => void;
}

export const FindCocktailsContext = createContext<FindCocktailsContent>({
  favoriteCocktails: [],
  selectedSpirits: [],
  selectedFlavors: [],
  setFavoriteCocktails: () => { },
  setSelectedSpirits: () => { },
  setSelectedFlavors: () => { },
});

export const useFindCocktailsContext = () => useContext(FindCocktailsContext);
