import React, { useState } from 'react';
import PropTypes from 'prop-types';
import image03 from '../image/image03.png'



// Header 컴포넌트: NavButton과 NavMenu를 통합하여 관리합니다.
const Overlay = () => {
  return (
    <>
    {/* https://www.youtube.com/watch?v=6oG3MiANR9A */}
      <div className='fixed w-full h-full box-decoration-clone clip-path'>
        <img src={image03} alt="Loader" />
      </div>
      <div className='m-0 p-0 box-border'>
        <h2><div>An Korean</div></h2>
        <h2><div>visual</div></h2>
        <h2><div>Art</div></h2>
      </div>
      <div>
        <div><span>click</span>anywhere</div>
      </div>
    </>
  );
};

export default Overlay;
