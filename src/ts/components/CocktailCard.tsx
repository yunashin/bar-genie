import { useCallback, useState } from "react";
import $ from "jquery";

import { CocktailType } from "../../data/cocktails";
import { useFindCocktailsContext } from "../context/FindCocktailsContext";

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
        {isFavorite ? (
          <svg
            onClick={(event) => handleFavoriteClick(event)}
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#f75959"
            strokeWidth="1.08"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 5.881C12.981 4.729 14.484 4 16.05 4C18.822 4 21 6.178 21 8.95C21 12.3492 17.945 15.1195 13.3164 19.3167L13.305 19.327L12 20.515L10.695 19.336L10.6595 19.3037C6.04437 15.1098 3 12.3433 3 8.95C3 6.178 5.178 4 7.95 4C9.516 4 11.019 4.729 12 5.881Z"
                fill="#f75959"
              ></path>{" "}
            </g>
          </svg>
        ) : (
          <svg
            onClick={(event) => handleFavoriteClick(event)}
            fill="#ffffff"
            height="25px"
            width="25px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 471.701 471.701"
            xmlSpace="preserve"
            stroke="#ffffff"
            strokeWidth="21.226545"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="5.660412"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        )}
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
            return (
              <li key={`${cocktail.name}-${ingredient.ingredient}-${index}`}>
                {ingredient.amount
                  ? `${ingredient.amount} ${ingredient.ingredient}`
                  : ingredient.ingredient}
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
