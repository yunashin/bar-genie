import { useCallback, useState } from "react";
import $ from "jquery";

import { CocktailType } from "../../data/cocktails";
import { useFindCocktailsContext } from "../context/FindCocktailsContext";
import { FavoriteIcon } from "./FavoriteIcon";

const CocktailCard = ({ cocktail }: { cocktail: CocktailType }) => {
  const [showFullContents, setShowFullContents] = useState(false);

  const { favoriteCocktails, setFavoriteCocktails } = useFindCocktailsContext();
  const [isFavorite, setIsFavorite] = useState(
    favoriteCocktails.includes(cocktail.name)
  );

  const handleFavoriteClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      let updatedFavorites = [];
      if (!favoriteCocktails.includes(cocktail.name)) {
        updatedFavorites = Array.from(
          new Set([...favoriteCocktails, cocktail.name])
        );
      } else {
        updatedFavorites = favoriteCocktails.filter(
          (favorite: string) => favorite !== cocktail.name
        );
      }
      window.localStorage.setItem(
        "favoriteCocktails",
        JSON.stringify(updatedFavorites)
      );
      setFavoriteCocktails(updatedFavorites);
      setIsFavorite(!isFavorite);
    },
    [cocktail.name, favoriteCocktails, isFavorite, setFavoriteCocktails]
  );

  return (
    <div
      className="cocktail-card"
      key={cocktail.name}
      onClick={() => {
        setShowFullContents(!showFullContents);
        if ($(`#details-${cocktail.name}`).css("display") === "none") {
          $(`#details-${cocktail.name}`).slideDown();
        } else {
          $(`#details-${cocktail.name}`).slideUp();
        }
      }}
    >
      <div className="flex between">
        <h2>
          <b>{cocktail.label}</b>
        </h2>
        <FavoriteIcon fill={isFavorite} onClick={handleFavoriteClick} />
      </div>
      {Boolean(cocktail.spirits.length) && (
        <div>
          <b>Spirits: </b>
          {cocktail.spirits.map((spirit, index) => {
            return index === cocktail.spirits.length - 1
              ? spirit
              : `${spirit}, `;
          })}
        </div>
      )}
      <div>
        <b>Flavors: </b>
        {cocktail.flavors.map((flavor, index) => {
          return index === cocktail.flavors.length - 1 ? flavor : `${flavor}, `;
        })}
      </div>
      <div id={`details-${cocktail.name}`}>
        {cocktail.imageUrl && (
          <div className="flex justify-center">
            <img
              className="cocktail-image"
              src={cocktail.imageUrl}
              alt="food"
              loading="lazy"
            />
          </div>
        )}
        <ul>
          {cocktail.ingredients.map((ingredient, index) => {
            const OptionalTag = ingredient.optional ? (
              <span className="optional-tag">OPTIONAL</span>
            ) : null;
            return (
              <li
                className={ingredient.optional ? "optional" : undefined}
                key={`${cocktail.name}-${ingredient.ingredient}-${index}`}
              >
                {OptionalTag}
                {ingredient.amount
                  ? `${ingredient.amount} ${ingredient.ingredient}`
                  : `${ingredient.ingredient}`}
              </li>
            );
          })}
        </ul>
        <div>
          <b>Directions</b>
          <ol>
            {cocktail.directions.map((step, index) => {
              return <li key={`${cocktail.name}-step-${index}`}>{step}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
