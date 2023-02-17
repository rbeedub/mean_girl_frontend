import React from 'react';
import CommentCard from './CommentCard';


function CommentWall( {commentsArray, isLiked, setIsLiked} ) {



let allInfo= commentsArray.map((comment) => {
        return <CommentCard
        key={comment.id}
        comment={comment.comment}
        incriminating_photo={comment.incriminating_photo}
        level_of_uncool={comment.level_of_uncool}
        like={comment.like}
        {...comment.meangirl}
        {...comment.student}
        isLiked={isLiked}
        setIsLiked={setIsLiked}/>
    }
    )

    console.log(allInfo)


    return (
    <div>
    {allInfo}
    </div>
    )
}

export default CommentWall;