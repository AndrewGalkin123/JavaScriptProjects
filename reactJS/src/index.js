import React from 'react';
import ReactDOM from 'react-dom/client';


const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")

const helpText = "Help text"

function App () {
  return (<div className="name">
    <h1>{helpText}</h1>
    <input placeholder={helpText} 
    onClick={inputClick} onMouseOver={mouseOver}/>
    <p>{helpText === "Help text!" ? "Yes" : "No"}</p>
</div>)
}

const app = ReactDOM.createRoot(document.getElementById("app"))

app.render(<App />)