import React from 'react'

const Form = () => {
    return (
        <form action='http://localhost:5000/imageocr' method="POST" enctype="multipart/form-data" onSubmit={(e) => console.log(e.bubbles)}>
            <input type="file" name="file" className="block text-white bg-blue-600 rounded"/>
            <input type="submit" value="Reconocer" className="block text-white bg-red-400 rounded w-28 cursor-pointer"/>
        </form>
    )
}

export default Form
