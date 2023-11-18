import MultiSelect from "./helperComponents/MultiSelect";
import { useFindCocktailsContext } from "../context/FindCocktailsContext";
import { FlavorType, SpiritType, cocktailsData } from "../../data/cocktails";
import CocktailCard from "./CocktailCard";
import { useEffect, useState } from "react";
import IngredientCheckbox from "./IngredientCheckbox";

const spiritOptions = [
  { name: 'Bourbon', value: 'bourbon' },
  { name: 'Gin', value: 'gin' },
  { name: 'Pisco', value: 'Pisco' },
  { name: 'Rum', value: 'rum' },
  { name: 'Tequila', value: 'tequila' },
  { name: 'Vodka', value: 'vodka' },
  { name: 'Whiskey', value: 'whiskey' },
  { name: 'None', value: 'none' },
  { name: 'Non-alcoholic', value: 'non-alcoholic' },
];

const flavorOptions = [
  { name: 'Bitter', value: 'bitter' },
  { name: 'Dry', value: 'dry' },
  { name: 'Floral', value: 'floral' },
  { name: 'Fruity', value: 'fruity' },
  { name: 'Rich', value: 'rich' },
  { name: 'Savory', value: 'savory' },
  { name: 'Sour', value: 'sour' },
  { name: 'Spicy', value: 'spicy' },
  { name: 'Sweet', value: 'sweet' },
];

const Body = () => {
  const [showSpiritsDropdown, setShowSpiritsDropdown] = useState(false);
  const [showFlavorsDropdown, setShowFlavorsDropdown] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { selectedSpirits, selectedFlavors, setSelectedSpirits, setSelectedFlavors } = useFindCocktailsContext();
  const lowercaseSearchTerm = searchTerm.toLowerCase();

  const areFiltersApplied = Boolean(selectedSpirits.length || selectedFlavors.length || searchTerm !== '');

  const filteredCocktails = cocktailsData.filter(cocktail =>
    (selectedSpirits.length ? selectedSpirits.every((spirit) => cocktail.spirits.includes(spirit as SpiritType)) : true) &&
    (selectedFlavors.length ? selectedFlavors.every(flavor => cocktail.flavors.includes(flavor as FlavorType)) : true) &&
    (cocktail.label.toLowerCase().includes(lowercaseSearchTerm) ||
      cocktail.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(lowercaseSearchTerm)) ||
      cocktail.directions.some(direction => direction.toLowerCase().includes(lowercaseSearchTerm)))
  );

  const ingredients = Array.from(new Set(
    filteredCocktails.flatMap(cocktail => cocktail.ingredients).map(ingredient => ingredient.ingredient)
  ));

  const onSpiritsChange = (selectedSpirit: string) => {
    if (selectedSpirits.includes(selectedSpirit)) {
      setSelectedSpirits(selectedSpirits.filter(spirit => spirit !== selectedSpirit));
    } else {
      setSelectedSpirits([...selectedSpirits, selectedSpirit]);
    }
  };

  const onFlavorsChange = (selectedFlavor: string) => {
    if (selectedFlavors.includes(selectedFlavor)) {
      setSelectedFlavors(selectedFlavors.filter(flavor => flavor !== selectedFlavor));
    } else {
      setSelectedFlavors([...selectedFlavors, selectedFlavor]);
    }
  };

  const onIngredientChange = (selectedIngredient: string) => {
    if (selectedIngredients.includes(selectedIngredient)) {
      setSelectedIngredients(selectedIngredients.filter(ingredient => ingredient !== selectedIngredient));
    } else {
      setSelectedIngredients([...selectedIngredients, selectedIngredient]);
    }
  }

  useEffect(() => {
    setSelectedIngredients(ingredients);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFlavors, selectedSpirits]);

  return (
    <div className="body">
      <div>
        <span className="m-left-20 mobile-hidden"><b>Filter by</b></span>
        <span className="m-left-20 mobile-hidden">
          <MultiSelect
            children={<>Spirits</>}
            onChange={onSpiritsChange}
            onOpenChange={(showDropdown: boolean) => {
              setShowSpiritsDropdown(showDropdown);
              setShowFlavorsDropdown(false);
            }}
            options={spiritOptions}
            selectedOptions={selectedSpirits}
            showDropdown={showSpiritsDropdown}
            setShowDropdown={setShowSpiritsDropdown}
          />
        </span>
        <span className="m-left-20 mobile-hidden">
          <MultiSelect
            children={<>Flavors</>}
            onChange={onFlavorsChange}
            onOpenChange={(showDropdown: boolean) => {
              setShowFlavorsDropdown(showDropdown);
              setShowSpiritsDropdown(false);
            }}
            options={flavorOptions}
            selectedOptions={selectedFlavors}
            showDropdown={showFlavorsDropdown}
            setShowDropdown={setShowFlavorsDropdown}
          />
        </span>
        <span className="m-left-20 m-top-mobile">
          <input
            className="search"
            type="text"
            onChange={
              (event: React.FocusEvent<HTMLInputElement>) => setSearchTerm(event.target.value)
            }
            placeholder="Search.."
            value={searchTerm} />
        </span>
        <span className="m-left-20 mobile-hidden">
          <button onClick={() => {
            setSelectedSpirits([]);
            setSelectedFlavors([]);
            setSearchTerm('');
          }}>Clear all filters</button>
        </span>
      </div>
      {Boolean(selectedSpirits.length || selectedFlavors.length) && (
        <div className="m-top-20 m-left-20">
          <b>Filters: </b>
          {selectedSpirits.map((spirit, index) => !selectedFlavors.length && index === selectedSpirits.length - 1 ? spirit : `${spirit}, `)}
          {selectedFlavors.map((flavor, index) => index === selectedFlavors.length - 1 ? flavor : `${flavor}, `)}
        </div>
      )}
      {filteredCocktails.length ? <div className="flex">
        <div className="block">
          {filteredCocktails.map(cocktail => {
            return cocktail.ingredients.flatMap(ingredient => ingredient.ingredient).every(ingredient => selectedIngredients.includes(ingredient)) ? <CocktailCard cocktail={cocktail} key={`cocktail-card-${cocktail.name}`} /> : null;
          })}
        </div>
        {areFiltersApplied && Boolean(filteredCocktails.length) && (
          <div className="ingredients">
            <b>Ingredients for all results</b>
            {ingredients.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).map(ingredient => {
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
        )}
      </div>
        :
        <div className="m-top-20 m-left-20">
          No results found.
        </div>
      }
    </div>
  );
}

export default Body;
