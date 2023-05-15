import React from "react";
import Excursion from './components/Excursion'
import OdessaMap from './components/OdessaMap'
import Header from './components/Header'
import Slider from './components/Slider'
import History from './components/History'
import Footer from './components/Footer'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Slider></Slider>
        <Excursion></Excursion>
        <History></History>
        <OdessaMap></OdessaMap>
      
      </div>
      
    );
   
  }
  


}


export default App;
