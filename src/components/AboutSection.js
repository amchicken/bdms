import React from 'react';
import Contact from './Contact';
import Intro from './Intro';
import SectionBreak from './SectionBreak';
import Services from './Services'

const AboutSection = () => {
    return (
        <div className="about-section">
            <Intro />
            <SectionBreak />
            <Services />
            <Contact />
        </div>
    )
}

export default AboutSection;