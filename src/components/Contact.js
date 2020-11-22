import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className="contact">
            Hello From Contact
            <i class="fab fa-facebook-square"></i>
            <FontAwesomeIcon className="facebook-icon" icon={faPhoneAlt} />
            <FontAwesomeIcon className="facebook-icon" icon={faFacebookSquare} />
        </div>
    );
};

export default Contact;