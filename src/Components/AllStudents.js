import React from 'react';
import MiniStudentCard from './MiniStudentCard';



function AllStudents( {studentsArray,removeFromHallofLame} ) {

let allStudentArray = studentsArray.map((student) => {
    return <MiniStudentCard key={student.id} {...student} removeFromHallofLame={removeFromHallofLame} />
})

return (
<div class="ui four cards">
{allStudentArray}
</div>


    )
}

export default AllStudents;