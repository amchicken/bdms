import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine } from '@fortawesome/free-brands-svg-icons'
import line from '../assets/img/line.png';
import border from '../assets/border.svg'

const SectionBreak = () => {
    return (
        <div className="sectionbreak">
            <p>
                Bangkok Helicopter Services,<br />
                Sky ICU,Flying Limusine,Sightseeing
            </p>
            <div className="line-contact-container">
                <img src={border} alt="" className="line-section"/>
                <img src={line} alt="QRline"/>
                <div>
                <p>
                    <FontAwesomeIcon className="lineIcon" icon={ faLine } />
                    Line Official Account<br />
                    </p>
                    <h2>@Bangkok Helicopter</h2>
                </div>
            </div> 
        </div>
    );
};

export default SectionBreak;