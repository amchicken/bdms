import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/logo/Logo.png'
import lg1 from '../assets/logo/lg1.png';
import lg2 from '../assets/logo/lg2.png';
import lg3 from '../assets/logo/lg3.png';
import lg4 from '../assets/logo/lg4.png';
import lg5 from '../assets/logo/lg5.png';
import lg6 from '../assets/logo/lg6.png';
import lg7 from '../assets/logo/lg7.png';


const Contact = () => {
    return (
        <div className="contact">
            <div className="logo-container">
                <img src={ lg1 } alt="Logo"/>
                <img src={ lg2 } alt="Logo"/>
                <img src={ lg3 } alt="Logo"/>
                <img src={ lg4 } alt="Logo"/>
                <img src={ lg5 } alt="Logo"/>
                <img src={ lg6 } alt="Logo"/>
                <img src={ lg7 } alt="Logo"/>
            </div>
            <div className="bottom-banner">
                <div className="logo-bottom-banner">
                    <img src={logo} alt="Logo"/>
                </div>
                <div>
                   <div>
                        <h3>Bangkok Helicopter Services Co., Ltd.</h3>
                        <p>
                        2301/2 New Petchburi Rd., Bangkapi, Huaykwang. <br/>
                        Bangkok 10310. Thailand
                        </p>
                   </div>
                   <div>
                    <p>
                        <FontAwesomeIcon icon={faPhoneSquareAlt} className="icon"/>
                        &nbsp;+66 (0) 2762 4192 Fax: +66 (0) 2504-3866 +66 (0) 85 488 0484 <br/>
                        <FontAwesomeIcon icon={faEnvelopeSquare} className="icon"/>
                        &nbsp;marketing@bangkokhelicopter.co.th, sales@bangkokhelicopter.co.th <br/>
                        <FontAwesomeIcon icon={faFacebookSquare} className="icon"/>
                        &nbsp;Bangkok Helicopter Services <br/>
                    </p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;