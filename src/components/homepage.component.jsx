import React from "react";

import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* move this to it's own component */}
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Men</h1>
            <p className='subtitle'>Shop Now</p>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Women</h1>
            <p className='subtitle'>Shop Now</p>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Kids</h1>
            <p className='subtitle'>Shop Now</p>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Sneakers</h1>
            <p className='subtitle'>Shop Now</p>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Jackets</h1>
            <p className='subtitle'>Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
