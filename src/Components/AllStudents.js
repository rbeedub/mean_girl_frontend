import React from 'react';
import MiniStudentCard from './MiniStudentCard';
import { useEffect, useState } from 'react';



function AllStudents( {studentsArray,removeFromHallofLame, setEditStudent } ) {



let allStudentCardArray = studentsArray.map((student) => {
    return <MiniStudentCard key={student.id} {...student} removeFromHallofLame={removeFromHallofLame} />
})


let studentDropDown = studentsArray.map((student) =>
    <option key={student.id} value={student.id}>
        {student.name}
    </option>
    )


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
    .then(newChar => setEditStudent(studentsArray.map((character)=> character.id === newChar.id? newChar.id: character)))

    .then(setFormdata(initialData))
}


return (
<>
    <div class="ui grid">
    <div class="four wide column">
    <div class="ui center aligned segment">
    <img src="/images/North Shore High Hall of Shame (2).svg" alt="school logo"/>

    <div class="ui inverted segment">
        <form class="form" onSubmit={handleSubmitForm}>
    <div class="ui inverted form"> Update a Student in the Hall of Lame
    <div class="ui divider"></div>
        <div class="field">
                <label>Select a Student</label>
                <select class = "ui fluid dropdown" value={formData.student_id} type="select" name="student_id" placeholder="Student" onChange={handleFormChange} >
                {studentDropDown}
                </select>
            </div>
            <div class="ui inverted divider"></div>
        <div class="field">
            <label>Update the type of lame this person is:</label>
            <input value={formData.type_of_uncool} name="type_of_uncool" type="text" placeholder="Band geek" onChange={handleFormChange}/>
        </div>
        <div>
        <button class="ui pink button" type="submit">Submit</button>
        </div>
    </div>
    </form>
    </div>

    </div>
    </div>



    <div class="twelve wide column">
    <div class="ui five cards">
    {allStudentCardArray}
    </div>

    </div>

 </div>

{/* 

 <div class="ui grid">
    <div class="sixteen wide column">
    <div class="ui four cards">
    {allStudentCardArray}
    </div>
    <div class="ui left floated segment">
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
    </div>

 </div> */}


</>


    )
}


export default AllStudents;