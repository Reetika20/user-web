import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Head from './Components/Head/Head';
import About from './Components/About/About';
import Howtobuy from './Components/How to buy/Howtobuy';
import Tokenmonic from './Components/Tokenmonic/Tokenmonic';
 

const App = () => {
  return (
    <div>
      <Navbar />
      <Head id="home" />
      <About id="about" />
      <Howtobuy id="how-to-buy" />
      <Tokenmonic id="tokenmonic" />
    </div>
  );
};

export default App;
