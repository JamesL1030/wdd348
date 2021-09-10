import React from 'react';
import MiamiAPI from '../pages/MiamiAPI';
import OrmondBeachAPI from '../pages/OrmondBeachAPI';
import BaltimoreAPI from '../pages/BaltimoreAPI';
import OrlandoAPI from '../pages/OrlandoAPI';
import DenverAPI from '../pages/DenverAPI';
import HagerstownAPI from '../pages/HagerstownAPI';

function UserInput() {
    return(
        
        <div>
            <MiamiAPI />
            <BaltimoreAPI />
            <OrmondBeachAPI />
            <OrlandoAPI />
            <DenverAPI />
            <HagerstownAPI />
            
        </div>
    )
};

export default UserInput;
