import React from "react"
import { NavLink } from "react-router-dom";
import UpdateStudent from "./UpdateStudent";


function MiniStudentCard( {id, name, type_of_uncool, yearbook_photo, year, removeFromHallofLame} ) {

function deleteStudent(id) {
    fetch(`http://localhost:9292/students/${id}`, {
        method: "DELETE"
      })
        .then((res) => removeFromHallofLame(res))
       
    }

// function updateStudent(id) {
//     fetch(`http://localhost:9292/students/${id}`, {
//         method: "PATCH",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//         })
//         .then((response) => response.json())

//         .then(onFormSubmit)
    
//         .then(setFormdata(initialData))

//       }
       


return (


  <div class="card">
    <div class="image">
      <img src={yearbook_photo}/>
    </div>
    <div class="content">
      <div class="header">{name}</div>
      <div class="meta">
      </div>
      <div class="description">
        A totally uncool {type_of_uncool}.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Class year {year}
      </span>
      <span>
      <button class="pink ui icon button" onClick={() => deleteStudent(id)}>
        <i class="delete icon"></i>
        </button>
      </span>
    </div>
  </div>
)
}

export default MiniStudentCard;