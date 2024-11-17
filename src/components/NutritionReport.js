import React from 'react';

const NutritionReport = ({ ingredients }) => {
  return (
    <div>
      <h2>Nutrition Report</h2>
      <ul>
        {ingredients.map((ing, index) => (
          <li key={index}>
            <strong>{ing.name}</strong>: {ing.calories} kcal, 
            Protein: {ing.protein} g, Carbs: {ing.carbs} g, Fat: {ing.fat} g
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NutritionReport;
