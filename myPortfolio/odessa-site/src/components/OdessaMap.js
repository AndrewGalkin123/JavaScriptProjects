import React from "react";
import odessaPhoto from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/odessa.png'
import $ from 'jquery';


class OdessaMap extends React.Component {
    componentDidMount() {
        $(".point").hover(function () {
            $(".description").html($(this).attr("description-data"))
            $(".description").fadeIn();
        },
            function () {
                $(".description").fadeOut();
            })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="title">
                    <hr />
                    <span>Карта Одессы. Места съемок</span>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="content" style={{maxWidth: "1300px" , textAlign: "center"}}>
                        <img src={odessaPhoto}></img>
                        <svg viewBox="0 0 1255 880">
                            <path  className='point'  style={{cursor: "pointer"}}  d="m 532.86188,347.10796 c -11.28166,-18.89023 -11.54403,
                            -17.31604 -11.28166,-18.89023 0.26236,-1.57418 -0.26237,-15.74186 12.33112,
                            -14.43003 12.59349,1.31182 12.33112,5.50965 12.33112,5.50965 0,
                            0 3.14837,4.46019 -5.50965,25.97406 -8.65802,21.51387 -18.89023,-15.74186 -18.89023,-15.74186 z"
                            description-data="Одесса – город-порт на северо-западном побережье Черного моря. 
                            Это третий по величине город Украины после Киева и Харькова, 
                            главный промышленный, культурный, транспортный, научный и курортный центр Северного Причерноморья."></path>
                       </svg>
                       <div className="description">

                        </div> 
                </div>
               </div>
         
        )
    }
}

export default OdessaMap;

/* <svg viewBox="0 0 1726 924">
                    <path className='point' d="m 791.49939,103.77397 c 4.16025,
                        3.30856 0.31641,8.46603 -1.60476,12.12479 15.68071,2.05984 29.72027,0.83737 44.04153,
                        0.17831 1.16689,-3.50668 1.32338,-7.01337 1.06983,
                        -10.52005 -2.11833,-0.48167 -2.51988,-0.83309
                         -43.5066,-1.78305 z "
                        description-data="Одесса – город-порт на северо-западном побережье Черного моря. 
                         Это третий по величине город Украины после Киева и Харькова, 
                         главный промышленный, культурный, транспортный, научный и курортный центр Северного Причерноморья."></path>
                </svg>

                <div className="description">

                </div> */