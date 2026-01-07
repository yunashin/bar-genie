import { useCallback, useEffect, useMemo, useState } from "react";

import { FlavorType, SpiritType, cocktailsData } from "../../data/cocktails";
import MultiSelect from "./helperComponents/MultiSelect";
import { useFindCocktailsContext } from "../context/FindCocktailsContext";
import CocktailCard from "./CocktailCard";
import IngredientCheckbox from "./IngredientCheckbox";
import { getAreIngredientsSelected } from "./utils/cocktailUtils";

const spiritOptions = [
  { name: "Brandy", value: "brandy" },
  { name: "Bourbon", value: "bourbon" },
  { name: "Gin", value: "gin" },
  { name: "Pisco", value: "Pisco" },
  { name: "Rum", value: "rum" },
  { name: "Rye", value: "rye" },
  { name: "Soju", value: "soju" },
  { name: "Tequila", value: "tequila" },
  { name: "Vodka", value: "vodka" },
  { name: "Whiskey", value: "whiskey" },
  { name: "None", value: "none" },
  { name: "Non-alcoholic", value: "non-alcoholic" },
];

const flavorOptions = [
  { name: "Bitter", value: "bitter" },
  { name: "Dry", value: "dry" },
  { name: "Floral", value: "floral" },
  { name: "Fruity", value: "fruity" },
  { name: "Refreshing", value: "refreshing" },
  { name: "Rich", value: "rich" },
  { name: "Savory", value: "savory" },
  { name: "Sour", value: "sour" },
  { name: "Spicy", value: "spicy" },
  { name: "Sweet", value: "sweet" },
];

