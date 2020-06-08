// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// ZapparThree provides a LoadingManager that shows a progress bar while
// the assets are downloaded
let manager = new ZapparThree.LoadingManager();

// Setup ThreeJS in the usual way
let renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Setup a Zappar camera instead of one of ThreeJS's cameras
let camera = new ZapparThree.Camera();

// The Zappar library needs your WebGL context, so pass it
ZapparThree.glContextSet(renderer.getContext());

// Create a ThreeJS Scene and set its background to be the camera background texture
let scene = new THREE.Scene();
scene.background = camera.backgroundTexture;

// Request the necessary permission from the user
ZapparThree.permissionRequestUI().then(function(granted) {
    if (granted) camera.start();
    else ZapparThree.permissionDeniedUI();
});

// Set up our image tracker group
// Pass our loading manager in to ensure the progress bar works correctly
let tracker = new ZapparThree.ImageTrackerLoader(manager).load("example-tracking-image.zpt");
let trackerGroup = new ZapparThree.ImageAnchorGroup(camera, tracker);
scene.add(trackerGroup);

// Add some content
let box = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshBasicMaterial({ color: 0x0000ff})
);

var gltf_group = new THREE.Group();
gltf_group.scale.set(1000,1000,1000);

var loader = new THREE.GLTFLoader();
var mixer,anim0;

loader.load(
  'pernas_cocacola.gltf',
   function(gltf){

     gltf_group.add( gltf.scene );
     gltf.animations;
     gltf.scene;
     gltf.scenes;
     gltf.cameras;
     gltf.assets;
     // gltf.scene.children[1].visible = false;
     mixer = new THREE.AnimationMixer(gltf.scene);
     anim0 = mixer.clipAction(gltf.animations[0]);

     anim0.play();
   },

   function(xhr){
     console.log(( xhr.loaded / xhr.total * 100) + '%loaded');
   },
   function(error){
     console.log( 'An error happened: ' + error );
   }
 );

 var group = new THREE.Group()
 group.position.set(0,0,0);
 group.add( box );
 group.add( gltf_group );

// box.position.set(0, 0, 0.5);
trackerGroup.add(group);

// Set up our render loop
function render() {
    requestAnimationFrame(render);
    camera.updateFrame(renderer);

    box.rotation.x += 0.1;

    renderer.render(scene, camera);
}

requestAnimationFrame(render);
