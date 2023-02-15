import React from 'react';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import Sort from './Sort';

function CommentWall( {commentsArray} ) {

 

let allInfo= commentsArray.map((comment) => {
        return <CommentCard 
        key={comment.id} 
        comment={comment.comment} 
        incriminating_photo={comment.incriminating_photo} 
        level_of_uncool={comment.level_of_uncool} 
        like={comment.like} 
        {...comment.meangirl} 
        {...comment.student} />
    }
    )

    console.log(allInfo)


// let renderComments = commentsArray.map((comment) => {
//     return <CommentCard key={comment.id} {...comment}/>
//     })

    return (
    <div>
    {allInfo}
    </div>
    )
}

export default CommentWall;