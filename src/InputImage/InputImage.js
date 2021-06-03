import React from 'react';
import './InputImage.css'

const InputImage = ({ setImage }) => {
  const onChange = async event => {
    if (event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]))
    }
  }
  return (
    <div className='InputImage'>
      <label htmlFor="fileInput">
        set another image
        <input
          id='fileInput'
          onChange={onChange}
          accept='image/png, image/jpeg'
          type='file'
        />
      </label>
    </div>
  );
};

export default InputImage;
