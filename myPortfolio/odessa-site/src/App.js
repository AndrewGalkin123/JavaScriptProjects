import React from "react";
import Excursion from './components/Excursion'
import OdessaMap from './components/OdessaMap'
import Header from './components/Header'
import Slider from './components/Slider'
import * as THREE from 'three';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Slider></Slider>

      </div>

    );


  }
}


export default App;
