import React from 'react';


function CommentCard( {comment, incriminating_photo, type_of_uncool, level_of_uncool, headshot_photo, meangirl, name, yearbook_photo })  {


    return (

        <div class="ui one column padded grid">
            <div class="ui fluid card">
            <div class= "extra content">
            <div>
                <img class="ui tiny avatar image" src={yearbook_photo} alt="yearbook photo"/>
                <span> {name} </span>
                </div>
                </div>
            <div class="content">
                <div class="meta">
                <span class= "comment">
                <h2 class="center aligned description">{comment}</h2>
                    </span>
                </div>
                <div class="incriminating photo">
                <img src={incriminating_photo} alt="incriminating"/>
                </div>
            </div>
            <div class="extra content">
                <span class="left floated like">
                    <i class="like icon"></i>
                    Like
                </span> 
                <div class="right floated author"> From  
                <img src={headshot_photo} data-title="regina"  data-content="Elliot has been a member since July 2012" class="ui right float avatar image"/>, with love 

                </div>
            </div>
        </div>
        <div class="ui divider"></div>
        </div>

    )
}

export default CommentCard;