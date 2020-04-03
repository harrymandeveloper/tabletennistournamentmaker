import React, { Component } from "react";

class Pairs extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          newPair: ""
        };
      }

  render () {
    let { pairs } = this.state;
    return pairs.map(pair => {
      return (
        <>
          <ul>
            <li key={pair.join("-")}>{pair.join(" vs ")}</li>
          </ul>
        </>
      );
    });
    }
}

export default Pairs;
