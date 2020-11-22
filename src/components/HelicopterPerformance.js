import React from 'react';

const HelicopterPerformance = ({
    cruiseSpeed,
    ceiling,
    climbRate,
    range
}) => {
    return (
        <div>
            <h4>Performance</h4>
                <p>
                    Max Cruise Speed : {cruiseSpeed} kt<br/>
                    Service Ceiling : {ceiling} m<br/>
                    Max Climb Rate : {climbRate} m / sec<br/>
                    Range : {range} km (with max fuel)<br/>
                </p>
        </div>
    )
};

export default HelicopterPerformance;