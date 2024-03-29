import { useEffect, useState } from "react";
import { SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
//Components
import Popup from "./Popup";

const RandomMeal = ({ meal, favoriteMeals, setFavoriteMeals, tips, setTips }) => { 
    const favoriteMealIds = [];
    favoriteMeals.forEach(favoriteMeal => favoriteMealIds.push(favoriteMeal.idMeal))
    const [ favorite, setFavorite ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        if(favoriteMeals.length === 1 && tips === 0) {
            setTips(1);
        }
    }, [favoriteMeals])

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
        <SplideSlide>
            <Popup open={isOpen} meal={meal} onClose={() => setIsOpen(false)} />
            <div className="meal" onClick={() => setIsOpen(true)}>
                <div className="meal-header">
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="random-meal-image"
                    />
                </div>
                <div className="meal-body">
                    <h3 className="meal-name">{meal.strMeal}</h3>
                    {
                        favorite ? <button onClick={handleClick} className="fav-button active"><i className="fas fa-heart"></i></button> 
                                 : <button onClick={handleClick} className="fav-button"><i className="fas fa-heart"></i></button>
                    }
                </div>
            </div>
        </SplideSlide>
    );
}
 
export default RandomMeal;