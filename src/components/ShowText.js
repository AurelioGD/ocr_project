import React from 'react'
import TextArea from '../styledComponents/TextArea'
const ShowText = ({ textImage }) => {
    return (
        <div>
            {
                textImage ? <TextArea readOnly={true}>{textImage}</TextArea>
                          : <p>Aun no haz tomado ninguna imagen.</p>
            }
        </div>
    )
}

export default ShowText
