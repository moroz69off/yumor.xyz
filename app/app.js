"use strict";
/*



*/

let app = null;
let host = null;

try {
	app = await fetch('https://vk.com/');
	console.log(app);
}
catch(err) {
	alert(err);
}
