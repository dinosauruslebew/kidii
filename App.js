import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import About from './components/About'; 
import Menu from './components/Menu'; 
import Contact from './components/Contact';
import Admin from './components/Admin';
import Makanan from './components/Menu';
import Minuman from './components/Menu';
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div><Home /><About /><Menu/> <Contact/></div>}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/makanan" element={<Makanan />} />
        <Route path="/minuman" element={<Minuman />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;

