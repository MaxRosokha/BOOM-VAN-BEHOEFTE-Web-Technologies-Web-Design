import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './style.css';
import Header from './components/Header/header';
import MainContent from './components/Home/home';
import Footer from './components/footer/footer';
import Loading from './components/Loading/Loading';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import FavoritePage from './components/Favorite/favoritePage';
import Account from './components/Account/Account';
import Colections from './components/Colections/Colections';


const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // отримуємо поточний шлях

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Умовно рендеримо Header і Footer тільки на головній сторінці
  const isMainPage = location.pathname === '/';

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {isMainPage && <Header />}
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/favoritePage" element={<FavoritePage/>} />
            <Route path="/account" element={<Account />} /> {/* Додаємо маршрут для аккаунту */}
            <Route path="/" element={<Account />} />
            <Route path="/favoritePage" element={<FavoritePage />} />
            <Route path="/collections" element={<Colections />} />

          </Routes>
          {isMainPage && <Footer />}
        </>
      )}
    </div>
  );
};

export default App;
