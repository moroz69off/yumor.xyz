"use strict";

/*



*/

var data = [];
var result = null;
var mrz_ = document.createElement("div");
var domain_value = null;
var responce_value = null;

Init();

function Init () {
	window.onload = function () {
		mrz_.classList.add('result');
		mrz_.style.color = '#c0c1c2';
		document.body.appendChild(mrz_);
	}
}

function GetResult() {
	result = domain_value.Length + responce_value.Length;
	if (result) {
		mrz_.innerHTML = '<p>Result: ' + result + '₽</p>';
	}
	return null;
}

function GetDomain (event) {
	domain_value = event.target.value;
}

function GetResponce (event) {
	responce_value = event.target.value;
}
