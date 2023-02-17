import React from 'react';
import { useState } from 'react'

function CommentForm( { studentsArray, meangirlsArray, onFormSubmit, commentsArray } ) {


    const initialData = {
        student_id: '',
        level_of_uncool: '',
        like: false,
        incriminating_photo:'',
        comment:'',
        meangirl_id: ''
    }

const [formData, setFormdata] = useState(initialData)
const [studentID, setStudentID] = useState()


let studentDropDown = studentsArray.map((student) =>
    <option key={student.id} value={student.id}>
        {student.name}
    </option>
    )



let meangirlsDropDown = meangirlsArray.map((eachMG) =>
    <option key={eachMG.id} value={eachMG.id}>
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
                    <select class = "ui fluid dropdown" value= {formData.student} type="select" name="student_id" placeholder="Student" onChange={handleFormChange} >
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
                    <select class = "ui fluid dropdown" value= {formData.plastic} type="select" name="meangirl_id" onChange={handleFormChange} >
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