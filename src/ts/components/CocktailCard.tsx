import { useState } from "react";
import $ from "jquery";

import { CocktailType } from "../../data/cocktails";

const CocktailCard = ({ cocktail }: { cocktail: CocktailType }) => {
  const [showFullContents, setShowFullContents] = useState(false);

  return (
    <div className="cocktail-card" key={cocktail.name}>
      <h2><b>{cocktail.label}</b></h2>
      {Boolean(cocktail.spirits.length) && (
        <div>
          <b>Spirits: </b>
          {cocktail.spirits.map((spirit, index) => {
            return index === cocktail.spirits.length - 1 ? spirit : `${spirit}, `;
          })}
        </div>
      )}
      <div>
        <b>Flavors: </b>
        {cocktail.flavors.map((flavor, index) => {
          return index === cocktail.flavors.length - 1 ? flavor : `${flavor}, `;
        })}
      </div>
      <a
        onClick={() => {
          setShowFullContents(!showFullContents);
          if ($(`#details-${cocktail.name}`).css('display') === "none") {
            $(`#details-${cocktail.name}`).slideDown();
          } else {
            $(`#details-${cocktail.name}`).slideUp();
          }
        }}>
        {showFullContents ? 'Hide details' : 'Show details'}
      </a>
      <div id={`details-${cocktail.name}`}>
        <ul>
          {cocktail.ingredients.map(ingredient => {
            return (
              <li key={`${cocktail.name}-${ingredient.ingredient}`}>
                {ingredient.amount ? `${ingredient.amount} ${ingredient.ingredient}` : ingredient.ingredient}
              </li>
            )
          })}
        </ul>
        <p>
          <b>Directions</b>
          <ol>
            {cocktail.directions.map((step, index) => {
              return <li key={`${cocktail.name}-step-${index}`}>{step}</li>
            })}
          </ol>
        </p>
      </div>
    </div>
  )
}

export default CocktailCard;
