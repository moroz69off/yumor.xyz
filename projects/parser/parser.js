"use strict";

/*



*/

var data = [];
var result = null;
var mrz_parser = document.createElement("div");

Init();

function Init () {
	window.onload = function () {



		result = 100;

		mrz_parser.innerHTML = '<p>parse result: ' + result + '<ruby><rt>₽</rt><rp>ruble</rp></ruby></p>';

		document.body.appendChild(mrz_parser);
	}
}