const Body = () => {
  const [showFavorites, setShowFavorites] = useState(false);
  const [showSpiritsDropdown, setShowSpiritsDropdown] = useState(false);
  const [showFlavorsDropdown, setShowFlavorsDropdown] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [shouldFilterEveryIngredient, setShouldFilterEveryIngredient] =
    useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [ingredientSearchTerm, setIngredientSearchTerm] = useState("");
  const {
    selectedSpirits,
    selectedFlavors,
    setSelectedSpirits,
    setSelectedFlavors,
  } = useFindCocktailsContext();
  const lowercaseSearchTerm = searchTerm.toLocaleLowerCase();

  const favoriteCocktailNames = JSON.parse(
    window.localStorage.getItem("favoriteCocktails") || "[]"
  );

  const filteredCocktails = useMemo(
    () =>
      cocktailsData
        .filter((cocktail) => {
          if (showFavorites) {
            return favoriteCocktailNames.includes(cocktail.name);
          }
          const areIngredientsSelected = getAreIngredientsSelected({
            cocktail,
            selectedIngredients,
            shouldFilterEveryIngredient,
          });
          return (
            (selectedSpirits.length
              ? selectedSpirits.some((spirit) =>
                  cocktail.spirits.includes(spirit as SpiritType)
                )
              : true) &&
            (selectedFlavors.length
              ? selectedFlavors.some((flavor) =>
                  cocktail.flavors.includes(flavor as FlavorType)
                )
              : true) &&
            areIngredientsSelected &&
            (cocktail.label.toLocaleLowerCase().includes(lowercaseSearchTerm) ||
              cocktail.ingredients.some((ingredient) =>
                ingredient.ingredient
                  .toLocaleLowerCase()
                  .includes(lowercaseSearchTerm)
              ) ||
              cocktail.directions.some((direction) =>
                direction.toLocaleLowerCase().includes(lowercaseSearchTerm)
              ))
          );
        })
        .sort((cocktailA, cocktailB) =>
          cocktailA.name.localeCompare(cocktailB.name)
        ),
    [
      favoriteCocktailNames,
      lowercaseSearchTerm,
      selectedFlavors,
      selectedIngredients,
      selectedSpirits,
      shouldFilterEveryIngredient,
      showFavorites,
    ]
  );

  const ingredients = Array.from(
    new Set(
      cocktailsData.flatMap((cocktail) =>
        cocktail.ingredients.reduce<string[]>((acc, ingredient) => {
          const allIngredients = acc;
          allIngredients.push(ingredient.ingredient);
          if (ingredient.altIngredient) {
            allIngredients.push(ingredient.altIngredient);
          }
          return allIngredients;
        }, [])
      )
    )
  );

  const everyIngredientIsSelected = ingredients.every((ingredient) =>
    selectedIngredients.includes(ingredient)
  );

  const onSpiritsChange = (selectedSpirit: string) => {
    if (selectedSpirits.includes(selectedSpirit)) {
      setSelectedSpirits(
        selectedSpirits.filter((spirit) => spirit !== selectedSpirit)
      );
    } else {
      setSelectedSpirits([...selectedSpirits, selectedSpirit]);
    }
  };

  const onFlavorsChange = (selectedFlavor: string) => {
    if (selectedFlavors.includes(selectedFlavor)) {
      setSelectedFlavors(
        selectedFlavors.filter((flavor) => flavor !== selectedFlavor)
      );
    } else {
      setSelectedFlavors([...selectedFlavors, selectedFlavor]);
    }
  };

  const onIngredientChange = useCallback(
    (selectedIngredient: string) => {
      if (selectedIngredients.includes(selectedIngredient)) {
        setSelectedIngredients(
          selectedIngredients.filter(
            (ingredient) => ingredient !== selectedIngredient
          )
        );
      } else {
        setSelectedIngredients([...selectedIngredients, selectedIngredient]);
      }
    },
    [selectedIngredients]
  );

  useEffect(() => {
    setSelectedIngredients(ingredients);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFlavors, selectedSpirits]);

  const areFiltersApplied = Boolean(
    selectedSpirits.length || selectedFlavors.length || searchTerm !== ""
  );

  const filteredCocktailsIgnoringIngredients = useMemo(
    () =>
      cocktailsData
        .filter((cocktail) => {
          return (
            (selectedSpirits.length
              ? selectedSpirits.some((spirit) =>
                  cocktail.spirits.includes(spirit as SpiritType)
                )
              : true) &&
            (selectedFlavors.length
              ? selectedFlavors.some((flavor) =>
                  cocktail.flavors.includes(flavor as FlavorType)
                )
              : true) &&
            (cocktail.label.toLocaleLowerCase().includes(lowercaseSearchTerm) ||
              cocktail.ingredients.some((ingredient) =>
                ingredient.ingredient
                  .toLocaleLowerCase()
                  .includes(lowercaseSearchTerm)
              ) ||
              cocktail.directions.some((direction) =>
                direction.toLocaleLowerCase().includes(lowercaseSearchTerm)
              ))
          );
        })
        .sort((cocktailA, cocktailB) =>
          cocktailA.name.localeCompare(cocktailB.name)
        ),
    [lowercaseSearchTerm, selectedFlavors, selectedSpirits]
  );

  const checkedIngredients = useMemo(
    () =>
      ingredients
        .filter((ingredient) => {
          const isIncludedInResults = areFiltersApplied
            ? filteredCocktailsIgnoringIngredients.some((cocktail) =>
                cocktail.ingredients.some(
                  (ing) => ing.ingredient === ingredient
                )
              )
            : true;
          if (selectedIngredients.includes(ingredient) && isIncludedInResults) {
            return ingredientSearchTerm !== ""
              ? ingredient
                  .toLocaleLowerCase()
                  .includes(ingredientSearchTerm.toLocaleLowerCase())
              : true;
          }
          return false;
        })
        .sort((a, b) =>
          a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())
        ),
    [
      areFiltersApplied,
      filteredCocktailsIgnoringIngredients,
      ingredients,
      ingredientSearchTerm,
      selectedIngredients,
    ]
  );

  const uncheckedIngredients = useMemo(
    () =>
      ingredients
        .filter((ingredient) => {
          const isIncludedInResults = areFiltersApplied
            ? filteredCocktailsIgnoringIngredients.some((cocktail) =>
                cocktail.ingredients.some(
                  (ing) => ing.ingredient === ingredient
                )
              )
            : true;
          if (
            !selectedIngredients.includes(ingredient) &&
            isIncludedInResults
          ) {
            return ingredientSearchTerm !== ""
              ? ingredient
                  .toLocaleLowerCase()
                  .includes(ingredientSearchTerm.toLocaleLowerCase())
              : true;
          }
          return false;
        })
        .sort((a, b) =>
          a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())
        ),
    [
      areFiltersApplied,
      filteredCocktailsIgnoringIngredients,
      ingredients,
      ingredientSearchTerm,
      selectedIngredients,
    ]
  );

  const ingredientSearchInput = document.getElementById(
    "ingredient-search-input"
  );
  const ingredientSearchInputXButton = document.getElementById(
    "ingredient-search-input-x-button"
  );
  const searchInput = document.getElementById("search-input");
  const searchInputXButton = document.getElementById("search-input-x-button");

  useEffect(() => {
    ingredientSearchInputXButton?.addEventListener("click", () => {
      ingredientSearchInput?.focus();
    });
  }, [ingredientSearchInput, ingredientSearchInputXButton]);

  useEffect(() => {
    searchInputXButton?.addEventListener("click", () => {
      searchInput?.focus();
    });
  }, [searchInput, searchInputXButton]);

  const IngredientContainer = useMemo(() => {
    return (
      <div className="ingredients">
        <div>
          <div className="flex align-center">
            <input
              id="toggle-all-ingredients-checkbox"
              type="checkbox"
              checked={everyIngredientIsSelected}
              onClick={() => {
                if (everyIngredientIsSelected) {
                  setSelectedIngredients([]);
                } else {
                  setSelectedIngredients(ingredients);
                }
              }}
              onChange={() => {}}
            />
            <b>Ingredients for all results</b>
          </div>
          <div className="flex align-center m-bottom-20">
            <button
              className="and-or-toggle-button"
              onClick={() =>
                setShouldFilterEveryIngredient(!shouldFilterEveryIngredient)
              }
            >
              {shouldFilterEveryIngredient ? "ALL" : "ANY"}
            </button>
            <input
              id="ingredient-search-input"
              className="ingredient-search-input"
              type="text"
              onChange={(e) => setIngredientSearchTerm(e.target.value)}
              value={ingredientSearchTerm}
              placeholder="Search.."
            />
            <div
              id="ingredient-search-input-x-button"
              className="link-button"
              onClick={() => {
                setIngredientSearchTerm("");
              }}
            >
              X
            </div>
          </div>
        </div>
        <div className="ingredient-list">
          {checkedIngredients.map((ingredient) => {
            return (
              <IngredientCheckbox
                ingredient={ingredient}
                key={ingredient}
                onIngredientChange={onIngredientChange}
                selectedIngredients={selectedIngredients}
              />
            );
          })}
          {Boolean(
            checkedIngredients.length && uncheckedIngredients.length
          ) && <hr />}
          {uncheckedIngredients.map((ingredient) => {
            return (
              <IngredientCheckbox
                ingredient={ingredient}
                key={ingredient}
                onIngredientChange={onIngredientChange}
                selectedIngredients={selectedIngredients}
              />
            );
          })}
        </div>
      </div>
    );
  }, [
    checkedIngredients,
    everyIngredientIsSelected,
    ingredients,
    ingredientSearchTerm,
    onIngredientChange,
    selectedIngredients,
    shouldFilterEveryIngredient,
    uncheckedIngredients,
  ]);

  return (
    <div className="body">
      <div>
        <button
          className="m-left-20 m-bottom-20"
          onClick={() => {
            setShowFavorites(!showFavorites);
          }}
        >
          <b>
            <u>{showFavorites ? "View all" : "Favorites"}</u>
          </b>
        </button>
      </div>
      {!showFavorites && (
        <div className="flex align-center">
          <div className="m-left-20 mobile-hidden">
            <b>Filter by</b>
          </div>
          <div className="m-left-20 mobile-hidden">
            <MultiSelect
              onChange={onSpiritsChange}
              onOpenChange={(showDropdown: boolean) => {
                setShowSpiritsDropdown(showDropdown);
                setShowFlavorsDropdown(false);
              }}
              options={spiritOptions}
              selectedOptions={selectedSpirits}
              showDropdown={showSpiritsDropdown}
              setShowDropdown={setShowSpiritsDropdown}
            >
              <>Spirits</>
            </MultiSelect>
          </div>
          <div className="m-left-20 mobile-hidden">
            <MultiSelect
              onChange={onFlavorsChange}
              onOpenChange={(showDropdown: boolean) => {
                setShowFlavorsDropdown(showDropdown);
                setShowSpiritsDropdown(false);
              }}
              options={flavorOptions}
              selectedOptions={selectedFlavors}
              showDropdown={showFlavorsDropdown}
              setShowDropdown={setShowFlavorsDropdown}
            >
              <>Flavors</>
            </MultiSelect>
          </div>
          <div className="flex align-center m-left-20 m-top-mobile">
            <input
              id="search-input"
              className="search"
              type="text"
              onChange={(event: React.FocusEvent<HTMLInputElement>) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search.."
              value={searchTerm}
            />
            <div
              id="search-input-x-button"
              className="link-button"
              onClick={() => {
                setSearchTerm("");
              }}
            >
              X
            </div>
          </div>
          <div className="m-left-20 mobile-hidden">
            <button
              onClick={() => {
                setSelectedSpirits([]);
                setSelectedFlavors([]);
                setSearchTerm("");
                setShouldFilterEveryIngredient(true);
              }}
            >
              Clear all filters
            </button>
          </div>
        </div>
      )}
      {!showFavorites &&
        Boolean(selectedSpirits.length || selectedFlavors.length) && (
          <div className="m-top-20 m-left-20">
            <b>Filters ({filteredCocktails.length}): </b>
            {selectedSpirits.map((spirit, index) =>
              !selectedFlavors.length && index === selectedSpirits.length - 1
                ? spirit
                : `${spirit}, `
            )}
            {selectedFlavors.map((flavor, index) =>
              index === selectedFlavors.length - 1 ? flavor : `${flavor}, `
            )}
          </div>
        )}
      {filteredCocktails.length ? (
        <div className="flex">
          <div className="block">
            {filteredCocktails.map((cocktail) => (
              <CocktailCard
                cocktail={cocktail}
                key={`cocktail-card-${cocktail.name}`}
              />
            ))}
          </div>
          {!showFavorites && IngredientContainer}
        </div>
      ) : (
        <div className="flex">
          <div className="no-results-found">
            <div className="m-top-20 m-left-20">No results found.</div>
          </div>
          {!showFavorites && IngredientContainer}
        </div>
      )}
    </div>
  );
};

export default Body;
