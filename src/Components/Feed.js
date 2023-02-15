import React from 'react';
import CommentForm from './CommentForm';
import SideMenu from './SideMenu';
import CommentWall from './CommentWall';
import { useState, useEffect } from 'react';

function Feed () {

    const [commentsArray, setCommentsArray]= useState([])
    const [meangirlsArray, setMeangirlsArray] = useState([])
    const [studentsArray, setStudentsArray] = useState([])




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

    useEffect(() => {
        fetch('http://localhost:9292/students')
          .then(response => response.json())
          .then(setStudentsArray)
      }, []
    )

    function onFormSubmit(newComment){
        setCommentsArray([...commentsArray, newComment])
      }


    return (
    <div>
        <div class="ui equal width grid">
            <div class="four wide column">
            <div class="ui segment">
                <SideMenu
                meangirlsArray={meangirlsArray}
                />
            </div>
            </div>
            <div class="eight wide column">
                <div class="ui feed">
                    <CommentWall
                    commentsArray={commentsArray}
                    />
                </div>
                </div>
            <div class="four wide column">
                <div class="ui segment">
                    <h1>Add a burn....</h1>
                    <CommentForm
                    studentsArray={studentsArray}
                    setStudentsArray={setStudentsArray}
                    meangirlsArray={meangirlsArray}
                    setMeangirlsArray={setMeangirlsArray}
                    onFormSubmit={onFormSubmit}
                    />
                </div>
            </div>
        </div>
    </div>

    )
}

export default Feed