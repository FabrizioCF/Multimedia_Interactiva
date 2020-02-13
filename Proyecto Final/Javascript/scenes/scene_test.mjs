/* Variables Globales */
var scene;
var camera;
var renderer;
var clock;

/**
 * Dibuja el escenario de pruebas.
 */
export function drawScene() {
    // Escena
    scene = new THREE.Scene();

    // Cámara
    var fov = 45;
    var ratio = window.innerWidth / window.innerHeight;
    var zNear = 1;
    var zFar = 10000;

    camera = new THREE.PerspectiveCamera(fov, ratio, zNear, zFar);
    camera.position.set(500, 800, 1300);
    camera.lookAt(0, 0, 0);

    // Reloj
    clock = new THREE.Clock();

    // Renderer
    renderer = new THREE.WebGLRender({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor('#262626');
    renderer.setSize(window.innerWidth, window.innerHeight);

    $("body").append(renderer.domElement);
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;

        camera.updateProjectionMatrix();
    });

    // Luces
    var ambientLight = new THREE.AmbientLight(0x606060);
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 0.75, 0.5).normalize();

    scene.add(ambientLight);
    scene.add(directionalLight);

    // Grid
    var size = 1000;
    var divisions = 20;
    var gridHelper = new THREE.GridHelper(size, divisions, '#ff7900', '#0095b8');
    
    scene.add(gridHelper);

    // Plano invisible
    var planeGeo = 

}