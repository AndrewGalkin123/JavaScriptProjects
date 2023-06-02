import React from 'react';
import descentCoast from "D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/historyImages/descent-coast.jpg";
import vorontsovLighthouse from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/lighthouse.jpg'
import sailorWife from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/sailorWife.jpg'
import opera from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/opera.jpg'

class PhotoGallery extends React.Component {

  render() {
    return (
      <div>
        <br></br>
        <div className="title">
          <hr />
          <span>Фотогалерея</span>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div className="content" style={{ maxWidth: "1290px" }}>
          <div className="grid-wrap">
            <ul>
              <li><a className="gallery-item">
                <img src={descentCoast} alt="descent coast"></img>
                <span className="gallery-item-hover">Одесса</span>
              </a></li>
              <li><a className="gallery-item">
                <img src={vorontsovLighthouse} alt="descent coast"></img>
                <span className="gallery-item-hover">Одесса</span>
              </a></li>
              <li><a className="gallery-item">
                <img src={descentCoast} alt="descent coast"></img>
                <span className="gallery-item-hover">Одесса</span>
              </a></li>
              <li><a className="gallery-item">
                <img src={opera} alt="descent coast"></img>
                <span className="gallery-item-hover">Одесса</span>
              </a></li>
              <li><a className="gallery-item">
                <img src={vorontsovLighthouse} alt="descent coast"></img>
                <span className="gallery-item-hover">Одесса</span>
              </a></li>
              <li><a className="gallery-item">
                <img src={sailorWife} alt="descent coast"></img>
                <span className="gallery-item-hover">Одесса</span>
              </a></li>
              <li><a className="gallery-item">
                <img src={opera} alt="descent coast"></img>
                <span className="gallery-item-hover">Одесса</span>
              </a></li>
            </ul>
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