import React from "react";
import Excursion from './components/History'
import OdessaMap from './components/OdessaMap'
import Header from './components/Header'
import Slider from './components/Slider'
import History from './components/History'
import Culture from "./components/Culture";
import Footer from './components/Footer'
import PhotoGallery from "./components/PhotoGallery";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <main>
          <Slider></Slider>
          <History></History>
          <Culture></Culture>
          <PhotoGallery></PhotoGallery>
          <Footer />
        </main>

      </div>

    );

  }



}


export default App;
