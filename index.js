const modelFile = "pernas_cocacola.gltf";

const loader = new THREE.GLTFLoader();

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

// Set up our instant tracker group
let tracker = new ZapparThree.ImageTrackerLoader(manager).load("example-tracking-image.zpt");
let trackerGroup = new ZapparThree.ImageAnchorGroup(camera, tracker);
scene.add(trackerGroup);

loader.load(
  // resource URL
  modelFile,
  // loaded handler
  (gltf) => {
    model = gltf.scene;

trackerGroup.add(model);

  },
  (xhr) => { console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`) },
  (error) => {console.log('Error loading .gltf model:', error)}
)

// Set up our render loop
function render() {
    requestAnimationFrame(render);
    camera.updateFrame(renderer);

    if (!hasPlaced) tracker.setAnchorPoseFromCameraOffset(0, 0, -5);

    renderer.render(scene, camera);
}

requestAnimationFrame(render);
