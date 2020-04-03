import React, { Component } from "react";
import { Button, Form, Row } from 'react-bootstrap';


class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPlayer: "",
      list: [],
      pairs: ["", ""]
    };
  }

  updateInput(key, value) {
    // update react's state
    this.setState({
      [key]: value
    });
  }

  addPlayer() {
    const newPlayer = {
      id: 1 + Math.random(),
      value: this.state.newPlayer.slice()
    };

    // copy current list of players
    const list = [...this.state.list];

    // add the new player to the list
    list.push(newPlayer);

    // update state with new list, reset the new player input
    this.setState({
      list,
      newPlayer: ""
    });
  }

  deletePlayer(id) {
    // copy current list of players
    const list = [...this.state.list];
    // filter out the player being deleted
    const updatedList = list.filter(player => player.id !== id);

    this.setState({ list: updatedList });
  }

  createPairs() {
    const list = [...this.state.list];
    
    list.sort(() => 0.5 - Math.random());

    const pairs = [];

    // as we need at least players to form a pair
    while (list.length >= 2) {
      const pair = [list.pop(), list.pop()];

      // Current pair
      console.log("Single pair", pair);

      // Save current pair
      pairs.push(pair);
    }

    // All pairs
    console.log("All pairs", pairs);
    console.log(pairs[0][0].id);

    this.setState({
      pairs
    });
  }

  render() {
    return (
      <div className="App container">
        <div>
          <Form>
            <Form.Group>
              <Form.Label>Add new players...</Form.Label>
              <Form.Control 
                type="player"
                placeholder="Add your player here"
                value={this.state.newPlayer}
                onChange={ 
                  e => this.updateInput("newPlayer", e.target.value)}
              />
              <Button variant="primary" onClick={() => this.addPlayer()}>Add Players</Button>
              <br />
              <ul>

                {this.state.list.map(player => {
                  return (
                    <li key={player.id}>
                      {player.value}
                      <Button 
                        variant="danger" 
                        onClick={() => this.deletePlayer(player.id)}>
                        Delete Player
                      </Button>
                    </li>
                  );
                })}

                {this.state.list.length === 0 || this.state.list.length % 2 !== 0 ? null 
                : ( <>
                      <br />
                      <Button variant="primary" 
                      onClick={() => this.createPairs(this.state.list)}>
                        Create Pairs
                      </Button>
                    </>
                )}
                <br />
              </ul>
            </Form.Group>
            <Row className="justify-content-center">
                    <Button variant="success" 
                        // onClick={handleSubmit} 
                        // variant="primary" 
                        // type="submit"
                        >Generate Tournament
                    </Button>
                </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default Player;
