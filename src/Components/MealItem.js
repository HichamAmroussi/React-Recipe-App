import { useEffect, useState } from "react";
//Components
import Popup from "./Popup";

const MealItem = ({ meal, favoriteMeals, setFavoriteMeals }) => {
    const favoriteMealIds = [];
    favoriteMeals.forEach(favoriteMeal => favoriteMealIds.push(favoriteMeal.idMeal))
    const [ favorite, setFavorite ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        setFavorite(favoriteMealIds.includes(meal.idMeal));
    })

    const handleClick = (e) => {
        e.stopPropagation();

        if(favoriteMealIds.includes(meal.idMeal)) {
            setFavorite(false);
            const newFavMeals = favoriteMeals.filter(favMeal => favMeal.idMeal !== meal.idMeal);

            setFavoriteMeals(newFavMeals);
        } else {
            setFavorite(true);
            setFavoriteMeals([...favoriteMeals, meal]);
        }
    }

    return (  
        <>
            <Popup open={isOpen} meal={meal} onClose={() => setIsOpen(false)} />
            <div className="meal-element" onClick={() => setIsOpen(true)}>
                <div className="meal-header2">
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="search-result-image"
                    />
                </div>
                <div className="meal-body2">
                    <h3 className="meal-name2">{meal.strMeal}</h3>
                    {
                        favorite ? <button className="fav-button2 active" onClick={handleClick}><i className="fas fa-heart"></i></button> 
                                : <button className="fav-button2" onClick={handleClick}><i className="fas fa-heart"></i></button>
                    }
                </div>
            </div>
        </>
    );
}
 
export default MealItem;