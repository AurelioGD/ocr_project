import { useState } from 'react';
import './App.css';
import ShowText from './components/ShowText';
import WebContainer from "./styledComponents/WebContainer"
import Form from './components/Form';
function App() {

  const [textImage, setTextImage] = useState(null)

  return (
    <div className="App">
      <WebContainer>
        <h1 className="text-3xl mb-4">Obten el texto de tu imagen</h1>
        <Form />
        <ShowText textImage={textImage}/>
      </WebContainer>
    </div>
  );
}

export default App;
