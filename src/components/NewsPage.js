import React from 'react';
import logo from '../assets/logo/Logo.png';
import border from '../assets/border.svg';
import newsPic1 from '../assets/img/news1.png';

const NewsPage = () => {
    return (
        <div>
            <div className="divNav">
                <img src={logo} alt="Logo" className="divNav-logo"/>
                <div>
                <img src={border} alt="" className="line-section"/>
                    <h1>BHD NEWS</h1>
                </div>
            </div>
            <div className="header-news">
                <div className="content">
                    <img src={newsPic1} alt="helicoper"/>
                    <div>
                        <h4>Bring H145 helicopter in Emergency Medical Service</h4>
                        <p className="time-stamp"> 26 Mar 2020 08:32 AM</p>
                        <p>bring H145 helicopter in Emergency Medical Service configured for static display as part of the product showcase of Airbus Helicopters at Langkawi International Maritime & Aerospace Exhibition (LIMA) 2019, during 26 – 30 March 2019 at the Mahsuri International Exhibition</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;