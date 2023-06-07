import React from 'react';
import pavelCathedral from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/pavelCathedral.jpg'
import vorontsovLighthouse from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/lighthouse.jpg'
import sailorWife from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/sailorWife.jpg'
import opera from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/opera.jpg'
import descentCoast from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/historyImages/descent-coast.jpg'


class PhotoGallery extends React.Component {
  render() {
    return (
      
      <div style={{ justifyContent: 'center'}}>
        <div>
        <br />
        <div className="title">
          <hr />
          <span>Фотогалерея</span>
        </div>
        <br />
        <br />
        <br />
        <div className="photo-gallery">
          <div className="gallery-container w-3">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-2">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-3 h-2">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-2">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>
          <a href='' className='photos_link'>Смотреть все фото (10)</a>
        </p>
      </div>
      </div>
    );
  }
}

export default PhotoGallery;



/* <a className="gallery-item">
<img src={descentCoast} alt="descent coast"></img>
<span className="gallery-item-hover">Одесса</span>
</a> */