import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react';


function UpdateStudent( {studentsArray} ) {

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


const initialData = {
    name:'',
    type_of_uncool:'',
    yearbook_photo: '',
    year:''
}

const [formData, setFormdata] = useState(initialData)

function handleFormChange(e) {
    const {name, value} = e.target;
    setFormdata({...formData, [name]: value})
}

function handleFormSubmit (e) {
    e.preventDefault();

return (
<div class="ui equal width grid">
    <div class="column">
        <div class="ui segment">
        
        </div>
    </div>
    <div class="eight wide column">
        <div class="ui segment">
        <form class="ui form" onSubmit={handleFormSubmit}>
        <div class="ui one column">
        <div >
            <div class="one field">
            <div class="field">
                    <label>Select a Student</label>
                    <select class = "ui fluid dropdown" value= {formData.student} type="select" name="student" placeholder="Student" onChange={handleStudentChange} >
                    {studentDropDown}
                    </select>
                </div>
                <div class="field">
                <label>Update how uncool this person is... </label>
                <input value= {formData.type_of_uncool} type="text" name="type_of_uncool" placeholder="How lame are they?" onChange={handleFormChange}/>
                </div>
                <div class="field">
                <label>Changee Year </label>
                <input value= {formData.year} type="number" name="year" placeholder="year" onChange={handleFormChange} />
                </div>
                <div class="field">
                <label>Update Yearbook Photo</label>
                <input value= {formData.yearbook_photo} type="text" name="headshot_photo" placeholder="headshot photo" onChange={handleFormChange} />
                </div>
            </div>
            <button class='ui left floated button' type="submit">Submit</button>
            </div>
        </div>
    </form>
        <div><NavLink to="/all_students">Back to Student List</NavLink></div>
        </div>
    </div>
    <div class="column">
        <div class="ui segment">
        
        </div>
    </div>
    </div>

)

}
}

export default UpdateStudent;