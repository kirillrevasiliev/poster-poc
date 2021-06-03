import React, { useState } from 'react';
import Slider from './Slider/Slider';
import InputImage from './InputImage/InputImage';
import RadioGroup from './RadioGroup/RadioGroup';
import './App.css';

function App() {
  const [currentImg, setCurrentImg] = useState(null)
  return (
    <div className="App">
      <div className="container">
        <h2>Home events</h2>
        <Slider currentImg={currentImg} />
        <br/>
        <hr/>
        <h2>Set image</h2>
        <div className="flex">
          <RadioGroup setImage={setCurrentImg} />
          <InputImage setImage={setCurrentImg} />
        </div>
      </div>
    </div>
  );
}

export default App;
