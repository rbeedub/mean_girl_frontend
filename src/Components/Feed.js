import React from 'react';
import CommentForm from './CommentForm';
import SideMenu from './SideMenu';
import CommentWall from './CommentWall';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Feed( {studentsArray, setStudentsArray}) {

    const [commentsArray, setCommentsArray]= useState([])
    const [meangirlsArray, setMeangirlsArray] = useState([])


    useEffect(() => {
        fetch('http://localhost:9292/comments')
        .then(response => response.json())
        .then(setCommentsArray)
    }, []
    )

    useEffect(() => {
        fetch('http://localhost:9292/meangirls')
        .then(response => response.json())
        .then(setMeangirlsArray)
    }, []
    )

    // useEffect(() => {
    //     fetch('http://localhost:9292/students')
    //       .then(response => response.json())
    //       .then(setStudentsArray)
    //   }, []
    // )

    function onFormSubmit(newComment){
        setCommentsArray([newComment, ...commentsArray])
        }

    function onMeanieSubmit(newMeanie){
        setMeangirlsArray.unshift([...meangirlsArray, newMeanie])
    }


    function removeFromBFF(idObj) {
        console.log(`Delete me!`)
        const removeMeanie = meangirlsArray.filter(meanie => meanie.id !== idObj)
        setMeangirlsArray(removeMeanie)
      }


    return (
    <div>
        <div class="ui equal width grid">
            <div class="four wide column">
            <div class="ui basic segment">
                <SideMenu
                meangirlsArray={meangirlsArray}
                onMeanieSubmit={onMeanieSubmit}
                removeFromBFF={removeFromBFF}
                />
                <div class="ui clearing divider"></div>
                <NavLink to="/new_mean_girl" >
                <button class="ui pink button"> Add New Meangirl</button>
                </NavLink>
            </div>
            </div>
            <div class="eight wide column">
                <div class="ui feed">
                <div class="ui basic segment">
                <NavLink to="/all_students"> <img class="ui fluid image" src="/images/NotFetch (1).svg" alt="link"/></NavLink>
                    </div>
                    </div>
                <CommentWall
                commentsArray={commentsArray}
                    />

                </div>
            <div class="four wide column">
            <img class="ui fluid image" src="/images/burnNotices.svg" alt="burn header"/>

                <div class="ui segment">
                    <CommentForm
                    studentsArray={studentsArray}
                    setStudentsArray={setStudentsArray}
                    meangirlsArray={meangirlsArray}
                    setMeangirlsArray={setMeangirlsArray}
                    onFormSubmit={onFormSubmit}
                    commentsArray={commentsArray}
                />
                </div>
            </div>
        </div>
    </div>

    )
}

export default Feed