import React, { useState, useEffect } from 'react';
import AddIngredientForm from './components/AddIngredientForm';
import RecipeSummary from './components/RecipeSummary';
import NutritionReport from './components/NutritionReport';

const App = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const savedIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];
    setIngredients(savedIngredients);
  }, []);

  useEffect(() => {
    localStorage.setItem('ingredients', JSON.stringify(ingredients));
  }, [ingredients]);

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  return (
    <div>
      <h1>Food Recipe Nutrition Calculator</h1>
      <AddIngredientForm onAddIngredient={addIngredient} />
      <RecipeSummary ingredients={ingredients} />
      <NutritionReport ingredients={ingredients} />
    </div>
  );
};

export default App;
