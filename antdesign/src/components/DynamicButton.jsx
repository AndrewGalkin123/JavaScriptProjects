

const DynamicButton = ({color, text}) => {
    return(
            <button style={{width: "100px", height: "50px", backgroundColor: color}}>{text}</button>
    )
}

export default DynamicButton