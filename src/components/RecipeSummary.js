import React from 'react';

const RecipeSummary = ({ ingredients }) => {
  const totalCalories = ingredients.reduce((acc, ing) => acc + ing.calories, 0);
  const totalProtein = ingredients.reduce((acc, ing) => acc + ing.protein, 0);
  const totalCarbs = ingredients.reduce((acc, ing) => acc + ing.carbs, 0);
  const totalFat = ingredients.reduce((acc, ing) => acc + ing.fat, 0);

  return (
    <div>
      <h2>Recipe Nutritional Summary</h2>
      <p>Total Calories: {totalCalories.toFixed(2)}</p>
      <p>Total Protein: {totalProtein.toFixed(2)} g</p>
      <p>Total Carbs: {totalCarbs.toFixed(2)} g</p>
      <p>Total Fat: {totalFat.toFixed(2)} g</p>
    </div>
  );
};

export default RecipeSummary;
