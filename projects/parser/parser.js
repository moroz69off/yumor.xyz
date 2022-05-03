"use strict";

/*



*/

var data = [];
var result = "";
var mrz_parser = document.createElement("div");

Init();

function Init () {
	window.onload = function () {
		result = "result ";

		mrz_parser.innerHTML = '<p>parse result</p>' + result + '<ruby><rt>₽</rt><rp>ruble</rp></ruby>';

		document.body.appendChild(mrz_parser);
	}
}
