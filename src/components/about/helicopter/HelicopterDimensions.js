import React from 'react';

const HelicopterDimensions = ({
    fuselageLength, 
    fuselageWidth,
    fuselageHeight,
    mainRotor,
    tailRotor,
    cabinVolume
}) => {
    return (
        <div>
            <h4>Dimensions</h4>
            <p>
            Fuselage Length : {fuselageLength} m<br/>
            Fuselage Width : {fuselageWidth} m<br/>
            Fuselage Height : {fuselageHeight} m<br/>
            Main Rotor : {mainRotor} m (diameter)<br/>
            Tail Rotor : {tailRotor} m (diameter)<br/>
            Cabin Volume : {cabinVolume} m3<br/>
            </p>
        </div>
    );
};

export default HelicopterDimensions;