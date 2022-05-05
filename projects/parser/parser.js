"use strict";

/*



*/

var data = [];
var result = null;
var mrz_parser = document.createElement("div");
var domain_value = "a";
var responce_value = "b";

Init();

function Init () {
	window.onload = function () {

		mrz_parser.classList.add('result');
		mrz_parser.style.color = '#0ff';
		document.body.appendChild(mrz_parser);
	}
}

function GetResult () {
	result = (domain_value.length + responce_value.length) * 10 * 10 * 10 * 10;
	
	mrz_parser.innerHTML = '<p>Result: ' + result + '₽</p>';
}

function GetDomain (event) {
	console.log(event.target.value);
	domain_value = event.target.value;
}

function GetResponce (event) {
	console.log(event.target.value);
	responce_value = event.target.value;
}
