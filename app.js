
const searchFood = () => {
  const searchText = document.getElementById('search-field').value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayFoods(data.meals))
    .catch(error => console.log(error))
  document.getElementById('search-field').value = '';
}
const displayFoods = foods => {
  const foodContainer = document.getElementById('food-container');
  foodContainer.innerHTML = '';

  foods.forEach(food => {
    const foodDiv = document.createElement('div');
    foodDiv.className = `col-4 py-5`;

    foodDiv.innerHTML = `
      <div class="card ">
      <img src="${food.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${food.strMeal}</h5>
      </div>
      <div class="card-body">
      <button onClick="getIngredients('${food.strMeal}')" class="btn btn-success">Get Details</button>
      
    </div>
  
      `;
    foodContainer.appendChild(foodDiv);
  })
}
const getIngredients = foodName => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then(res => res.json())
    .then(data => displayIngredients(data.meals[0]))
}
const displayIngredients = meals => {
  const ingredientDiv = document.getElementById("food-ingredient");
  const ingredient = document.getElementById("food-ingredient");
  ingredient.innerHTML = "";

  ingredientDiv.innerHTML = `
		<div class="ingredient-show">
			<div class="ingredient-div">
				<img class="ingredientImage" src = "${meals.strMealThumb}">	
        <p class="food-name">${meals.strMeal}</p>
			</div>
			<div>
				<ol >
          <p class="food-name">Ingredients</p>
					<li>${meals.strIngredient1}</li>
					<li>${meals.strIngredient2}</li>
					<li>${meals.strIngredient3}</li>
          <li>${meals.strIngredient4}</li>
          <li>${meals.strIngredient5}</li>
          <li>${meals.strIngredient6}</li>				
			</div>
		</div>
    `;
};


