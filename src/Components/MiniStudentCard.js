import React from "react"

function MiniStudentCard( {id, name, type_of_uncool, yearbook_photo, year, removeFromHallofLame} ) {

function deleteStudent(e) {
    fetch(`http://localhost:9292/students/${id}`, {method: "DELETE"})
        .then(() => removeFromHallofLame(id))
}

return (


<div class="card">
<div class="image">
    <img src={yearbook_photo} alt="yearbook"/>
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
    <button class="pink ui icon button" onClick={deleteStudent}>
    <i class="delete icon"></i>
    </button>
    </span>
</div>
</div>
)
}


export default MiniStudentCard;