function rotate360(imageUrl, slideId) {
    const renderer = new THREE.WebGLRenderer({antialias: true});
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
        sphere.rotation.y += 0.003; // изменение скорости вращения
        renderer.render(scene, camera);
    };
    animate();
}

rotate360("./img/winter-2383930.jpg", "slide-1");
rotate360("./img/hong-kong-7361979.jpg", "slide-2");
rotate360("./img/panorama-5969540.jpg", "slide-3");

const block = document.querySelector('.first-row .block');
const image = document.querySelector('.first-row img');

image.addEventListener('mouseover', function() {
  block.style.backgroundColor = '#38b434';
});

block.addEventListener('mouseover', function() {
    block.style.backgroundColor = '#38b434';
  });

image.addEventListener('mouseout', function() {
      block.style.backgroundColor = 'initial';
});
  
block.addEventListener('mouseout', function() {
      block.style.backgroundColor = 'initial';
});
