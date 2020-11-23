import React from 'react';
import border from '../assets/border.svg';
import newsPic from '../assets/img/news1.png'
import {Link} from 'react-router-dom';

const News = () => {
    return (
        <div className="news">
            <div className="banner">
                <div><img src={border} alt="" className="line-section"/>
                <h1>BHD NEWS</h1></div>
                <Link to ='/news'>ALL NEWS</Link>
            </div>
            <div className="content-container">
                <div className="content">
                    <img src={newsPic} alt="helicoper"/>
                    <div>
                        <h4>Bring H145 helicopter in Emergency Medical Service</h4>
                        <p>bring H145 helicopter in Emergency Medical Service configured for static display as part of the product showcase of Airbus Helicopters at Langkawi International Maritime & Aerospace Exhibition (LIMA) 2019, during 26 – 30 March 2019 at the Mahsuri International Exhibition</p>
                        <p className="time-stamp"> 26 Mar 2020 08:32 AM</p>
                        <div className="link-group">
                            <Link to='/news/id/1'>MORE DETAILS</Link>
                            <div>
                                <button>O</button>
                                <button>O</button>
                                <button>O</button>
                                <button>O</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;