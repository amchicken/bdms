import React from 'react';
import Contact from './about/Contact';
import Intro from './about/Intro';
import SectionBreak from './about/SectionBreak';
import Services from './about/Services'
import News from './about/News';
import Helicopter from './about/Helicopter';

const AboutSection = () => {
    return (
        <div className="about-section">
            <Intro />
            <SectionBreak />
            <Services />
            <News/>
            <Helicopter/>
            <Contact />
        </div>
    )
}

export default AboutSection;