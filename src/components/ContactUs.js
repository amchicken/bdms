import React,{ useState } from 'react';
import Contax from './Contact';
import logo from '../assets/logo/Logo.png';
import border from '../assets/border.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


const ContactUs = () => {
    const [isWhere,setIsWhere] = useState(true);
    const changeLocation = () => setIsWhere(!isWhere);
    return (
        <div>
            <div className="divNav">
                <img src={logo} alt="Logo" className="divNav-logo"/>
                <div>
                <img src={border} alt="" className="line-section"/>
                    <h1>CONTACT</h1>
                </div>
            </div>
        <div className="contactUs">
            
            <div className="contactUs-container">
                <div className="map-container">
                    <div className="button-container">
                        <div className={`${isWhere ? '' : 'canClick'}`} onClick={changeLocation}><h2 className={`${isWhere ? '' : 'notActive'} contact-button`}>HEADQUARTERS</h2></div>
                        <div className={`${isWhere ? 'canClick' : ''}`} onClick={changeLocation}><h2 className={`${isWhere ? 'notActive' : ''} contact-button`}>BASE OPERATIONS</h2></div>
                    </div>
                    <iframe className={`${isWhere ? '' : 'changed'}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.563935452668!2d100.5826023508478!3d13.744830290304602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e5ab96bd301%3A0x198e636f2e2c9317!2z4Lio4Li54LiZ4Lii4LmM4LiX4Lix4LiZ4LiV4LiB4Lij4Lij4LihIOC5guC4o-C4h-C4nuC4ouC4suC4muC4suC4peC4geC4o-C4uOC4h-C5gOC4l-C4ng!5e0!3m2!1sth!2sth!4v1606137980634!5m2!1sth!2sth" />
                    <iframe className={`${isWhere ? 'changed' : ''}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.760476683777!2d100.60200465084942!3d13.91326019019525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e282881daca62d%3A0xf0100b33d0bffa0!2z4LiX4LmI4Liy4Lit4Liy4LiB4Liy4Lio4Lii4Liy4LiZ4LiU4Lit4LiZ4LmA4Lih4Li34Lit4LiH!5e0!3m2!1sth!2sth!4v1606142641569!5m2!1sth!2sth"/>
                </div>
                <div className={`${isWhere ? '' : 'changed'} contax-container`}>
                    <p>
                    Bangkok Hospital Dental Center 5th Floor, <br/>
                    2301/2 New Petchburi Rd., Bangkapi, Huaykwang, Bangkok 10310, Thailand. 
                    </p>
                    <div className="contact-group">
                        <div className="contact-info">
                        <FontAwesomeIcon icon={faPhoneSquareAlt} className="icon"/>
                        <p>
                        +66 (0) 2762 4192 <br/>
                        +66 (0) 2504 3866 <br/>
                        +66 (0) 85 488 0484 <br/>
                        </p>
                        </div>
                        <div className="contact-info">
                        <FontAwesomeIcon icon={faEnvelopeSquare} className="icon"/>
                        <p>
                        marketing@bangkokhelicopter.co.th <br/>
                        sales@bangkokhelicopter.co.th<br/>
                        </p>
                        </div>
                    </div>
                </div>
                <div className={`${isWhere ? 'changed' : ''} contax-container`}>
                    <p>
                    Donmuang Int’l Airport (Gate 4), <br/>
                    Bangkok Airways Technical Hangar, Vibhavadi Rangsit Rd., Bangkok 10210, Thailand.
                    </p>
                    <div className="contact-group">
                        <div className="contact-info">
                        <FontAwesomeIcon icon={faPhoneSquareAlt} className="icon"/>
                        <p>
                        +66 (0) 2535 3479 <br/>
                        +66 (0) 2504 3866 <br/>
                        +66 (0) 85 488 0484 <br/>
                        </p>
                        </div>
                        <div className="contact-info">
                        <FontAwesomeIcon icon={faEnvelopeSquare} className="icon"/>
                        <p>
                        helibase@bangkokhelicopter.co.th<br/>
                        operations@bangkokhelicopter.co.th<br/>
                        maintenance@bangkokhelicopter.co.th<br/>
                        </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            <Contax />
        </div>
    );
};

export default ContactUs;