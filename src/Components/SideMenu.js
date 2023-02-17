import React from 'react';
import MiniMGCard from './MiniMGCard';


function SideMenu( {meangirlsArray} ) {
 

    let allMeanies = meangirlsArray.map((girl) => {
        return <MiniMGCard key={girl.id} {...girl} />
    })


    return (
        <div>
            <img class="ui fluid image" src="/images/PlasticsBanner.svg"/>
            {allMeanies}
         </div>
  );
};


export default SideMenu