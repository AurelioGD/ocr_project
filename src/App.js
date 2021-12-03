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
        <Form />
        <ShowText textImage={textImage}/>
      </WebContainer>
    </div>
  );
}

export default App;
