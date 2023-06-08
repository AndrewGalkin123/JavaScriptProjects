import React from "react";
import odessaPhoto from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/odessa.png';
import $ from 'jquery';

class OdessaMap extends React.Component {
    componentDidMount() {
        $(".point").hover(
            function () {
                $(".description").html($(this).attr("description-data"));
                $(".description").fadeIn();
            },
            function () {
                $(".description").fadeOut();
            }
        );
    }
    render() {
        return (
            <div style={{ justifyContent: "center" }}>
                <div>
                    <br />
                    <div className="title">
                        <hr />
                        <span>Карта Одессы. Места съемок</span>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div
                        className="content"
                        style={{ maxWidth: "1290px", textAlign: "center" }}
                    >
                        <img
                            id="odessaMap"
                            src={odessaPhoto}
                            alt="odessa-photo"
                            style={{ maxWidth: "100%" ,width: "1290px"}}
                        />
                 
                        <svg viewBox="0 0 1255 880" style={{ opacity: "0" }}>
                            <path

                                className="point"
                                style={{ cursor: "pointer" }}
                                d="m 532.86188,347.10796 c -11.28166,-18.89023 -11.54403,
                            -17.31604 -11.28166,-18.89023 0.26236,-1.57418 -0.26237,-15.74186 12.33112,
                            -14.43003 12.59349,1.31182 12.33112,5.50965 12.33112,5.50965 0,
                            0 3.14837,4.46019 -5.50965,25.97406 -8.65802,21.51387 -18.89023,-15.74186 -18.89023,-15.74186 z"
                                description-data="Одесса – город-порт на северо-западном побережье Черного моря. 
                            Это третий по величине город Украины после Киева и Харькова, 
                            главный промышленный, культурный, транспортный, научный и курортный центр Северного Причерноморья."
                            ></path>
                        </svg>
                        <div className="description"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OdessaMap;

