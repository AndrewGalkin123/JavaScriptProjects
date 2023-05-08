import React from "react";

class Image extends React.Component{ 
    render() { 
        return(
            <img src={this.props.title} />
        )
    }
}

export default Image;