import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine } from '@fortawesome/free-brands-svg-icons'


const SectionBreak = () => {
    return (
        <div className="sectionbreak">
            <p>
                Bangkok Helicopter Services,<br />
                Sky ICU,Flying Limusine,Sightseeing
            </p>
            <div className="line-contact-container">
                [lineContact]
                <p>
                <FontAwesomeIcon className="lineIcon" icon={ faLine } />
                Line Official Account<br />
                @Bangkok Helicopter
                </p>
            </div> 
        </div>
    );
};

export default SectionBreak;