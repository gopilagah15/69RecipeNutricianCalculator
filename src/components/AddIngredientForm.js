import React, { useState } from 'react';

const AddIngredientForm = ({ onAddIngredient }) => {
  const [ingredient, setIngredient] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIngredient((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredient.name && ingredient.calories) {
      onAddIngredient({
        ...ingredient,
        calories: parseFloat(ingredient.calories),
        protein: parseFloat(ingredient.protein),
        carbs: parseFloat(ingredient.carbs),
        fat: parseFloat(ingredient.fat)
      });
      setIngredient({ name: '', calories: '', protein: '', carbs: '', fat: '' });
    } else {
      alert('Please enter the ingredient name and calories.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Ingredient</h2>
      <input
        type="text"
        name="name"
        placeholder="Ingredient Name"
        value={ingredient.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="calories"
        placeholder="Calories"
        value={ingredient.calories}
        onChange={handleChange}
      />
      <input
        type="number"
        name="protein"
        placeholder="Protein (g)"
        value={ingredient.protein}
        onChange={handleChange}
      />
      <input
        type="number"
        name="carbs"
        placeholder="Carbs (g)"
        value={ingredient.carbs}
        onChange={handleChange}
      />
      <input
        type="number"
        name="fat"
        placeholder="Fat (g)"
        value={ingredient.fat}
        onChange={handleChange}
      />
      <button type="submit">Add Ingredient</button>
    </form>
  );
};

export default AddIngredientForm;
