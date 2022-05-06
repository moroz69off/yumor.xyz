"use strict";

/*



*/

var data = [];
var result = null;
var mrz_ = document.createElement("div");
var domain_value = "a";
var responce_value = "b";

Init();

function Init () {
	window.onload = function () {

		mrz_.classList.add('result');
		mrz_.style.color = '#c0c1c2';
		
		document.body.appendChild(mrz_);
	}
}

function GetResult () {
	result = (domain_value.length + responce_value.length) * 10 * 10 * 10 * 10;
	
	mrz_.innerHTML = '<p>Result: ' + result + '₽</p>';
}

function GetDomain (event) {
	domain_value = event.target.value;
}

function GetResponce (event) {
	responce_value = event.target.value;
}
