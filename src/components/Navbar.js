import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import th from '../assets/icon/th.png';
import en from '../assets/icon/en.png';
import line from '../assets/img/line.png';

const Navbar = ({isReservationClose,setIsReservationClose,isNavCollapsed,setIsNavCollapsed}) => {
    const toggleHandle = () => setIsNavCollapsed(!isNavCollapsed);
    const closeHandle = () => setIsReservationClose(!isReservationClose);
    return (
        <div className="nav">
            <FontAwesomeIcon onClick={toggleHandle} icon={faBars} className="toggle-nav"/>
            <nav className={`${isNavCollapsed ? '' : 'collapse'}`}>
                <div className="menu-container">
                    <div className="menu-top">
                        <div className="lang">
                            <div>
                            <FontAwesomeIcon icon={faBars} className="bun" onClick={toggleHandle}/>
                            </div>
                            <div>
                                <ul>
                                    <li><img src={en} alt="EN"/></li>
                                    <li><img src={th} alt="TH" id="disable-lang"/></li>
                                </ul>
                            </div>
                        </div>
                        <ul className="nav-menu">
                            <li><Link to="/news">NEWS</Link></li>
                            <li><Link to="/">ABOUT US</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                            <li><p onClick={closeHandle} id="nav-reserve">RESERVE</p></li>
                            <li><Link to="/">INTRANET</Link></li>
                        </ul>
                    </div>
                    <div className="menu-bottom">
                        <img src={line} alt="QRline"/>
                        <p>Line Official Account</p>
                        <h2>@BDMSHelicopter</h2>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;