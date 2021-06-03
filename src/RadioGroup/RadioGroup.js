import React from 'react';
import poster1 from '../images/poster1.jpeg'
import poster2 from '../images/poster2.jpg'
import './RadioGroup.css'

const posters = {
  poster1: poster1,
  poster2: poster2
}

const RadioGroup = ({ setImage }) => {
  const onChange = ({ target: { value }}) => setImage(posters[value])
  return (
    <div className='RadioGroup' onChange={onChange}>
      <div className="imageContainer">
        <input type="radio" className="radio-button" name="radioButtonTest" value="poster1" id="button1"/>
        <label htmlFor="button1">Apply poster 1</label>
        <img src={poster1} />
      </div>
      <div className="imageContainer">
        <input type="radio" className="radio-button" name="radioButtonTest" value="poster2" id="button2"/>
        <label htmlFor="button2">Apply poster 2</label>
        <img src={poster2} />
      </div>
    </div>
  );
};

export default RadioGroup;
