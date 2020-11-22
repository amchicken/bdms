import React from 'react';
import logo from '../assets/logo/Logo.png'

const Intro = () => {
    return (
        <div className="intro">
            <img src={logo} alt="Logo"/>
            <div className="bottom">
                <p>
                    BANGKOK<br/>
                    HELICOPTER<br/>
                    SERVICES<br/>
                    <button>RESERVATION</button>
                </p>
            </div>
        </div>
    );
};

export default Intro;