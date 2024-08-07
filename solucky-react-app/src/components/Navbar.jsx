import React from "react";  
import './Navbar.css';

const Navbar = () =>{
    return(
        <nav className="navbar">
            <div className="header">
                <h1>solucky</h1>
                <h3>est.2020</h3>
            </div>
           
           <ul>
            <li>shop</li>
            <li>collabs</li>
            <li>magazine</li>
            <li>team</li>
            <li>about</li>
           </ul>
        </nav>
    );
}

export default Navbar