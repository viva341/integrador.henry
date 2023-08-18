import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import style from './App.module.css';

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'Santiagoloaiza@yahoo.com';
  const password = '123Santi';

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name && !characters.find((char) => char.id === data.id)) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div
      className="App"
      style={{
        padding: '25px',
        backgroundImage: 'url(https://poptv.orange.es/wp-content/uploads/sites/3/2018/03/Rick-and-Morty-3p.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className={style.nav}>
        {pathname !== '/' && <Nav onSearch={onSearch} />}
        <Routes>
          <Route path="/" element={<Form login={login} />} />
        </Routes>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <Routes>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/about" element={<about />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
