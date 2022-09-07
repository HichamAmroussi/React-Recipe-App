import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
//Import Components
import FavoriteMeal from "./FavoriteMeal";

const Sidebar = ({ favoriteMeals, setFavoriteMeals }) => {
    const [button, setButton] = useState(false);
    //Set the possible Displayed Meals to a Maximum Number of 5
    const displayedMeals = favoriteMeals.slice(0, 5);
    //useNavigate Hook
    const navigate = useNavigate();

    const handeClick = () => {
        setButton(!button);
    }

    const showButton = () => {
        if(window.innerWidth <= 500) {
            setButton(true);
        } else {
            setButton(false);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

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
                        favoriteMeals.length > 5 ? <button className="show-more" onClick={() => navigate('/favorites')}><i className="fa-solid fa-ellipsis"></i></button> 
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