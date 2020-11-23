import React from 'react';
import banner from '../assets/img/banner.png'
import border from '../assets/border.svg'

const Services = () => {
    return (
        <div>
            <div className="services">
                <div className="services-content">
                    <div>
                    <h1>SERVICES</h1>
                    <img src={border} alt="" className="line-section"/>
                    </div>
                    <h3>Helicopter Air Ambulance</h3>
                    <p className="main-text">
                        24 hours a day service in Thailand and 
                        neightbouring countries cover aspects of 
                        medical evacuation and repatriation with 
                        team of specialists in emergency medicine 
                        and critical care transfer.
                    </p>
                    <hr/>
                    <p className="sub-text">
                        Bangkok Helicopter Services
                    </p>
                </div>
            </div>
            
            <div className="flying">
                <div>
                <h4>Flying Limousine</h4>
                <p>
                    Our helicopter MBB-BK117 C-2 is an ideal 
                    prestigious VIP Flying Limousine. The helicopter 
                    equipped with the most advances avionics flight 
                    instrument for maximum safety and effective mode of 
                    transport. The spacious volume and air-conditioned 
                    cabin is accessible via the large slide-doors & rear 
                    mshell doors for straight-in loading of ideal baggage 
                    and golf bags. 
                    <br/><br/>
                    For maximum comfort, our Flying Limousine
                    has eight VIP seat configurations with back-support 
                    soft cushioning, restraint seatbelts and head-sets 
                    The radio communication head-sets are also provided for 
                    experiences of helicopter pilot air to ground communications 
                    witnessing and your
                </p>
                </div>
                <img src={banner} alt="banner"/>
            </div>
        </div>
    );
};

export default Services;