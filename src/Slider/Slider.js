import React from 'react';
import data from './data.json'
import './Slider.css'

const Slider = ({ currentImg }) => {
  const renderItems = (item, index) => (
    <div key={index} className='wrapperSlideBody'>
      <div className='eventType'>{item.eventType}</div>
      <div className='body'>
        <div className='imgWrap'>
          <img
            src={currentImg || item?.image_url?.thumbnail1}
            alt='card'
            className='img'
          />
        </div>
        <img
          // src={item?.image_url?.thumbnail1}
          // src={currentImg || image}
          src={currentImg || item?.image_url?.thumbnail1}
          alt='card'
          className='fullBackground'
        />
        <div className='front'>
          <div className="mainButton">
            Buy from $100
          </div>
        </div>
      </div>
      <div className='foot'>
        <div className='title'>
          {item.eventName}
        </div>
        <ul className='flex'>
          <li className='name'>
            {item.venue ? item.venue : 'Virtual event'}
          </li>
          <li className='ellipse'>
            {/*<img src={ellipseBlack} alt='ellipse' />*/}
          </li>
          <li className='date'>
            July 31, 2021
          </li>
        </ul>
      </div>
    </div>
  )
  return (
    <div className='wrapperHomeSlider'>
      {data.data.map(renderItems)}
    </div>
  );
};

export default Slider;
