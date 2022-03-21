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
////////////////////////////////////////////////////////////////////






























//function AddCoordinatesLabels () {
//	var xCh, yCh, zCh;
//	var loader = new THREE.FontLoader();
//	loader.load( '../Consolas_Bold.json', function ( font ) {
//		var xMid, textX; 
//
//		var color_red   = 0xff0000;
//		var color_green = 0x00ff00;
//		var color_blue  = 0x0000ff;
//
//
//	var mat_red = new THREE.MeshBasicMaterial( {
//		color: color_red,
//		transparent: true,
//		opacity: .999999999999,
//		side: THREE.DoubleSide
//	} );
//	var message_x = "X";
//	var shapes = font.generateShapes( message_x, 1 );
//	var geometry = new THREE.ShapeBufferGeometry( shapes );
//	geometry.computeBoundingBox();
//	xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
//	geometry.translate( xMid, 0, 0 );
//	textX = new THREE.Mesh( geometry, mat_red );
//	textX.position.x = 7;
//	scene.add( textX );
//	});
//}

