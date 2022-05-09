import { useNavigate } from "react-router-dom";
//Import Components
import FavoriteMeal from "./FavoriteMeal";

const Sidebar = ({ favoriteMeals, setFavoriteMeals }) => {  
    //Set the possible Displayed Meals to a Maximum Number of 5
    const displayedMeals = favoriteMeals.slice(0, 5);
    //useNavigate Hook
    const navigate = useNavigate();

    return (
        <>
            {/*------ Sidebar - Favorites ------*/}
            <aside className="favorite-container">
                <h1>Favorites:</h1>
                <ul className="favorites">
                    {displayedMeals && displayedMeals.map((favoriteMeal) => (
                        <FavoriteMeal favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} favoriteMeal={favoriteMeal} key={favoriteMeal.idMeal} />
                    ))}
                    {
                        favoriteMeals.length > 5 ? <button className="show-more" onClick={() => navigate('/favorites')}><i className="fa-solid fa-ellipsis"></i></button> 
                                                 : ""
                    }
                </ul>
            </aside>
        </>
    );
}
 
export default Sidebar;