import React from "react";

import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div >
            <h1 variant="h1">
                MySite
            </h1>
            <Link to="/">
                <div variant="h5">HOME</div>
            </Link>
            <Link to="/characters">
                <div variant="h5">CHARACTERS</div>
            </Link>
            <Link to="/nations">
                <div variant="h5">NATIONS</div>
            </Link>            
            <Link to="/roles">
                <div variant="h5">ROLES</div>
            </Link>
        </div>
    );
}
export default Navbar;