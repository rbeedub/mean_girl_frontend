import React from 'react';
import { useState } from 'react'

function CommentForm( { studentsArray, meangirlsArray, onFormSubmit, commentsArray } ) {


    const initialData = {
        student: 'Student',
        level_of_uncool: '',
        like: false,
        incriminating_photo:'',
        comment:'',
        plastic: 'Plastic'
    }

const [formData, setFormdata] = useState(initialData)
const [studentID, setStudentID] = useState()


let studentDropDown = studentsArray.map((student) =>
    <option key={student.id}>
        {student.name}
    </option>
    )

function handleStudentChange(e){
    let selectedStudent = studentsArray.find(student => student.name === e.target.value)
    setStudentID(selectedStudent.id)
    handleFormChange(e)
    console.log(selectedStudent)
}

function handleMeangirlChange(e){
    let selectedMeangirl = meangirlsArray.find(meanie => meanie.name === e.target.value)
    setStudentID(selectedMeangirl.id)
    handleFormChange(e)
    console.log(selectedMeangirl)
}

let meangirlsDropDown = meangirlsArray.map((eachMG) =>
    <option key={eachMG.id}>
        {eachMG.name}
    </option>
    )

function handleFormChange(e) {
    const {name, value} = e.target;
    setFormdata({...formData, [name]: value})
}

function handleFormSubmit (e) {
    e.preventDefault();

    fetch(`http://localhost:9292/comments`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    // .then(response => {
    //     console.log(response)
    // })
    .then(onFormSubmit)

    .then(setFormdata(initialData))
}

return (
    <form class="ui form" onSubmit={handleFormSubmit} >
        <div class="ui one column">
        <div>
            <div class="one field">
                <div class="field">
                    <label>Select a Student</label>
                    <select class = "ui fluid dropdown" value= {formData.student} type="select" name="student" placeholder="Student" onChange={handleStudentChange} >
                    {studentDropDown}
                    </select>
                </div>
                <div class="field">
                <label>Level of Uncool 1-10 </label>
                <input value= {formData.level_of_uncool} type="number" name="level_of_uncool" placeholder="Uncool Level" onChange={handleFormChange} required />
                </div>
                <div class="field">
                <label>Incrminating Photo</label>
                <input value= {formData.incriminating_photo} type="text" name="incriminating_photo"  placeholder="Incriminating photo" onChange={handleFormChange}required  />
                </div>
                <div class="field">
                <label>Sick burn goes here: </label>
                <input value= {formData.comment} type="text" name="comment"  placeholder="comment" onChange={handleFormChange}required />
                <div class="field" onChange={handleFormChange} >
                    <label>With love,</label>
                    <select class = "ui fluid dropdown" value= {formData.plastic} type="select" name="plastic" onChange={handleMeangirlChange} >
                    {meangirlsDropDown}
                    </select>
                </div>
            </div>
            </div>
            <button type="submit">Submit</button>
            </div>
            <div class="ui vertical stripe quote segment"></div>
        </div>
    </form>

    )
    }


export default CommentForm;