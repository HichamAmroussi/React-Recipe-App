import { Splide } from "@splidejs/react-splide";
//Components
import useFetchRandom from "../useFetchRandom";
import RandomMeal from "../RandomMeal";

const Home = ({ favoriteMeals, setFavoriteMeals }) => {
    const [ randomMeals, isPending ] = useFetchRandom();

    return (
        <div className="home">
            { isPending && <div></div> }
            { randomMeals &&
                <div className="discover-new-meal">
                    <h3 className="title">Discover new meals</h3>
                    <Splide
                        options={ {
                        rewind: true,
                        width : '90%',
                        gap   : '1rem',
                        } }
                    >
                        {randomMeals.map((meal) => (
                            <RandomMeal meal={meal} favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} key={meal.idMeal} />
                        ))}
                    </Splide>
                </div> 
            }
        </div>
    )
}
 
export default Home;