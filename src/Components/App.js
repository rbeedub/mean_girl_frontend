import React from "react";
import Header from "./Header";
import Feed from "./Feed";
import AddMeanGirl from "./AddMeanGirl";
import { Route, Switch } from "react-router-dom";
import AllStudents from "./AllStudents";
import { useState, useEffect } from 'react';


function App() {


const [editStudent, setEditStudent] = useState({})


useEffect(() => {
  fetch('http://localhost:9292/students')
    .then(response => response.json())
    .then(setStudentsArray)
}, []
)
const [studentsArray, setStudentsArray] = useState([])

  function removeFromHallofLame(idObj) {
    console.log(`Delete me!`)
    const removeStudent = studentsArray.filter(student => student.id !== idObj)
    setStudentsArray(removeStudent)
  }

  // setState(state.filter(item => item.id != id))


  function onStudentSubmit(updatedStudent){
    setStudentsArray([...studentsArray, updatedStudent])
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
        onStudentSubmit={onStudentSubmit}
        setEditStudent={setEditStudent}
        editStudent={editStudent}
      />

    </Route>

    <Route path="/">
        <Feed
        studentsArray={studentsArray}
        setstudentsArray={setStudentsArray}
     />
    </Route>

      <Route path="/feed">
        <Feed />
      </Route>

      {/* <Route path="/all_students/update">
        <UpdateStudent />
      </Route> */}

      </Switch>
</>
  )
}

export default App;
