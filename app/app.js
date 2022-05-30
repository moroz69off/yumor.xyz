"use strict";
/*



*/

let app = null;
let host = null;

try {
	app = await fetch('https://yumor.xyz/');
	console.log(app);
}
catch(err) {
	alert(err);
}
