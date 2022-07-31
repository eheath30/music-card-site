import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
        return (
<header className="p-3 mb-3 border-bottom">
    <div className="container-fluid px-5">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <nav className='nav navbar navbar-expand-sm me-lg-auto mb-2 justify-content-center'>
        <button class="navbar-toggler mt-1 mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon pt-2"><i class="fa-solid fa-bars"></i></span>
    </button>
    <div className='collapse navbar-collapse'>
    <ul class="navbar-nav me-auto">
    <li class="nav-item">
            <NavLink className={({ isActive }) => (isActive ? 'selected nav-link text-dark navItem text-muted ' : 'nav-link text-dark navItem')} to="/">Home</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className={({ isActive }) => (isActive ? 'selected nav-link text-dark navItem text-muted ' : 'nav-link text-dark navItem')} to="/about">About</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className={({ isActive }) => (isActive ? 'selected nav-link text-dark navItem text-muted ' : 'nav-link text-dark navItem')} to="/artists">Artists</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className={({ isActive }) => (isActive ? 'selected nav-link text-dark navItem text-muted ' : 'nav-link text-dark navItem')} to="/newcardpage">Add Artist</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className={({ isActive }) => (isActive ? 'selected nav-link text-dark navItem text-muted ' : 'nav-link text-dark navItem')} to="/search">Search</NavLink>
            </li>
            <li class="nav-item">


            <button className="btn btn-danger btn my-2 ms-4" onClick={()=>navigate(-1)}>Back</button>
            </li>
            </ul>
            </div>
            </nav>
        <div class="text-end">
          <button type="button" class="btn btn-primary me-2">Login</button>
          <button type="button" class="btn btn-success">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    )}
