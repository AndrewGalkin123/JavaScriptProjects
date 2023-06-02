import React from 'react';

import descentCoast from "D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/historyImages/descent-coast.jpg";
import vorontsovLighthouse from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/lighthouse.jpg';
import sailorWife from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/sailorWife.jpg';
import opera from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/opera.jpg';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      selectedImage: null
    };
  }

  openModal(image) {
    this.setState({
      modalOpen: true,
      selectedImage: image
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
      selectedImage: null
    });
  }

  render() {
    const photos = [
      { src: descentCoast, alt: 'Descent Coast', caption: 'Одесса' },
      { src: vorontsovLighthouse, alt: 'Vorontsov Lighthouse', caption: 'Маяк Воронцова' },
      { src: sailorWife, alt: 'Sailor\'s Wife', caption: 'Жена моряка' },
      { src: opera, alt: 'Opera House', caption: 'Оперный театр' },
      { src: descentCoast, alt: 'Descent Coast', caption: 'Одесса' },
      { src: vorontsovLighthouse, alt: 'Vorontsov Lighthouse', caption: 'Маяк Воронцова' },
      { src: sailorWife, alt: 'Sailor\'s Wife', caption: 'Жена моряка' },
      { src: opera, alt: 'Opera House', caption: 'Оперный театр' }
    ];

    return (
      <div>
        <br />
        <div className="title">
          <hr />
          <span>Фотогалерея</span>
        </div>
        <br />
        <br />
        <br />
        <div className="content" style={{maxWidth: "1300px" , margin: "0 auto"}}>
          <div className="gallery">
            {photos.map((photo, index) => (
              <div key={index} className="gallery-item" onClick={() => this.openModal(photo)}>
                <img src={photo.src} alt={photo.alt} />
                <span className="gallery-item-hover">{photo.caption}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center" }}>
            <a href="" className="photos_link">Смотреть все фото (10)</a>
          </p>
        </div>
        {this.state.modalOpen && (
          <div className="modal">
            <span className="close" onClick={() => this.closeModal()}>&times;</span>
            <img src={this.state.selectedImage.src} alt={this.state.selectedImage.alt} />
          </div>
        )}
      </div>
    );
  }
}

export default PhotoGallery;


/* <a className="gallery-item">
<img src={descentCoast} alt="descent coast"></img>
<span className="gallery-item-hover">Одесса</span>
</a> */