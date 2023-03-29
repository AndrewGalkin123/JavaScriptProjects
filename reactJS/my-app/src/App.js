import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import logo from "./img/logo-og.png"

class App extends React.Component {
  helpText = "Help Text"
  render() {
    return (<div className='name'>
      <Header title="Шапка сайта"/>
      <h1>{this.helpText}</h1>
      <input placeholder={this.helpText}
        onClick={this.inputClick} onMouseOver={this.mouseOver} />
      <p>{this.helpText === "Help Text!" ? "Yes" : "No"}</p>
      <Image image={logo}/>
    </div>)
  }
  inputClick() {console.log("Clicked")} 
  mouseOver() {console.log("Mouse over")}
}

export default App