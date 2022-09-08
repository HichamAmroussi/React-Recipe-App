import { useState } from "react";
import { Splide } from "@splidejs/react-splide";
//Components
import useFetchRandom from "../useFetchRandom";
import RandomMeal from "../RandomMeal";
import { useEffect } from "react";

const Home = ({ favoriteMeals, setFavoriteMeals }) => {
    const [ randomMeals, isPending ] = useFetchRandom();
    const [ tips, setTips ] = useState(0);

    useEffect(() => {
        if(favoriteMeals.length !== 0) {
            setTips(2);
        }
    }, [])

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
                            <RandomMeal meal={meal} favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} setTips={setTips} key={meal.idMeal} />
                        ))}
                    </Splide>

                    { tips !== 2 && <figure className="cloud-container">
                        <div className="cloud"></div>
                        { tips === 0 && <p className="notice">- Click on the <i className="fas fa-heart"></i> and the recipe will be added to your favorites.</p> }
                        { tips === 1 && <p className="notice">- Your favorite Recipes will appear on the right bar, you can access them whenever you want.</p> }
                    </figure>
                    }
                </div> 
            }
        </div>
    )
}
 
export default Home;