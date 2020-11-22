import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="menu-container">
                <div className="menu-top">
                    <div className="lang">
                        <div>
                        <FontAwesomeIcon icon={faBars} className="bun"/>
                        </div>
                        <div><ul>
                            <li>
                                <img src="https://via.placeholder.com/40" alt="EN"/>
                            </li>
                            <li>
                                <img src="https://via.placeholder.com/40" alt="TH"/>
                            </li>
                        </ul></div>
                    </div>
                    <ul className="nav-menu">
                        <li><Link to="/news">NEWS</Link></li>
                        <li><Link to="/">ABOUT US</Link></li>
                        <li><Link to="/news">CONTACT</Link></li>
                        <li><Link to="/">RESERVE</Link></li>
                        <li><Link to="/">INTRANET</Link></li>
                    </ul>
                </div>
                <div className="menu-bottom">
                    line
                    [img]
                </div>
            </div>
        </nav>
    );
};

export default Navbar;