import { fetchData } from "./fetch-helpers";

export const openModal = async (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  try {
    const data = await fetchData(url);
    //console.log(data);

    if (data.meals && data.meals.length > 0) {
      const meal = data.meals[0];

      document.getElementById("meal-name").textContent = meal.strMeal;

      document.getElementById("meal-description").textContent =
        meal.strInstructions;
      document.getElementById("meal-area").textContent = meal.strArea;

      const ingredientsList = document.getElementById("meal-ingredients");
      ingredientsList.innerHTML = "";
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient) {
          const li = document.createElement("li");
          li.textContent = `${ingredient} - ${measure}`;
          ingredientsList.appendChild(li);
        }
      }

      const modal = document.getElementById("meal-modal");
      modal.showModal();
    } else {
      console.error("No details");
    }
  } catch (error) {
    console.error("Error fetching", error);
  }
};

export const fetchMeals = async () => {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

  try {
    const data = await fetchData(url);
    //console.log(data);
    if (data.meals) {
      displaySeafoodList(data.meals);
    } else {
      console.error("No Data For Meals");
    }
  } catch (error) {
    console.error("Error fetching", error);
  }
};

const displaySeafoodList = (meals) => {
  const seafoodListContainer = document.getElementById("seafood-list");
  seafoodListContainer.innerHTML = "";

  meals.forEach((meal) => {
    const listItem = document.createElement("li");
    const mealName = document.createElement("h3");
    mealName.textContent = meal.strMeal;
    mealName.dataset.mealId = meal.idMeal;

    const mealImg = document.createElement("img");
    mealImg.src = meal.strMealThumb;
    mealImg.alt = meal.strMeal;

    listItem.appendChild(mealName);
    listItem.appendChild(mealImg);
    seafoodListContainer.appendChild(listItem);

    listItem.addEventListener("click", () => openModal(meal.idMeal));
  });
};

const closeModal = () => {
  const modal = document.getElementById("meal-modal");
  modal.close();
};

document.getElementById("close-modal").addEventListener("click", closeModal);
