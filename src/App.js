import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
//Import Components
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from './Components/pages/Home';
import Search from './Components/pages/Search';
import Favorites from './Components/pages/Favorites';

function App() { 
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  useEffect(() => {
    getLocalFavMeals();
  }, [])

  useEffect(() => {
    saveLocalFavMeals();
  }, [favoriteMeals])

  //Functions
  const saveLocalFavMeals = () => {
    localStorage.setItem('favMeals', JSON.stringify(favoriteMeals));
  }

  const getLocalFavMeals = () => {
    if(localStorage.getItem('favMeals')) {
      const localFavMeals = JSON.parse(localStorage.getItem('favMeals'));
      setFavoriteMeals(localFavMeals);
    } else {
      const localFavMeals = [];
      setFavoriteMeals(localFavMeals);
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} />
        <Routes>
          <Route path="/" exact element={<Home favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} />} />
          <Route path="/search/:term" element={<Search favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} />} />
          <Route path="/favorites" element={<Favorites favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
