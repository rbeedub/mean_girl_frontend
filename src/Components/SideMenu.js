import React from 'react';
import MiniMGCard from './MiniMGCard';


function SideMenu( {meangirlsArray, removeFromBFF} ) {
 

    let allMeanies = meangirlsArray.map((girl) => {
        return <MiniMGCard key={girl.id} {...girl} removeFromBFF={removeFromBFF} />
    })


    return (
        <div>
            <img class="ui fluid image" src="/images/PlasticsBanner.svg"/>
            {allMeanies}
         </div>
  );
};


export default SideMenu