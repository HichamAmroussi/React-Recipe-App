import { useState } from "react";
//Components
import Popup from "./Popup";

const FavoriteMeal = ({ favoriteMeals, setFavoriteMeals, favoriteMeal }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (  
        <>
            <Popup open={isOpen} meal={favoriteMeal} onClose={() => setIsOpen(false)} />
            <li className="favorite-meal" onClick={() => setIsOpen(true)}>
                <img
                    src={favoriteMeal.strMealThumb}
                    alt={favoriteMeal.strMeal}
                    className="fav-meal-image"
                /><p className="names">{favoriteMeal.strMeal}</p>
                <button 
                    className="remove-fav" 
                    onClick={(e) => {
                        e.stopPropagation();
                        setFavoriteMeals(favoriteMeals.filter((meal) => meal.idMeal !== favoriteMeal.idMeal));
                    }}
                ><i className="fa-solid fa-circle-xmark"></i></button>
            </li>
        </>
    );
}
 
export default FavoriteMeal;