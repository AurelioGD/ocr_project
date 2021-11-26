import './App.css';
import Camera from 'react-html5-camera-photo';
function App() {

  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  return (
    <div className="App">
      <Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    />
    </div>
  );
}

export default App;
