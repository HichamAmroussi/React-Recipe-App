import ReactDOM from "react-dom" 

const Popup = ({ open, meal, onClose }) => {
    const ingredients = [];

    //Making the Ingredients Array using the API Data
    for(let i = 1; i <= 20; i++) {
        const obj = {};
        if(meal['strIngredient' + i]) {
            obj["id"] = Math.random()*10;
            obj["ingred"] = meal['strIngredient' + i] + ' - ' + meal['strMeasure' + i];
            ingredients.push(obj);
        } else {
            break;
        }
    }

    if(!open) return null;
    return ReactDOM.createPortal( 
        <div className="popup-container" onClick={onClose}>
            <button title="Click to Close Popup" className="remove-popup" onClick={onClose}><i className="fas fa-remove"></i></button>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <h1 className="meal-title">{meal.strMeal}</h1>
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="meal-image"
                />
                <h3>Ingredients:</h3>
                <ul className="ingredients-list">
                    {/*------ li (Ingredients and Measures) ------*/}
                    {ingredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.ingred}</li>
                    ))}
                </ul>
                <h3>Instructions:</h3>
                <p className="meal-recipe">{meal.strInstructions}</p>
            </div>
        </div>,
    document.getElementById('portal')
    );
}
 
export default Popup;