import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Logo</NavLink>
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink exact to="/todo">Todo</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navigation;
