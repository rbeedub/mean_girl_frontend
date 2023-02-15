import React from 'react';
import { useState } from 'react'

function CommentForm() {
        const initialData = {
            name:'',
            level_of_uncool:'',
            like: false,
            incminating_photo:'',
            comment:''
        }

const [formData, setFormdata] = useState(initialData)

function handleFormChange(e) {
    const {name, value} = e.target;
    setFormdata({...formData, [name]: value})
}

function handleFormSubmit (e) {
    e.preventDefault();

    fetch('http://localhost:9292/comments', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    // .then(onFormSubmit)

    .then(setFormdata(initialData))
}

return (
    // onSubmit={handleFormSubmit}
    <form class="ui form"  >
        <div class="ui one column">
        {/* <div class="column">ONE </div> */}

        <div >
            <div class="one field">
                <div class="field">
                <label>Student Name</label>
                <input value= {formData.name} type="text" name="name" placeholder="Name" onChange={handleFormChange} required />
                </div>
                <div class="field">
                <label>Student Yearbook Photo</label>
                <input value= {formData.yearbook_photo} type="text" name="yearbook_photo"  placeholder="yearbook photo" onChange={handleFormChange}required  />
                </div>
                <div class="field">
                <label>Level of Uncool 1-10 </label>
                <input value= {formData.level_of_uncool} type="number" name="level_of_uncool" placeholder="Uncool Level" onChange={handleFormChange} required />
                </div>
                <div class="field">
                <label>Incrminating Photo</label>
                <input value= {formData.incrminating_photo} type="text" name="incriminating_photo"  placeholder="Incriminating photo" onChange={handleFormChange}required  />
                </div>
                <div class="field">
                <label>Sick burn goes here: </label>
                <input value= {formData.comment} type="text" name="comment"  placeholder="comment" onChange={handleFormChange}required  />
                {/* <textarea rows="2"></textarea> */}
                <br></br>
                <div class="field">
                <div>
                <p>With love,</p>
                </div>
                    <select>
                    <option value="">Plastic</option>
                    <option value="0">Regina George</option>
                    <option value="1">Karen Smith</option>
                    <option value="2">Gretchen Wieners</option>
                    <option value="3">Cady Heron</option>
                    </select>
                </div>

            </div>

            </div>
            <button class='ui left floated pink button' type="submit">Burn 'em</button>
            </div>
            <div class="ui vertical stripe quote segment"></div>
        </div>
    </form>

    )
    }


//     )
// }

export default CommentForm;