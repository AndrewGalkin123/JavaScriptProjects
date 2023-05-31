import React from 'react';
import descentCoast from "D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/historyImages/descent-coast.jpg";

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoItemHeight: 0
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.photoUpdate);
    this.photoUpdate();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.photoUpdate);
  }

  photoUpdate = () => {
    const photoItemElement = document.querySelector("#history_photos_index .photo_item");
    if (photoItemElement) {
      const photoItemHeight = photoItemElement.clientHeight;
      if (photoItemHeight !== this.state.photoItemHeight) {
        this.setState({ photoItemHeight }, () => {
          document.querySelector("#history_photos_index").style.height = (photoItemHeight * 2 + 38) + "px";
        });
      }
    }
  };

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
          <div
            id="history_photos_index"
            style={{
              position: "relative",
              textAlign: "center",
              letterSpacing: "16px",
              marginBottom: "20px",
              overflow: "hidden",
              height: "0"
            }}
          >
            <div style={{ position: "absolute", left: "-20px", top: "0", right: "-20px" }}>
              <a className="photo_item">
                <img className="picture" src={descentCoast} alt="descent coast"></img>
                <span className="photo_block-item"></span>
                <span className="photo_item_title">Одесса, Черноморск</span>
              </a>
              <a className="photo_item">
                <img className="picture" src={descentCoast} alt="descent coast"></img>
                <span className="photo_block-item"></span>
                <span className="photo_item_title">Остров Парос, Греция</span>
              </a>
              <a className="photo_item">
                <img className="picture" src={descentCoast} alt="descent coast"></img>
                <span className="photo_block-item"></span>
                <span className="photo_item_title">Остров Парос, Греция</span>
              </a>
              <a className="photo_item">
                <img className="picture" src={descentCoast} alt="descent coast"></img>
                <span className="photo_block-item"></span>
                <span className="photo_item_title">Остров Парос, Греция</span>
              </a>
              <a className="photo_item">
                <img className="picture" src={descentCoast} alt="descent coast"></img>
                <span className="photo_block-item"></span>
                <span className="photo_item_title">Остров Парос, Греция</span>
              </a>
              <a className="photo_item">
                <img className="picture" src={descentCoast} alt="descent coast"></img>
                <span className="photo_block-item"></span>
                <span className="photo_item_title">Остров Парос, Греция</span>
              </a>
              <a className="photo_item">
                <img className="picture" src={descentCoast} alt="descent coast"></img>
                <span className="photo_block-item"></span>
                <span className="photo_item_title">Остров Парос, Греция</span>
              </a>
              <a className="photo_item">
                <img className="picture" src={descentCoast} alt="descent coast"></img>
                <span className="photo_block-item"></span>
                <span className="photo_item_title">Остров Парос, Греция</span>
              </a>
            </div>
          </div>

          <p style={{textAlign : "center"}}>
            <a href='' className='photos_link'>Смотреть все фото (10)</a>
          </p>

        </div>
      </div>
    );
  }
}
export default PhotoGallery;
