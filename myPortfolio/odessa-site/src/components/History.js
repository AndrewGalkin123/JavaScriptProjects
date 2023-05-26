import React from "react";
import doas from "D:/JavaScriptProjects/myPortfolio/odessa-site/src/img/odessa-2560900_1920.jpg";

class History extends React.Component {
    render() {
        return (
            <div className="history">
                <hr></hr>
                <p>История</p>
                <div  style={{ position: "relative", textAlign: "center", letterSpacing: '16px', marginBottom: '20px', overFlow: 'hidden', height: '80%' }}>
                    <div style={{ position: 'absolute', left: '-20px', top: '0', right: '-20px' }}>
                        <a className="photo_item">
                            <span className="photo_block-item"> </span>
                            <span className="photo_item_title">Остров Парос, Греция</span>
                        </a>
                        <a className="photo_item">
                            <span className="photo_block-item"> </span>
                            <span className="photo_item_title">Остров Парос, Греция</span>
                        </a>
                        <a className="photo_item">
                            <span className="photo_block-item"> </span>
                            <span className="photo_item_title">Остров Парос, Греция</span>
                        </a>
                        <a className="photo_item">
                            <span className="photo_block-item"> </span>
                            <span className="photo_item_title">Остров Парос, Греция</span>
                        </a>
                    </div>
                </div>
            </div>


        )
    }

}
export default History;