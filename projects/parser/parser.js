"use strict";

/*



*/

var data = [];
var result = null;
var mrz_parser = document.createElement("div");
var domain_value = "a";
var responce_value = "b";
var domain_input = null;
var responce_input = null;

Init();

function Init () {
	window.onload = function () {
		domain_input = document.getElementById('domain_input');
		responce_input = document.getElementById('responce_input');
		document.body.appendChild(mrz_parser);
	}
}

function GetResult () {
	result = (domain_value.length + responce_value.length) * 10 * 10 * 10 * 10;
	mrz_parser.innerHTML = '<p>Result: ' + result + '₽</p>';
}

function GetDomain () {
	domain_value = domain_input.value;
}

function GetResponce () {
	responce_value = responce_input.value;
}
