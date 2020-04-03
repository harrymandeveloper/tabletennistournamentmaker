import React, { useState } from "react";
import CreateNewPlayer from './CreateNewPlayer'
import PlayerList from  './PlayerList'
// import { Button } from 'react-bootstrap';

const SetupPlayers = ( { handleSubmit } ) => {
    
    const [playerList, setPlayerList] = useState([])

    const addPlayer = (playerName) => {
        setPlayerList([...playerList, playerName])
    }

    // Only display the option to generate a tournament 
    // if it's possible to generate pairs, 
    // otherwise a tournament won't be feasible.

    return (
        <>
          <CreateNewPlayer addPlayer = { addPlayer } />
          <PlayerList players= { playerList } />
          {/* {playerList.length === 0 || playerList.length % 2 !== 0 ? null 
            : (<>
          <Button variant="success" 
          onClick={() => handleSubmit(playerList)}>
            Generate Tournament
          </Button></>)} */}
        </>
  );
}
 
export default SetupPlayers;
