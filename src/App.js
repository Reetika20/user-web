import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Head from './Components/Head/Head';
import About from './Components/About/About';
import Howtobuy from './Components/How to buy/Howtobuy';
import Tokenmonic from './Components/Tokenmonic/Tokenmonic';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Head />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to-buy" element={<Howtobuy />} />
        <Route path="/tokenmonic" element={<Tokenmonic />} />
      </Routes>
    </Router>
  );
};

export default App;
