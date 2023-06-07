import React from "react";
import pavelCathedral from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/pavelCathedral.jpg'
import vorontsovLighthouse from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/lighthouse.jpg'
import sailorWife from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/sailorWife.jpg'
import opera from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/opera.jpg'

class History extends React.Component {
   
    render() {
        return (
            <div id="history">
                <br></br>
                <div className="title" >
                    <hr />
                    <span>История</span>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="content" style={{ maxWidth: "1500px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "0 15px" }}>
                    <a href="" className="box" style={{ margin: "15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                        <img src={pavelCathedral} style={{ width: "100%", height: "470px", objectFit: "cover", objectPosition: "center" }} />
                        <h2>Кафедральный Собор Св. Павла</h2>
                        <p>Величие веры и архитектурное великолепие.
                            Красивый фасад с колоннами и портиками, внутри – потрясающие фрески и орнаменты. Место поклонения и религиозных мероприятий, привлекающее туристов в Одессу.

                        </p>
                    </a>
                    <a href="" className="box" style={{ margin: "15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                        <img src={sailorWife} style={{ width: "100%", height: "470px", objectFit: "cover", objectPosition: "top" }} />
                        <h2>Памятник жене моряка</h2>
                        <p>Трогательная история любви, запечатленная в бронзе.
                            Эта великолепная скульптура символизирует преданность и силу женщины, ожидающей возвращения моряка.
                            Загляните в глаза этой статуи и почувствуйте магию и эмоциональную привязанность, которые она передает.

                        </p>
                    </a>
                    <a href="" className="box" style={{ margin: "15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                        <img src={vorontsovLighthouse} style={{ width: "100%", height: "470px", objectFit: "cover", objectPosition: "top" }} />
                        <h2>Воронцовский маяк</h2>
                        <p>Исторический символ и морская достопримечательность. Этот величественный маяк, построенный в 19 веке, предоставляет незабываемый вид на Чёрное море.
                            Он служит ориентиром для мореплавателей и вдохновляет посетителей своей красотой и романтикой морской атмосферы.

                        </p>
                    </a>
                    <a href="" className="box" style={{ margin: "15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                        <img src={opera} style={{ width: "100%", height: "470px", objectFit: "cover", objectPosition: "center" }} />
                        <h2>Театральный сад</h2>
                        <p>Уникальная оазисная зелень в центре города. Этот прекрасный парк является местом отдыха и культурных мероприятий.
                            Здесь можно прогуляться среди красивых фонтанов, насладиться театральными представлениями и настроиться на волну искусства.
                        </p>
                    </a>
                </div>
            </div>
        )
    }
}


export default History;
