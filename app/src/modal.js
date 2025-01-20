import { fetchData } from "./utils";
// const fetchMeal = document.querySelector();

export const fetchOneThing = async () => {
  const data = await fetchData(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52959"
  );
  console.log(data);
};

export const fetchAllMeals = async () => {
  const data = await fetchData(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  console.log(data);
};
