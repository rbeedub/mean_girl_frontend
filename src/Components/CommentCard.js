import React from 'react';


function CommentCard( {comment, incriminating_photo, level_of_uncool, headshot_photo, meangirl, name, yearbook_photo })  {


    return (

        <div class="ui one column grid">
            <div class="ui fluid card">
            <div class= "extra content">
            <div>
                <img class="ui tiny avatar image" src={yearbook_photo} alt="yearbook photo" />
                <span> {name} is level {level_of_uncool} lame.</span>
                </div>
                </div>
            <div class="content">
                <div class="meta">
                <span class="comment">{comment}</span>
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
                <div class="right floated author">
                <img src={headshot_photo} data-title={name}  data-content="Elliot has been a member since July 2012" class="ui avatar image"/> Love, {meangirl}
                {/* <img src="/images/avatar/small/elliot.jpg" data-title="Elliot Fu" data-content="Elliot has been a member since July 2012" class="ui avatar image"></img> */}
                </div>
            </div>
        </div>
        </div>

    )
}

export default CommentCard;