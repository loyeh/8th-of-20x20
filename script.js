const mealName = document.getElementById("mealName");
const searchRes = document.getElementById("searchRes");
const searchImg = document.getElementById("searchImg");
const category = document.getElementById("category");
const area = document.getElementById("area");
const instructions = document.getElementById("instructions");
const ingredients = document.getElementById("ingredients");

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((response) => response.json())
  .then((data) => console.log(data.meals[0]))
  .catch((error) => {
    console.log(error);
  });
function findMeals() {}

function randomMeal() {}
