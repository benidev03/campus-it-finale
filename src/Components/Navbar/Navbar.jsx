import './navbar.css';
import React, { useState } from 'react';

import {SiYourtraveldottv} from 'react-icons/si';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {AiOutlineMenuUnfold} from 'react-icons/ai';


function Navbar(props) {

    const [active, setActive] = useState('navBar');

    //active menu burger
    const showNavbar = () => {
        setActive('navBar activeNavbar');
    }

    // remove menu burger
    const removeNavbar = () => {
        setActive('navBar');
    }

    // aggiorna URL con il nome della pagina
    // con il metodo preventDefault() si cambia pagina senza ricaricare l'URL
    const handleClick = (event, page) => {
        event.preventDefault();
        props.setCurrentPage(page);
        window.history.pushState({}, page, `/${page}`);
      };

    return (
        <section className="navbar__section">
            <div className="header">
                <div className="logoDiv">
                    <a href="/" className="logo">
                        <h1 className="flex"><SiYourtraveldottv className="icon"/>
                        Campus IT
                        </h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="nav__lists flex">
                        <li className="navItem">
                            <a href="/" className="nav__links" onClick={(event) => handleClick(event, 'home')}>
                            Home
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="/Sercives" className="nav__links" onClick={(event) => handleClick(event, 'services')}>
                            Services
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="/About" className="nav__links" onClick={(event) => handleClick(event, 'about')}>
                            About
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="/Contact" className="nav__links" onClick={(event) => handleClick(event, 'contact')}>
                            Contact
                            </a>
                        </li>

                        <div className="header__btns flex">
                            <button className="btn login__btn">
                                <a href="/Login">Login</a>
                            </button>
                            <button className="btn">
                                <a href="/Register">Sign Up</a>
                            </button>
                        </div>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiOutlineCloseCircle className="icon" />
                    </div>
                </div>
                <div onClick={showNavbar} className="menuNavbar">
                        <AiOutlineMenuUnfold className="icon" />
                </div>
            </div>
        </section>
    );
}

export default Navbar;