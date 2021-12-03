import React from 'react'

const Form = () => {
    return (
        <form action='http://localhost:5000/imageocr' method="POST" enctype="multipart/form-data" onSubmit={(e) => console.log(e.bubbles)}>
            <input type="file" name="file"/>
            <input type="submit" value="Subir"/>
        </form>
    )
}

export default Form
