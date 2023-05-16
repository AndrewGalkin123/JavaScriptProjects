import React from "react";
import odessaPhoto from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/img/odessa.png'
import $ from 'jquery';


class OdessaMap extends React.Component {
    componentDidMount(){
        $(".point").hover(function(){
            $(".description").html($(this).attr("description-data"))
            $(".description").fadeIn();
        },
        function(){
            $(".description").fadeOut(50);
        })
    }
    render() {
        return (
            <div class="odessa">
                <hr></hr>
                <p>Карта Одессы. Места съемок</p>
                <div class="odessa-map">      
                    <svg viewBox="0 0 1726 924">
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

                    </div>
                    <img src={odessaPhoto} alt="odessa-photo"/>
                </div>
            </div>
        )
    }
}

export default OdessaMap;