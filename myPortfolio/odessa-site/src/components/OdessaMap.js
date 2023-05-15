import React from "react";
import odessaPhoto from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/img/odessa.png'
class OdessaMap extends React.Component {
    render() {
        return (
            <div class="odessa">
                <hr></hr>
                <p>Карта Одессы. Места съемок</p>
                <div class="odessa-map">
                    <img src={odessaPhoto} alt="odessa-photo"/>
                </div>
            </div>
        )
    }
}

export default OdessaMap;