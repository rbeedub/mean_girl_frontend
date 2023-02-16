import React from 'react';
import MiniMGCard from './MiniMGCard';


function SideMenu( {meangirlsArray} ) {
 

    let allMeanies = meangirlsArray.map((girl) => {
        return <MiniMGCard key={girl.id} {...girl} />
    })


    return (
        <div>
            <h2>Meet the Plastics</h2>
            {allMeanies}
         </div>
  );
};


export default SideMenu