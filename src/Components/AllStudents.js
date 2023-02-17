import React from 'react';
import MiniStudentCard from './MiniStudentCard';
import { useState } from 'react';



function AllStudents( {studentsArray,removeFromHallofLame, editStudent, onStudentSubmit, setEditStudent } ) {


let allStudentCardArray = studentsArray.map((student) => {
    return <MiniStudentCard key={student.id} {...student} removeFromHallofLame={removeFromHallofLame} />
})


const [studentID, setStudentID] = useState()

let studentDropDown = studentsArray.map((student) =>
    <option key={student.id} value={student.id}>
        {student.name}
    </option>
    )

 

// function handleStudentChange(e){
//     let selectedStudent = studentsArray.find(student => student.name === e.target.value)
//     setStudentID(selectedStudent.id)
//     handleFormChange(e)
//     console.log(selectedStudent)
// }


const initialData = {
student_id:'',
type_of_uncool:'',
}

const [formData, setFormdata] = useState(initialData)

function handleFormChange(e) {
const {name, value} = e.target;
console.log(e.target.value)
setFormdata({...formData, [name]: value})
}


function handleSubmitForm(e) {
// e.preventDefault();

console.log(formData)
fetch(`http://localhost:9292/students/${formData.student_id}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then(res => setEditStudent(res))

    .then(setFormdata(initialData))
}


return (
<>
    <div class="ui grid">
    <div class="four wide column">
    <div class="ui inverted segment">
        <form class="form" onSubmit={handleSubmitForm}>
    <div class="ui inverted form"> Update a Student in the Hall of Lame
    <div class="ui inverted divider"></div>
        <div class="two fields">
        <div >
                <div class="field">
                        <label>Select a Student</label>
                        <select class = "ui fluid dropdown" value={formData.student_id} type="select" name="student_id" placeholder="Student" onChange={handleFormChange} >
                        {studentDropDown}
                        </select>
                    </div>
                <div class="field">
                    <label>Update the type of lame this person is:</label>
                    <input value={formData.type_of_uncool} name="type_of_uncool" type="text" placeholder="Band geek" onChange={handleFormChange}/>
        </div>
    </div>
        </div>
        <div>
        <button class='ui left floated button' type="submit">Submit</button>
        </div>
    </div>
    </form>
    </div>


    </div>
    <div class="twelve wide column">
    <div class="ui four cards">
    {allStudentCardArray}
    </div>

    </div>

 </div>

</>


    )
}


export default AllStudents;