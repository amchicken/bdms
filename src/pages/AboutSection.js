import React from 'react';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import SectionBreak from '../components/SectionBreak';
import Services from '../components/Services'
import News from '../components/News';
import Helicopter from '../components/Helicopter';

const AboutSection = () => {
    return (
        <div className="about-section">
            <Intro/>
            <SectionBreak />
            <Services />
            <News/>
            <Helicopter/>
            <Contact />
        </div>
    )
}

export default AboutSection;