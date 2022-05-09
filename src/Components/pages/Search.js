import { useEffect, useState } from "react";
import MealItem from "../MealItem";

const Search = ({ searchTerm, sentForm, favoriteMeals, setFavoriteMeals }) => {
    const [ meals, setMeals ] = useState(null);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchTerm)
          .then(resp => resp.json())
          .then(respData => {
            setMeals(respData.meals);
          })
    }, [sentForm])

    return (
        <div className="search">
            { meals &&
                <div className="search-result-container">
                    {meals.map((meal) => (
                        <MealItem meal={meal} favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} key={meal.idMeal} />
                    ))}
                </div>
            }
        </div>
    );
}
 
export default Search;