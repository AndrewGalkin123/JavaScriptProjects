import React from 'react';


class Slider extends React.Component {
  render() { 
    return (
      <div className="slider middle">
        <div className="slides">
          <input type="radio" name="point" id="point-1" checked />
          <input type="radio" name="point" id="point-2" />
          <input type="radio" name="point" id="point-3" />
          <h1 id="company-name">SoarSoal</h1>
          <div className="slide s1" id="slide-1"></div>
          <div className="slide" id="slide-2"></div>
          <div className="slide" id="slide-3"></div>
        </div>
        <div className="navigation">
          <label htmlFor="point-1" className="bar"></label>
          <label htmlFor="point-2" className="bar"></label>
          <label htmlFor="point-3" className="bar"></label>
        </div>
      </div>
    );
   
  }
  
}




export default Slider;
