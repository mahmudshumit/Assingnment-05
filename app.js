// const searchBtn = document.getElementById("search-btn");
// const mealList = document.getElementById("meal");
// const mealDetailsContent = document.querySelector(".meal-details-content");
// const detailBtn = document.getElementById("detail-btn");

// searchBtn.addEventListener("click", getMealList);
// mealList.addEventListener("click", getMealDetail);
// deatailBtn.addEventListener("click", () => {
//   mealDetailsContent.parentElement.classList.remove("showDetail");
// });

// function getMealList() {
//   let searchInputTxt = document.getElementById("search-input").value;
//   fetch(
//     `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       let html = "";
//       if (data.meals) {
//         data.meals.forEach((meal) => {
//           html += `
//                     <div class = "meal-item" data-id = "${meal.idMeal}">
//                         <div class = "meal-img">
//                             <img src = "${meal.strMealThumb}" alt = "food">
//                         </div>
//                         <div class = "meal-name">
//                             <h3>${meal.strMeal}</h3>
//                             <a href = "#" class = "detail-btn">Get Detail</a>
//                         </div>
//                     </div>
//                 `;
//         });
    //     mealList.classList.remove("notFound");
    //   } else {
    //     html = "Sorry, we didn't find any meal!";
    //     mealList.classList.add("notFound");
    //   }

    //   mealList.innerHTML = html;
    // });

// function getMealDetail(e) {
//   e.preventDefault();
//   if (e.target.classList.contains("detail-btn")) {
//     let mealItem = e.target.parentElement.parentElement;
//     fetch(
//       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
//     )
//       .then((response) => response.json())
//       .then((data) => mealInfo(data.meals));
//   }
// }
// function mealInfo(meal) {
//   console.log(meal);
//   meal = meal[0];
//   let html = `
//         <h2 class = detail-title">${meal.strMeal}</h2>
//         <p class = "detail-category">${meal.strCategory}</p>
//         <div class = "detail-instruct">
//             <h3>Instructions:</h3>
//             <p>${meal.strInstructions}</p>
//         </div>
//         <div class = "detail-meal-img">
//             <img src = "${meal.strMealThumb}" alt = "">
//         </div>
        
//     `;
//   mealDetailsContent.innerHTML = html;
//   mealDetailsContent.parentElement.classList.add("showDetail");
// }
const searchFood = () =>{
  const searchText = document.getElementById('search-field').value;
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
   fetch(url)
   .then(res=> res.json())
   .then(data =>displayFoods(data.meals))
}
const displayFoods = foods =>{
  const  foodContainer = document.getElementById('food-container');
  foodContainer.innerHTML='';

  foods.forEach(food => {
      const foodDiv = document.createElement('div');
      foodDiv.className =`col-4 py-5`;
     
      foodDiv.innerHTML =`
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
    .then(res=> res.json())
    .then(data => displayIngredients(data.meals[0]))
  }
  const displayIngredients = meals=>{
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
          <li>${meals.strIngredient3}</li>
          <li>${meals.strIngredient3}</li>
          <li>${meals.strIngredient3}</li>
					
			</div>
		</div>
    `;
};
  

