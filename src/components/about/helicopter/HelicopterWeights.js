import React from 'react';

const HelicopterWeights = ({
    takeOffWeight,
    fuelConsumption,
    payLoad
}) => {
    return (
        <div>
           <h4>Weights</h4>
            <p>
                Max Take-off Weight : {takeOffWeight} kg<br/>
                Max Fuel Consumption : {fuelConsumption} kg<br/>
                Max Pay Load : {payLoad} kg / m2<br/>
            </p>
        </div>
    )
};

export default HelicopterWeights;