import React from 'react';

function MiniMGCard( {name, headshot_photo, superlative, number_of_parties} ) {
    return (
    <div class="ui card">
        <div class="image">
            <img src={headshot_photo} alt="photo"/>
        </div>
        <div class="content">
            <a class="header">{name}</a>
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
            <a>
            <i class="user icon"></i>
            4 Best Friends Forever
            </a>
        </div>
    </div>

    )
}

export default MiniMGCard;