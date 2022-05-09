import MealItem from "../MealItem";

const Favorites = ({ favoriteMeals, setFavoriteMeals }) => {
    return (
        <div className="favorites">
            <div className="all-favorites-container">
                {favoriteMeals && favoriteMeals.map((meal) => (
                    <MealItem meal={meal} favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} key={meal.idMeal} />
                ))}
            </div>
        </div>
    );
}
 
export default Favorites;