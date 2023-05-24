import React from "react";
import Excursion from './components/History'
import OdessaMap from './components/OdessaMap'
import Header from './components/Header'
import Slider from './components/Slider'
import History from './components/History'
import Culture from "./components/Culture";
import Footer from './components/Footer'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <main>
          <Slider></Slider>
          <History></History>
          <Culture></Culture>
          <OdessaMap></OdessaMap>
          
        </main>
        
      </div>

    );

  }



}


export default App;
