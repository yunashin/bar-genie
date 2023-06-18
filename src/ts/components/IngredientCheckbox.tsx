type IngredientCheckboxProps = {
  ingredient: string;
  onIngredientChange: (ingredient: string) => void;
  selectedIngredients: string[];
}

const IngredientCheckbox = ({ ingredient, onIngredientChange, selectedIngredients }: IngredientCheckboxProps) => {
  return (
    <div className="block">
      <label>
        <input
          type="checkbox"
          checked={selectedIngredients.includes(ingredient)}
          onClick={() => onIngredientChange(ingredient)}
          onChange={() => { }}
        />
        {ingredient}
      </label>
    </div>
  );
}

export default IngredientCheckbox;
