import React,{ useState } from 'react';
import HelicopterGeneral from './HelicopterGeneral';
import HelicopterPerformance from './HelicopterPerformance';
import HelicopterWeights from './HelicopterWeights';
import HelicopterDimensions from './HelicopterDimensions';
import border from '../assets/border2.svg';
import modelH1 from '../assets/img/model1.png';
import modelH2 from '../assets/img/model2.png';

const Helicopter = ({isReservationClose,setIsReservationClose}) => {
    const [isDetailsCollapsed, setIsDeatilsCollapsed] = useState(false);
    const toggleHandle = () => setIsDeatilsCollapsed(!isDetailsCollapsed);
    const closeHandle = () => setIsReservationClose(!isReservationClose);
    return (
        <div className="helicopter">
            <div className="banner">
                <div>
                    <img src={border} alt="" className="line-section"/>
                    <h1>HELICOPTER</h1>
                </div> 
                <button onClick={closeHandle}>RESERVATION</button>
            </div>
            <div className="helicopter-detail-container">
            <div onClick={toggleHandle} className="container">
                    <img src={modelH1} alt="bg" className="img-bg"/>
                    <div className={`${isDetailsCollapsed ? '' : 'hiddendetailsR'} details`}>
                        <h2>SPECIFICATION</h2>
                        <HelicopterGeneral
                        model="MBB-BK117 C-2"
                        msn="9108"
                        reg="HS-BHS"
                        engine="Arriel 1E2"
                        cockpit="2"
                        cabinCrew="2 or 3"
                        />
                        <HelicopterPerformance
                            cruiseSpeed="133"
                            ceiling="5,486"
                            climbRate="8.1"
                            range="680"
                        />
                        <HelicopterWeights
                            takeOffWeight="3,585"
                            fuelConsumption="692"
                            payLoad="600"
                        />
                        <HelicopterDimensions
                            fuselageLength="6.19"
                            fuselageWidth="1.85"
                            fuselageHeight="3.45"
                            mainRotor="11.00"
                            tailRotor="1.96"
                            cabinVolume="6.04" 
                        />
                    </div>
                </div>
                <div onClick={toggleHandle} className="container">
                    <img src={modelH2} alt="bg" className="img-bg"/>
                    <div className={`${isDetailsCollapsed ? '' : 'hiddendetailsL'} details`}>
                        <h2>SPECIFICATION</h2>
                        <HelicopterGeneral
                        model="MBB-BK117 C-2"
                        msn="9108"
                        reg="HS-BHS"
                        engine="Arriel 1E2"
                        cockpit="2"
                        cabinCrew="2 or 3"
                        />
                        <HelicopterPerformance
                            cruiseSpeed="133"
                            ceiling="5,486"
                            climbRate="8.1"
                            range="680"
                        />
                        <HelicopterWeights
                            takeOffWeight="3,585"
                            fuelConsumption="692"
                            payLoad="600"
                        />
                        <HelicopterDimensions
                            fuselageLength="6.19"
                            fuselageWidth="1.85"
                            fuselageHeight="3.45"
                            mainRotor="11.00"
                            tailRotor="1.96"
                            cabinVolume="6.04" 
                        />
                    </div>
                </div>
            </div>
            <div className="about-reserve">
                <h2>BANGKOK HELICOPTER SERVICES</h2>
                <button onClick={closeHandle}>RESERVATION</button>
            </div>           
        </div>
    )
}

export default Helicopter;