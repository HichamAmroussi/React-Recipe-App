import { useEffect, useState } from "react";

const useFetchRandom = () => {
  const [ randomMeals, setRandomMeals ] = useState(null);
  const [ isPending, setIsPending ] = useState(true);

  const randomMeal1 = 
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(resp => resp.json())
      .then(respData => {
        return respData.meals[0];
      })

  const randomMeal2 = 
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(resp => resp.json())
      .then(respData => {
        return respData.meals[0];
      })

  const randomMeal3 = 
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(resp => resp.json())
    .then(respData => {
      return respData.meals[0];
    })

  const randomMeal4 = 
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(resp => resp.json())
    .then(respData => {
      return respData.meals[0];
    })

    const randomMeal5 = 
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(resp => resp.json())
    .then(respData => {
      return respData.meals[0];
    })

    const randomMeal6 = 
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(resp => resp.json())
    .then(respData => {
      return respData.meals[0];
    })

    const randomMeal7 = 
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(resp => resp.json())
    .then(respData => {
      return respData.meals[0];
    })

    const randomMeal8 = 
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(resp => resp.json())
    .then(respData => {
      return respData.meals[0];
    })

    const randomMeal9 = 
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(resp => resp.json())
    .then(respData => {
      return respData.meals[0];
    })

  useEffect(() => {
    Promise.all([randomMeal1, randomMeal2, randomMeal3, randomMeal4, randomMeal5, randomMeal6, randomMeal8, randomMeal7, randomMeal9]).then((meals) => {
      setIsPending(false);
      setRandomMeals(meals);
    })
  }, [])

  return [ randomMeals, isPending ];
}
 
export default useFetchRandom;