import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm) {
            navigate('/search/' + searchTerm);
        }
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleClick = () => {
        setSearchTerm("");
    }

    return (  
        <header className="search-container">
            {/*----- Website Logo ------*/}
            <Link to="/" onClick={handleClick}>
                <div className="website-name">
                    <i className="fa-solid fa-drumstick-bite"></i>
                    <h1>Tasty Meals</h1>
                </div>
            </Link>

            {/*----- Search Bar ------*/}
            <form className="search-bar" onSubmit={handleSubmit}>
                <button className="search-button"><i className="fas fa-search"></i></button>
                <input 
                    type="text" 
                    className="input-element" 
                    placeholder="Look for a meal" 
                    onChange={handleChange}
                    value={searchTerm}
                />
            </form>
        </header>
    );
}
 
export default Navbar;
