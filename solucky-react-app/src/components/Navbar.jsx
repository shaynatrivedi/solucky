import React from "react";  
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () =>{
    const location = useLocation();
    const isEventsPage = location.pathname === '/events'

    return(
        <nav className={`navbar ${isEventsPage ? 'white-navbar' : ''}`}>
            <div className="header text-dm-serif">
                <h1 className="title">solucky</h1>
                <h3 className="titleCaption"><i>est.2020</i></h3>
            </div>
           
           <ul className="navList">
            <li><Link to="/shop" className={location.pathname === '/shop' ? 'active':''}>shop</Link></li>
            <li><Link to="/magazine" className={location.pathname === '/magazine' ? 'active':''}>magazine</Link></li>
            <li><Link to="/media" className={location.pathname === '/media' ? 'active':''}>media</Link></li>
            <li><Link to="/collabs" className={location.pathname ==='/collabs' ? 'active':''}>collabs</Link></li>
            <li><Link to="/events" className={location.pathname === '/events' ? 'active':''}>events</Link></li>
            <li><Link to="/team" className={location.pathname === '/team' ? 'active':''}>team</Link></li>
            <li><Link to="/about" className={location.pathname ==='/about' ? 'active':''}>about</Link></li>
           </ul>
           
        </nav>
    );
}

export default Navbar