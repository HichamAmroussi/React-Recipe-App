import { useState } from "react";
import { Splide } from "@splidejs/react-splide";
//Components
import useFetchRandom from "../useFetchRandom";
import RandomMeal from "../RandomMeal";
import { useEffect } from "react";

const Home = ({ favoriteMeals, setFavoriteMeals }) => {
    const [ trendingMeals, isPending ] = useFetchRandom();
    const [ randomMeals , isPending2 ] = useFetchRandom();
    const [ tips, setTips ] = useState(0);

    useEffect(() => {  
        if(JSON.parse(localStorage.getItem('favMeals')).length !== 0) {
            setTips(2);
        }
    }, [])

    return (
        <>
            { tips !== 2 && 
                <figure className="cloud-container">
                    <div className="cloud"></div>
                    { tips === 0 && <p className="notice">- Click on the <i className="fas fa-heart"></i> and the recipe will be added to your favorites.</p> }
                    { tips === 1 && <p className="notice">- Your favorite Recipes will appear on the right bar, you can access them whenever you want.</p> }
                    <button className="close-cloud" onClick={() => setTips(2)}><i className="fa-solid fa-circle-xmark"></i></button>
                </figure>
            }

            <div className="home">        
                <div className="discover-new-meal">
                    <h3 className="title">Trending Recipes</h3>
                    { isPending && <div className="circle"></div> }
                    { randomMeals &&
                        <Splide
                            options={ {
                                perPage: 4,
                                pagination: false,
                                drag: 'free',
                                gap   : '3rem',
                                breakpoints: {
                                    900: {
                                        perPage: 2,
                                        gap: "1rem"
                                    },
                                    1200: {
                                        perPage: 3
                                    }
                                }
                            } }
                        >
                            {trendingMeals.map((meal) => (
                                <RandomMeal meal={meal} favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} tips={tips} setTips={setTips} key={meal.idMeal} />
                            ))}
                        </Splide>
                    }
                </div>

                <div className="discover-new-meal">
                    <h3 className="title">Discover New Meals</h3>
                    { isPending2 && <div className="circle"></div> }
                    { randomMeals &&
                        <Splide
                            options={ {
                                perPage: 5,
                                pagination: false,
                                drag: 'free',
                                gap   : '3rem',
                                breakpoints: {
                                    900: {
                                        perPage: 3,
                                        gap: "1rem"
                                    },
                                    1200: {
                                        perPage: 4
                                    }
                                }
                            } }
                        >
                            {randomMeals.map((meal) => (
                                <RandomMeal meal={meal} favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} tips={tips} setTips={setTips} key={meal.idMeal} />
                            ))}
                        </Splide>
                    }
                </div>
            </div>
        </>
    )
}
 
export default Home;