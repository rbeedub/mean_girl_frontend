import React from 'react';
import { useState } from 'react'

function AddMeanGirl() {


        const initialData = {
            name:'',
            superlative:'',
            year: '',
            headshot_photo:'',
            number_of_parties:''
        }

const [formData, setFormdata] = useState(initialData)

function handleFormChange(e) {
    const {name, value} = e.target;
    setFormdata({...formData, [name]: value})
}

function handleFormSubmit (e) {
    e.preventDefault();

    fetch('http://localhost:9292/meangirls', {
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
                <label>Your Name</label>
                <input value= {formData.name} type="text" name="name" placeholder="Name" onChange={handleFormChange} required />
                </div>
                <div class="field">
                <label>Superlative </label>
                <input value= {formData.superlative} type="text" name="superlative" placeholder="Most likely to..." onChange={handleFormChange} required />
                </div>
                <div class="field">
                <label>Year </label>
                <input value= {formData.year} type="number" name="year" placeholder="year" onChange={handleFormChange} required />
                </div>
                <div class="field">
                <label>Headshot Photo</label>
                <input value= {formData.headshot_photo} type="text" name="headshot_photo"  placeholder="headshot photo" onChange={handleFormChange}required  />
                </div>
                <div class="field">
                <label>How many parties have you been to?: </label>
                <input value= {formData.number_of_parties} type="number" name="number_of_parties"  placeholder="number_of_parties" onChange={handleFormChange}required  />
                {/* <textarea rows="2"></textarea> */}
                <br></br>
            </div>

            </div>
            <button class='ui left floated button' type="submit">Submit</button>
            </div>
        </div>
    </form>

    )
    }


//     )
// }


export default AddMeanGirl;