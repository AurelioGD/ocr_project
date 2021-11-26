import { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam"
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
  const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null)
    const capture = useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageSrc(imageSrc)
      },
      [webcamRef]
    );
  
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
        {
            imageSrc ? <img src={imageSrc}/>
                     :<p>No se ha tomado ninguna foto</p>
        }
        <button onClick={capture}>Capture photo</button>
      </>
    );
  };
  
  export default WebcamCapture