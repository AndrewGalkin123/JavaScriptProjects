import React from "react";
import pavelCathedral from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/pavelCathedral.jpg'
import vorontsovLighthouse from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/vorontsov-lighthouse.jpg'

class History extends React.Component {
    render() {
        return (
            <div>
                <br></br>
                <div className="title">
                    <hr />
                    <span>История</span>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="content" style={{ maxWidth: "1500px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "0 15px" }}>
                    <a href="" className="box" style={{ margin: "15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                        <img src={pavelCathedral} style={{ width: "100%", height: "auto" }} />
                        <h2>Кафедральный Собор Св. Павла</h2>
                        <p>Величие веры и архитектурное великолепие.
                            Красивый фасад с колоннами и портиками, внутри – потрясающие фрески и орнаменты. Место поклонения и религиозных мероприятий, привлекающее туристов в Одессу.

                        </p>
                    </a>
                    <a href="" className="box" style={{ margin: "15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                        <img src={pavelCathedral} style={{ width: "100%", height: "auto" }} />
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                        </p>
                    </a>
                    <a href="" className="box" style={{ margin: "15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                        <img src={vorontsovLighthouse} style={{ width: "100%", height: "auto"}} />
                        <h2>Воронцовский маяк</h2>
                        <p>Исторический символ и морская достопримечательность. Этот величественный маяк, построенный в 19 веке, предоставляет незабываемый вид на Чёрное море.
                             Он служит ориентиром для мореплавателей и вдохновляет посетителей своей красотой и романтикой морской атмосферы.

                        </p>
                    </a>
                    <a href="" className="box" style={{ margin: "15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                        <img src={pavelCathedral} style={{ width: "100%", height: "auto"}} />
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


export default History;
