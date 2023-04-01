const mealName = document.getElementById("mealName");
const searchRes = document.getElementById("searchRes");
const category = document.getElementById("category");
const area = document.getElementById("area");
const instructions = document.getElementById("instructions");
const ingredients = document.getElementById("ingredients");
const mealImage = document.getElementById("mealImage");
const mealFinder = document.getElementById("mealFinder");
const mealInfo = document.querySelector(".mealInfo");

function findMeals() {
  reset();
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealFinder.value;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const meals = data.meals;
      console.log(meals);
      searchRes.style.display = "block";
      searchRes.innerHTML = `<h2>Search results for '<span>${mealFinder.value}</span>':</h2>`;
      const mealContainer = document.createElement("div");
      mealContainer.className = "container";
      meals.forEach((meal, i) => {
        const mealDiv = document.createElement("div");
        mealDiv.className = "meal";
        mealDiv.id = `meal_${i}`;
        const searchImg = document.createElement("img");
        searchImg.src = meal.strMealThumb;
        const mealTitle = document.createElement("div");
        mealTitle.className = "mealTitle";
        mealTitle.innerText = meal.strMeal;
        mealDiv.appendChild(searchImg);
        mealDiv.appendChild(mealTitle);
        mealDiv.addEventListener("click", () => {
          showMeal(meal);
        });
        mealContainer.appendChild(mealDiv);
      });
      searchRes.appendChild(mealContainer);
    })
    .catch((error) => {
      console.log(error);
    });
}

function randomMeal() {
  reset();
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      const meal = data.meals[0];
      console.log(meal);
      showMeal(meal);
    })
    .catch((error) => {
      console.log(error);
    });
}

function reset() {
  mealInfo.style.display = "none";
  searchRes.style.display = "none";
}
function showMeal(meal) {
  mealInfo.style.display = "block";
  mealName.innerText = meal.strMeal;
  category.innerText = meal.strCategory;
  area.innerText = meal.strArea;
  instructions.innerText = meal.strInstructions;
  mealImage.innerHTML = "";
  ingredients.innerHTML = "";
  const mealImg = document.createElement("img");
  mealImg.src = meal.strMealThumb;
  mealImage.appendChild(mealImg);
  const keys = [];
  const ingredientsArr = [];
  for (const key in meal) {
    keys.push(key);
  }
  console.log(keys);
  for (let i = 0; i < 20; i++) {
    if (meal[keys[i + 9]]) {
      ingredientsArr[i] = `${meal[keys[i + 9]]}: ${meal[keys[i + 29]]}`;
    }
  }
  console.log(ingredients);

  ingredientsArr.forEach((ingredient) => {
    const div = document.createElement("div");
    div.innerText = ingredient;
    ingredients.appendChild(div);
  });
}
