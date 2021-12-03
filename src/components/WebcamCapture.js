import { useRef, useCallback } from "react";
import Webcam from "react-webcam"
import getTextByImage from "../services/getTextByImage";
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
  const WebcamCapture = ({ setTextImage }) => {
    const webcamRef = useRef(null);
    
    const capture = useCallback(async() => {
        const image = webcamRef.current.getScreenshot();
        const text = await getTextByImage("https://www.editorialmd.com/wp-content/uploads/Los-Texto-expositivo-scaled.jpg")
        console.log(text)
      },[webcamRef, setTextImage]);
  
    return (
      <>
        <Webcam
          audio={false}
          height={500}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={700}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
      </>
    );
  };
  
  export default WebcamCapture