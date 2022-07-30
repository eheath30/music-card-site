import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';

function Header() {
    const navigate = useNavigate();



    return (
        <nav className='nav navbar-fixed-top bg-light shadow rounded justify-content-center align-items-center'>
            <NavLink className={({ isActive }) => (isActive ? 'selected nav-link text-dark navItem text-muted ' : 'nav-link text-dark navItem')} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'selected nav-link text-dark navItem text-muted ' : 'nav-link text-dark navItem')} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'selected nav-link text-dark navItem text-muted ' : 'nav-link text-dark navItem')} to="/artists">Artists</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'selected nav-link text-dark navItem text-muted ' : 'nav-link text-dark navItem')} to="/newcardpage">New Artist</NavLink>
            <button className="btn btn-danger btn-lg mx-3" onClick={()=>navigate(-1)}>Back</button>
        </nav>
    )
}


export default Header;
