import React, { Component } from "react";

import '../css/custom.css';

class Footer extends Component {

    render() { 

        return ( 
            <>  
                <footer>
                <small className="col-md-12 text-center block"> &copy; 2020  
                    Harry Man. All Rights Reserved.</small> 
                </footer>
            </>
        );
    } // End of render ()

}; 

export default Footer;