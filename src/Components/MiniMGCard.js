import React from 'react';

function MiniMGCard( {name, headshot_photo, superlative, number_of_parties} ) {
    
    return (
        



    <div class="ui card">
        <div class="image">
            <img src={headshot_photo} alt="headshot"/>
        </div>
        <div class="content">
            <div class="header">{name}</div>
            <div class="meta">
            <span class="date">Plastic since 2003</span>
            </div>
            <div class="superlative">
            "{superlative}"
            </div>
            <div class="parties attended">
            {name} has attended {number_of_parties} parties
            </div>
        </div>
        <div class="extra content">
            <a href="https://i.insider.com/608335b408610f0018b0f3d8?width=700">
            <i class="user icon"></i>
            Best Friends Forever
            </a>
        </div>
    </div>

    )
}

export default MiniMGCard;