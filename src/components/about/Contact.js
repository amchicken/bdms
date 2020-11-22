import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className="contact">
            <div>
                [img]
            </div>
            <div>
                <div>
                    [img]
                </div>
                <div>
                   <div>
                        Bangkok Helicopter Services Co., Ltd. 2301/2 New Petchburi Rd., Bangkapi, Huaykwang. Bangkok 10310. Thailand
                   </div>
                   <div>
                    <FontAwesomeIcon icon={faPhoneSquareAlt} />
                        +66 (0) 2762 4192 Fax: +66 (0) 2504-3866 +66 (0) 85 488 0484 
                        <FontAwesomeIcon icon={faEnvelopeSquare} />
                        marketing@bangkokhelicopter.co.th, sales@bangkokhelicopter.co.th 
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        Bangkok Helicopter Services
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;