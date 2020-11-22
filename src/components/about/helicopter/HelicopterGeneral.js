import React from 'react';

const HelicopterGeneral = ({model, 
                            msn,
                            reg,
                            engine,
                            cockpit,
                            cabinCrew,}) => {
    return (
        <div>
            <h4>General</h4>
                <p>
                    Make / Model : { model }<br/>
                    MSN : { msn }<br/>
                    Registration : { reg }<br/>
                    Engine : { engine }<br/>
                    Cockpit Crew : { cockpit } Pilots<br/>
                    Cabin Crew : { cabinCrew } EMS crews<br/>
                    Service # 1 - EMS : 1 or 2 Stretcher(s)<br/>
                    Service # 2 - Flying Limo 8 seats<br/>
                </p>
        </div>        
    );
};

export default HelicopterGeneral;