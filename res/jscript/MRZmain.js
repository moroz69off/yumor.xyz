var obj_body = null;
var controls = null;
import { OrbitControls } from "../../res/jscript/OrbitControls.js";
ThreeInit();
//var num_value = 1;

var progressBar = document.createElement("div");
progressBar.id = 'progressBar';
progressBar.style.backgroundColor = '#0ff';
progressBar.style.display = 'block';
progressBar.style.position = 'absolute';
progressBar.style.top = '48%';
progressBar.style.left='20%';
progressBar.style.height = '12px';

//var m_div = document.createElement('div');
//m_div.innerHTML = '<p>change this</p><input type="number" id="num_data" min="1" max="10" value="1">';
//
//m_div.style.position = 'absolute';
//m_div.style.left = 15 + 'px';
//m_div.style.top = 15 + 'px';
//m_div.style.border = '1px solid green';
//m_div.style.padding = '10px';
////document.body.appendChild(m_div);

//m_div.onmouseover = function(e) {
//	m_div.style.background = 'lime';
//	controls.enabled = false;
//};
//m_div.onmouseout = function(e) {
//	m_div.style.background = 'green';
//	controls.enabled = true;
//}

//var m_numer = document.getElementById('num_data');
/*
 * m_numer.onclick=function(){
	obj_body.scale.set( 1/m_numer.value, 1/m_numer.value, 1/m_numer.value );
};
*/

function ThreeInit() {
    window.onload = function() {
		document.body.appendChild(progressBar);
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 10000);
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xCFCFCF);
        document.body.appendChild(renderer.domElement);

        camera.position.y = 8.5;
		camera.position.x = -8.777;
		camera.position.z = -8.85;

        var light = new THREE.DirectionalLight(0xfcf9e8, 2.1);
        scene.add(light);

        var ambiColor = "#7bab88";
        var ambientLight = new THREE.AmbientLight(ambiColor);
        scene.add(ambientLight);
		
		THREEx.WindowResize(renderer, camera);

        var manager = new THREE.LoadingManager();
        var loader = new THREE.ImageLoader(manager);
        var textureBody = new THREE.Texture();

        var onProgress = function(xhr) {
            if (xhr.lengthComputable) {
                var percentComplete = xhr.loaded / xhr.total * 100;
                console.log(Math.round(percentComplete, 2) + '% downloaded');
                progressBar.style.width = ((percentComplete/100)*60) + '%';
            }
        };

        var onError = function(xhr) { };

        var texture_path="../../res/models/texture/HeadLampRC_v3UVbodyMeet_v5.png";
        loader.load(texture_path, function(image) {
            textureBody.image = image;
            textureBody.needsUpdate = true;
        });

        var meshes = [];
        var objLoader = new THREE.OBJLoader();
        var model_path="../../res/models/lampHead.obj";
        objLoader.load(model_path, function(object) {
            object.traverse(function(child) {
                if (child instanceof THREE.Mesh) {
                    meshes.push(child);
                }
            });
            obj_body = meshes[0];
            obj_body.rotation.x = 0;
            obj_body.position.y = 0;
            obj_body.position.x = 0;
            obj_body.position.z = -2.5;
            obj_body.rotation.y = Math.PI / 2;
            var mapHeightBody = new THREE.TextureLoader().load(texture_path);
            obj_body.material = new THREE.MeshPhongMaterial({ map: textureBody, specular: 0xfceed2, 
				bumpMap: mapHeightBody, bumpScale: 0.08, shininess: 15 });
            scene.add(obj_body);
        }, onProgress, onError);
        controls = new OrbitControls(camera, renderer.domElement);

        var render = function() {
            requestAnimationFrame(render);

            controls.update();

            renderer.render(scene, camera);
        };

		AddRedCoordinateLine ();
		AddGreenCoordinateLine ();
		AddBlueCoordinateLine ();

function AddRedCoordinateLine () {
	var material = new THREE.LineBasicMaterial({ color: 0xff0000 });
	var geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3( 0, 0, 0 ),
		new THREE.Vector3( 7, 0, 0 )
	);
	var RedCoordinateLine = new THREE.Line( geometry, material );
	scene.add( RedCoordinateLine );
	geometry.vertices.push(
		new THREE.Vector3( 0, 0, 0 ),
		new THREE.Vector3( -7, 0, 0 )
	);
	RedCoordinateLine = new THREE.Line( geometry, material );
	scene.add( RedCoordinateLine );
}

function AddGreenCoordinateLine () {
	var material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
	var geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3( 0, 0, 0 ),
		new THREE.Vector3( 0, 0, 7 )
	);
	var GreenCoordinateLine = new THREE.Line( geometry, material );
	scene.add( GreenCoordinateLine );
	geometry.vertices.push(
		new THREE.Vector3( 0, 0, 0 ),
		new THREE.Vector3( 0, 0, -7 )
	);
	GreenCoordinateLine = new THREE.Line( geometry, material );
	scene.add( GreenCoordinateLine );
}

function AddBlueCoordinateLine () {
	var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
	var geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3( 0, 0, 0 ),
		new THREE.Vector3( 0, 7, 0 )
	);
	var BlueCoordinateLine = new THREE.Line( geometry, material );
	scene.add( BlueCoordinateLine );
	geometry.vertices.push(
		new THREE.Vector3( 0, 0, 0 ),
		new THREE.Vector3( 0, -7, 0 )
	);
	BlueCoordinateLine = new THREE.Line( geometry, material );
	scene.add( BlueCoordinateLine );
    }

        render();
    };
}
