import React from 'react';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import SectionBreak from '../components/SectionBreak';
import Services from '../components/Services'
import News from '../components/News';
import Helicopter from '../components/Helicopter';

const AboutSection = ({isReservationClose,setIsReservationClose}) => {
    return (
        <div className="about">
            <Intro isReservationClose={isReservationClose} setIsReservationClose={setIsReservationClose}/>
            <SectionBreak />
            <Services />
            <News/>
            <Helicopter isReservationClose={isReservationClose} setIsReservationClose={setIsReservationClose}/>
            <Contact />
        </div>
    )
}

export default AboutSection;