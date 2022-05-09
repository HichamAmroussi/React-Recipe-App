import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
//Import Components
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from './Components/pages/Home';
import Search from './Components/pages/Search';
import Favorites from './Components/pages/Favorites';

function App() { 
  const [searchTerm, setSearchTerm] = useState("");
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  const [sentForm, setSentForm] = useState(false);

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
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} sentForm={sentForm} setSentForm={setSentForm} />
        <Sidebar favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} />
        <Routes>
          <Route path="/" exact element={<Home favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
          <Route path="/search" element={<Search searchTerm={searchTerm} sentForm={sentForm} favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} />} />
          <Route path="/favorites" element={<Favorites favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
