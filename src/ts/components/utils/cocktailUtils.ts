import { CocktailType, IngredientType } from "../../../data/cocktails";

const getIsIngredientSelected = ({
  ingredient,
  selectedIngredients,
}: {
  ingredient: IngredientType;
  selectedIngredients: string[];
}) => {
  const ingredientIsSelected = selectedIngredients.includes(
    ingredient.ingredient
  );
  return ingredient.altIngredient
    ? selectedIngredients.includes(ingredient.altIngredient) ||
        ingredientIsSelected
    : ingredientIsSelected;
};

export const getAreIngredientsSelected = ({
  cocktail,
  selectedIngredients,
  shouldFilterEveryIngredient,
}: {
  cocktail: CocktailType;
  selectedIngredients: string[];
  shouldFilterEveryIngredient: boolean;
}) => {
  if (shouldFilterEveryIngredient) {
    return cocktail.ingredients.every((ingredient) =>
      getIsIngredientSelected({ ingredient, selectedIngredients })
    );
  } else {
    return cocktail.ingredients.some((ingredient) =>
      getIsIngredientSelected({ ingredient, selectedIngredients })
    );
  }
};
