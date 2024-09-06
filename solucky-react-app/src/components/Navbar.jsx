import React from "react";  
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () =>{
    return(
        <nav className="navbar">
            <div className="header">
                <h1 className="title">solucky</h1>
                <h3 className="titleCaption">est.2020</h3>
            </div>
           
           <ul className="navList">
            <li><Link to="">shop</Link></li>
            <li><Link to="">magazine</Link></li>
            <li><Link to="">media</Link></li>
            <li><Link to="">collabs</Link></li>
            <li><Link to="">events</Link></li>
            <li><Link to="">team</Link></li>
            <li><Link to="/about">about</Link></li>
           </ul>
        </nav>
    );
}

export default Navbar