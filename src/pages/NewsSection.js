import React from 'react';
import logo from '../assets/logo/Logo.png';
import border from '../assets/border.svg';
import newsPic1 from '../assets/img/news1.png';
import newsPic2 from '../assets/img/news2.png';
import newsPic3 from '../assets/img/news3.png';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

const NewsSection = () => {
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
                        <p>bring H145 helicopter in Emergency Medical Service configured for static display as part of the product showcase of Airbus Helicopters at Langkawi International Maritime & Aerospace Exhibition (LIMA) 2019, during 26 – 30 March 2019 at the Mahsuri International Exhibition</p>
                        <p className="time-stamp"> 26 Mar 2020 08:32 AM</p>
                        <div className="link-group">
                            <Link to='/news/id/1'>MORE DETAILS</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news">
            <div className="content-container">
                <div className="content">
                    <img src={newsPic2} alt="helicoper"/>
                    <div>
                        <h4>The Civil Aviation Authority of Thailand (CAAT), led by Mr. Chula Sukmanop – Director General</h4>
                        <p>The Civil Aviation Authority of Thailand (CAAT), led by Mr. Chula Sukmanop – Director General, today announced that Bangkok Helicopter Services Co., Ltd (BHD), has been successfully re-certified to the international safety standards of ICAO, and presented with re-certification of Air Operator Certificate (AOC). The event was participated by Mr. Kirati Kraiprasit, Deputy Managing Director – Operations, on behalf of BHD’s management and colleague to receive AOC re-certification as part of CAAT’s re-certification program.</p>
                        <p className="time-stamp">26 Mar 2020 08:32 AM</p>
                        <div className="link-group">
                            <Link to='/news/id/1'>MORE DETAILS</Link>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <img src={newsPic3} alt="helicoper"/>
                    <div>
                        <h4>H145 helicopter in Emergency Medical Service configured for static display as part of the product showcase</h4>
                        <p>bring H145 helicopter in Emergency Medical Service configured for static display as part of the product showcase of Airbus Helicopters at Langkawi International Maritime & Aerospace Exhibition (LIMA) 2019, during 26 – 30 March 2019 at the Mahsuri International Exhibition Center, Langkawi, Malaysia. LIMA is one of the largest shows of its kind within the Asia Pacific region for maritime and aerospace industries. It serves as an ideal platform for industry stakeholders to engage and expand network. With a major presence – the largest international exhibitor “Airbus” covers its entire range of commercial products and services.</p>
                        <p className="time-stamp"> 26 Mar 2020 08:32 AM</p>
                        <div className="link-group">
                            <Link to='/news/id/1'>MORE DETAILS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Contact/>
        </div>
    );
};

export default NewsSection;