import React from 'react'
import './nav.css'

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-custom fixed-top navm">
            <div class="container-fluid">
                <img class="navbar-brand" src='https://shorturl.at/mEF02' height={40}></img>
                <a class="navbar-brand" href="#">Food-App</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link link-warning" href="#">Breakfast</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link-warning" href="#">Lunch</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link-warning" href="#">Dinner</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle link-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Speciality
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Indian</a></li>
                                <li><a class="dropdown-item" href="#">Italian</a></li>
                                <li><a class="dropdown-item" href="#">Chinese</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search Food" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
