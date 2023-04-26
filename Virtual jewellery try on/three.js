

const scene = new THREE.Scene();
//scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: scenecanvas }, { alpha: true });


const Light = new THREE.DirectionalLight(0xffffff, 10);

scene.add(Light);
const lighthelper = new THREE.DirectionalLightHelper(Light, 5);
scene.add(lighthelper);
const loader = new THREE.GLTFLoader();
loader.load('assets/3Dassets/Jewel_Model.glb', function (object) {
    const earring = object.scene.children[0];
    
    scene.add(earring);
    console.log("threeDee");

}, undefined, function (error) {
    console.error(error);
});

const loader2 = new THREE.GLTFLoader();
loader2.load('assets/3Dassets/TrialRoom.glb', function (room) {
    const box = room.scene.children[0];
    box.position.set(0, -7, 0);
    scene.add(box);
});
//const geometry = new THREE.BoxGeometry();
//const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//const cube = new THREE.Mesh(geometry, material);
//cube.position.set(0, 0, 0);
//scene.add(cube);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();
// create a mesh and add it to the scene

// position the camera
camera.position.z = 5;

//renderer.setClearColorHex(0xffffff, 1);
const animate = function () {
    Light.position.copy(camera.position);
    Light.target.position.set(0, 0, 0);
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
};
animate();