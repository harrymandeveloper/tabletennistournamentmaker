import React, { Component } from "react";
import { Link } from 'react-router-dom';

import '../css/custom.css';

class Header extends Component {

    render() {
        
        return (
            <div className="App root">
                <header className="jumbotron mt-4 mb-0 ttmainheader">
                    <Link className="header__Link_text-decoration-none" to="/"> 
                    <h1>Table Tennis Tournament Maker</h1>
                    </Link>
                </header>
            </div>
        )
    };
}

export default Header;
