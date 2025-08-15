import { fetchData } from "./fetch-helpers";

// This function opens the modal and displays the meal details
export const openModal = async (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  try {
    const data = await fetchData(url);
    //console.log(data);

    if (data.meals && data.meals.length > 0) {
      const meal = data.meals[0];

      document.getElementById("meal-name").textContent = meal.strMeal;

      // Convert instructions to numbered steps
      const instructions = meal.strInstructions;
      const steps = instructions
        .split(". ")
        .filter((step) => step.trim().length > 0);

      const descriptionContainer = document.getElementById("meal-description");
      descriptionContainer.innerHTML = ""; // Clear existing content

      // Create ordered list for steps
      const ol = document.createElement("ol");
      steps.forEach((step, index) => {
        const li = document.createElement("li");
        // Remove any existing numbers from the step text
        const cleanStep = step.trim().replace(/^\d+\.\s*/, "");
        li.textContent = cleanStep;
        ol.appendChild(li);
      });

      descriptionContainer.appendChild(ol);

      document.getElementById("meal-area").textContent = meal.strArea;

      // ... existing code for ingredients ...
    } else {
      console.error("No details");
    }
  } catch (error) {
    console.error("Error fetching", error);
  }
};
// This function fetches the meals and displays them in the list
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

// This function displays the meals in the list
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

// This function closes the modal
const closeModal = () => {
  const modal = document.getElementById("meal-modal");
  modal.close();
};

document.getElementById("close-modal").addEventListener("click", closeModal);
