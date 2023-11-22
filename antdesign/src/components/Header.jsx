import React from "react";
import {Divider} from 'antd'

const Header = (props) => {
    return(
        <>
           <header>{props.title}</header>
            <Divider/>
        </>
     
    )
}

export default Header