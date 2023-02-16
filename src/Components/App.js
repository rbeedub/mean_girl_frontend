import React from "react";
import Header from "./Header";
import Feed from "./Feed";
import AddMeanGirl from "./AddMeanGirl";
import { Route, Switch } from "react-router-dom";
import AllStudents from "./AllStudents";
import { useState, useEffect } from 'react';


function App() {

const [studentsArray, setStudentsArray] = useState([])

useEffect(() => {
  fetch('http://localhost:9292/students')
    .then(response => response.json())
    .then(setStudentsArray)
}, []
)

  function removeFromHallofLame(studentObj) {
    console.log(`Delete me!`)
    const removeStudent = studentsArray.filter(student => student.id !== studentObj.id)
    setStudentsArray(removeStudent)
  }

 

  return (
<>
    <Header/>
    <Switch>

    <Route path="/new_mean_girl">
        <AddMeanGirl />
      </Route>

    <Route path="/all_students">
      <AllStudents
        studentsArray={studentsArray}
        setstudentsArray={setStudentsArray}
        removeFromHallofLame={removeFromHallofLame}
      />
    </Route>

    <Route path="/">
        <Feed
        studentsArray={studentsArray}
        setstudentsArray={setStudentsArray} />
    </Route>
      
      <Route path="/feed">
        <Feed />
      </Route>
      


      </Switch>
</>
  )
}

export default App;
