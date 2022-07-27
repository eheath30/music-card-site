import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/artists">Artists</Link>
            <Link to="/newcardpage">New Artist</Link>
        </nav>
    )
}

export default Header;