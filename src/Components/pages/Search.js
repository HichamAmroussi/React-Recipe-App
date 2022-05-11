import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealItem from "../MealItem";

const Search = ({favoriteMeals, setFavoriteMeals }) => {
    const [ meals, setMeals ] = useState(null);
    const { term } = useParams();

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term)
          .then(resp => resp.json())
          .then(respData => {
            setMeals(respData.meals);
          })
    }, [term])

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