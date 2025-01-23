import "./style.css";
import { fetchMeals } from "./modal";

const main = () => {
  fetchMeals();

  const searchInput = document.getElementById("search-input");
  const seafoodListContainer = document.getElementById("seafood-list");

  const filterRecipes = (searchMeal) => {
    const meals = seafoodListContainer.getElementsByTagName("li");
    Array.from(meals).forEach((meal) => {
      const mealName = meal.querySelector("h3").textContent.toLowerCase();
      if (mealName.includes(searchMeal.toLowerCase())) {
        meal.style.display = "block";
      } else {
        meal.style.display = "none";
      }
    });
  };

  searchInput.addEventListener("input", (e) => {
    const searchWord = e.target.value;
    filterRecipes(searchWord);
  });
};

main();
