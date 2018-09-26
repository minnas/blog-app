import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add">Add Blog</Link>
                    </li>
                </ul>
            </nav>
        );
    }            
ß}

export default Navbar;