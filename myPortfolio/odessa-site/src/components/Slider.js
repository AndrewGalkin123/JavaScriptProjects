import React from 'react';
import * as THREE from 'three';
import mountain from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/img/mountain-3531360.jpg'
import winter from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/img/winter-2383930.jpg'
import hongKong from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/img/hong-kong-7361979.jpg'


function rotate360(imageUrl, slideId) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const canvas = renderer.domElement;
  canvas.style.width = '100%'; /* Added this line */
  canvas.style.height = 'auto'; /* Added this line */

  document.getElementById(slideId).appendChild(canvas);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 0);

  const scene = new THREE.Scene();

  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(imageUrl),
    side: THREE.DoubleSide
  });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  const animate = function () {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.001; // изменение скорости вращения
    renderer.render(scene, camera);
  };
  animate();
}

class Slider extends React.Component {

  componentDidMount() {
    const slide1 = document.getElementById('slide-1');
    const slide2 = document.getElementById('slide-2');
    const slide3 = document.getElementById('slide-3');

    rotate360(winter, slide1.id);
    rotate360(hongKong, slide2.id);
    rotate360(mountain, slide3.id);

    var counter = 1;
    setInterval(function () {
      document.getElementById("radio" + counter).checked = true;
      counter++;
      if(counter > 3){
          counter = 1;
      }
    }, 10000)
  }

  render() {
    return (
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <h1 id="company-name">SoarSoal</h1>
          <div className="slide first" id='slide-1'></div>
          <div className="slide" id='slide-2'></div>
          <div className="slide" id='slide-3'></div>
          <div className="navigation-auto">
            <div className="auto-btn1" />
            <div className="auto-btn2" />
            <div className="auto-btn3" />
          </div>
        </div>
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
        </div>
      </div>
    )
  }
}

export default Slider;