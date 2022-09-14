import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
//Import Components
import FavoriteMeal from "./FavoriteMeal";

const Sidebar = ({ favoriteMeals, setFavoriteMeals }) => {
    //useNavigate Hook
    const navigate = useNavigate();
    // Variables
    const [displayedMeals, setDisplayedMeals] = useState([]);
    const [button, setButton] = useState(false);

    const handeClick = () => {
        setButton(!button);
    }

    const showButton = () => {
        if(window.innerHeight <= 768) {
            //Set the possible Displayed Meals to a Maximum Number of 3
            const meals = favoriteMeals.slice(0, 3);
    
            setDisplayedMeals(meals);
        } else if(window.innerHeight <= 900) {
            //Set the possible Displayed Meals to a Maximum Number of 4
            const meals = favoriteMeals.slice(0, 4);
    
            setDisplayedMeals(meals);
        } else {
            //Set the possible Displayed Meals to a Maximum Number of 5
            const meals = favoriteMeals.slice(0, 5);
    
            setDisplayedMeals(meals);
        }

        if(window.innerWidth <= 500) {
            setButton(true);
        } else {
            setButton(false);
        }
    }

    useEffect(() => {
        showButton();
    }, [favoriteMeals])

    window.addEventListener('resize', showButton);

    return (
        <>
            {/*------ Sidebar - Favorites ------*/}
            <aside className="favorite-container">
                <h1>Favorites:</h1>
                <ul className="favorites">
                    {displayedMeals && !button && displayedMeals.map((favoriteMeal) => (
                        <FavoriteMeal favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} favoriteMeal={favoriteMeal} key={favoriteMeal.idMeal} />
                    ))}
                    {
                        favoriteMeals.length > displayedMeals.length ? <button className="show-more" onClick={() => navigate('/favorites')}><i className="fa-solid fa-ellipsis"></i></button> 
                                                 : ""
                    }
                    <button className="show-menu-btn" onClick={handeClick}>
                        <i className={`fa-solid ${button? "fa-angle-down" : "fa-angle-up"}`}></i>
                    </button>
                </ul>
            </aside>
        </>
    );
}
 
export default Sidebar;