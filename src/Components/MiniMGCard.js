import React from 'react';

function MiniMGCard( {id, name, headshot_photo="/images/MGDefault.svg", superlative, number_of_parties, removeFromBFF} ) {
    
    function deleteMeangirl(e) {
        fetch(`http://localhost:9292/meangirls/${id}`, {method: "DELETE"})
            .then(() => removeFromBFF(id))
    }

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
            <div class="ui hidden divider"></div>
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
        <button class="ui pink basic button" onClick={deleteMeangirl}>
        <i class="recycle icon"></i>
        Recycle Plastic
        </button>

    </div>

    )
}

export default MiniMGCard;