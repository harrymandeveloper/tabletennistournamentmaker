import React from 'react';
import Footer from './components/Footer.js';
import FourOhFour from './components/FourOhFour.js';
import Header from './components/Header.js';
import Player from './components/Player.js';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
} from "react-router-dom";
import ListPlayers from './components/ListPlayers.js';

function App() {
  
  return(
    <Router>
      <Header />
      <Switch>
  <Route exact path='/'>
    <Player />
  </Route>
    <ListPlayers />
    <FourOhFour />
    </ Switch>
      <Footer />
    </Router >
    )

};

export default App;
