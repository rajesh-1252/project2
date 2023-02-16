import React, { useState } from 'react'
import axios from "axios"

function AddRecipe() {
    const [title, setTitle] = useState("")
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData()
        formData.append("title",title)
        formData.append("ingredients", ingredients)
        formData.append("instructions",instructions)
        formData.append("image",image)

        axios.post("https://localhost:3000/api/recipes",formData, {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        })
        .then(res=> console.log(res.data))
        .catch(err=> console.log(err));
    
    }
  return (
    <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <br />
            <label>
                Ingredients:
                <textarea value={ingredients} onChange={e => setIngredients(e.target.value)} />
            </label>
            <br />
            <label>
                Instructions:
                <textarea value={instructions} onChange={e => setInstructions(e.target.value)} />
            </label>
            <br />
            <input type="file" onChange={e => setImage(e.target.files[0])}/>
            <br />
            <button type="submit">Add Recipe</button>
        </form>
  )
}

export default AddRecipe;