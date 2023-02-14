import React, { useState } from 'react';
import './navbar.css';
import {SiYourtraveldottv} from 'react-icons/si';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {AiOutlineMenuUnfold} from 'react-icons/ai';


function Navbar() {

    const [active, setActive] = useState('navBar');

    //active menu burger
    const showNavbar = () => {
        setActive('navBar activeNavbar');
    }

    // remove menu burger
    const removeNavbar = () => {
        setActive('navBar');
    }

    return (
        <section className="navbar__section">
            <div className="header">
                <div className="logoDiv">
                    <a className="logo">
                        <h1 className="flex"><SiYourtraveldottv className="icon"/>
                        Campus IT
                        </h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="nav__lists flex">
                        <li className="navItem">
                            <a href="#" className="nav__links">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="nav__links">Services</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="nav__links">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="nav__links">Contact</a>
                        </li>

                        <div className="header__btns flex">
                            <button className="btn login__btn">
                                <a href="#">Login</a>
                            </button>
                            <button className="btn">
                                <a href="#">Sign Up</a>
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