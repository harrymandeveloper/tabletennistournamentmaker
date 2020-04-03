import React from 'react';
import Footer from './components/Footer.js';
import FourOhFour from './components/FourOhFour.js';
import Header from './components/Header.js';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
} from "react-router-dom";
import PlayerList from './components/PlayerHandling/PlayerList.js';
import SetupPlayers from './components/PlayerHandling/SetupPlayers.js';
import TournamentTable from './components/TournamentHandling/TournamentTable.js';


function App() {
  
  return(
    <Router>
      <Header />
      <Switch>
  <Route exact path='/'>
    <SetupPlayers />
  </Route>
    <PlayerList />
  <TournamentTable />
    <FourOhFour />
    </ Switch>
      <Footer />
    </Router >
    )

};

export default App;
