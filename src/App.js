import React from 'react';
import Footer from './components/Footer.js';
import FourOhFour from './components/FourOhFour.js';
import Header from './components/Header.js';
import Player from './components/Player.js';


import {
  BrowserRouter as Router, 
  Switch, 
  // Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
      <Header />
      <Switch>
    <Player />
    <FourOhFour />
    </ Switch>
      <Footer />
      </div>
    </Router >
    )

};

export default App;
