import React, { useEffect, useState } from 'react';

const Button = (props) => {
    const [click, setClick] = useState(0)


    useEffect(() => {
        document.title =  `Вы нажали ${click}` //автоматически при изменении состояний
    })
    console.log(click)
    return (
        <button onClick={() => setClick(click + 1)}>{props.text} {click}</button>
    )
}


Button.defaultProps = {
    text: "Кнопка"
}

export default Button