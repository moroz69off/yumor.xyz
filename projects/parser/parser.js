"use strict";

/*



*/

var data = [];
var result = null;
var mrz_parser = document.createElement("div");
var domain_value = "contoso.ru";
var input_value = "tele-vizor";

Init();

function Init () {
	window.onload = function () {

		let domain_name = domain_value;
		
		let path = input_value;

		result = GetResult(domain_name, path);

		mrz_parser.innerHTML = '<p>parse result: ' + result + '<ruby><rt>₽</rt><rp>ruble</rp></ruby></p>';

		document.body.appendChild(mrz_parser);
	}
}

function GetResult (arg1, arg2) {

	let data_value = ["arg1", "arg2"];
	data[0] = data_value[0].length;
	data[1] = data_value[1].length;
	return (data[0] + data[1]) * 10 * 10 * 10 * 10;
}
