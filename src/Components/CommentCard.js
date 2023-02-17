import React from 'react';


function CommentCard( {comment, incriminating_photo, headshot_photo, name, yearbook_photo } )  {

    return (

        <div class="ui one column padded grid">
            <div class="ui fluid card">
            <div class= "extra content">
            <div>
                <img class="ui tiny avatar image" src={yearbook_photo} alt="yearbook"/>
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
                {/* <button type="submit" class="ui small basic circular right floated button"
                    onClick={handleLike}>
            </button> */}
                </span>
                <div class="right floated author"> From
                <img src={headshot_photo} alt="headshot" class="ui right float avatar image"/>, with love

                </div>
            </div>
        </div>
        <div class="ui divider"></div>
        </div>

    )
}

export default CommentCard;