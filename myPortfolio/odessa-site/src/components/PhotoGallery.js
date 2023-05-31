import React from "react";
import pavelCathedral from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/pavelCathedral.jpg'

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
                <div className="content" style={{ maxWidth: "1500px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "0 15px" }}>
                    <a href="" className="box" style={{ margin: "15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black"}}>
                        <img src={pavelCathedral} style={{ width: "100%", height: "auto" }} />
                        <h2>Кафедральный Собор Св. Павла</h2>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                        </p>
                    </a>
                    <a href="" className="box" style={{ margin: "15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black"}}>
                        <img src={pavelCathedral} style={{ width: "100%", height: "auto" }} />
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                        </p>
                    </a>
                    <a href="" className="box" style={{ margin: "15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black"}}>
                        <img src={pavelCathedral} style={{ width: "100%", height: "auto" }} />
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                        </p>
                    </a>
                    <a href="" className="box" style={{ margin: "15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black"}}>
                        <img src={pavelCathedral} style={{ width: "100%", height: "auto" }} />
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                        </p>
                    </a>
                </div>
            </div>
        )
    }
}


export default PhotoGallery;