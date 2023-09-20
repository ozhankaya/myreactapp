import './App.css';
import './responsive.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout'
import React from 'react';
import Menu from './Pages/Menu';
import Reservation from './Pages/Reservation';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reservation" element={<Reservation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;