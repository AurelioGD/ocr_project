import axios from "axios"
const getTextByImage = async(image) => {
    const url ="http://localhost:5000/imageocr"  
    
    let data = new FormData();

    data.append('action', 'ADD');
    data.append('param', 0);
    data.append('secondParam', 0);
    data.append('file', new Blob([image], { type: 'image/jpeg' }));
    const textImage = await axios.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    console.log(textImage)
}

export default getTextByImage