import React from 'react';
import HelicopterGeneral from './HelicopterGeneral';
import HelicopterPerformance from './HelicopterPerformance'
import HelicopterWeights from './HelicopterWeights'
import HelicopterDimensions from './HelicopterDimensions'

const Helicopter = () => {
    return (
        <div className="helicopter">
            <div>
                <h1>HELICOPTER</h1>
                <button>RESERVATION</button>
            </div>
            <div>
                <h2>SPECIFICATION</h2>
                <div className="section">
                    <img src="https://via.placeholder.com/150" alt="bg"/>
                    <div className="details">
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
            <div className="reserve">
                <h2>BANGKOK HELICOPTER SERVICES</h2>
                <button>RESERVATION</button>
            </div>           
        </div>
    )
}

export default Helicopter;