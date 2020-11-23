import React,{ useState } from 'react';

const Reservation = ({isReservationClose,setIsReservationClose}) => {
    const closeHandle = () => setIsReservationClose(!isReservationClose);
    return (
        <div className={`${isReservationClose ? '' : 'close'} reservation`}>
            <button id="close-reservation" onClick={closeHandle}>X</button>
            <div className="container">
                <div className="title">
                <h1>BANGKOK HELICOPTER SERVICES</h1>
                <hr/>
                <h3>RESERVATION</h3>
                </div>
                <div className="input-container">
                    <div className="input-name">
                        <div className="input-group split">
                            <span>Firstname</span>
                            <input type="text"/>
                        </div>
                        <div className="input-group split">
                            <span>Lastname</span>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="input-group">
                        <span>Email</span>
                        <input type="email"/>
                    </div>
                    <div className="input-group">
                        <span>Reserve Date</span>
                        <input type="date"/>
                    </div>
                    <div className="input-group">
                        <span>Topic</span>
                        <input type="text"/>
                    </div>
                    <div className="input-group">
                        <span>Description</span>
                        <textarea id="" rows="5"></textarea>
                    </div>
                    <div className="input-group">
                    <button>RESERVE</button>
                    </div>
                </div>
            </div>
            <div id="bg"></div>
        </div>
    );
};

export default Reservation;