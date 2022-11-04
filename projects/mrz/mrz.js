"use strict";

/*



*/

var data = [];
var result = null;
var mrz_ = document.createElement("div");
var domain_value = "";
var responce_value = null;

Init();

function Init() {
	window.onload = function () {

		mrz_.classList.add('result');
		mrz_.classList.add('container');
		mrz_.style.color = '#c9c9c9';
		document.body.appendChild(mrz_);
	}
}

function GetResult () {
	
	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
	var xhr = new XHR();

	console.log('XHR = '+ xhr);
	console.log('domain value = '+ domain_value);

	xhr.open('GET', domain_value, true);
	xhr.setRequestHeader('Access-Control-Allow-Origin', domain_value);
	xhr.onload = function () {
		if (xhr.status != 200) {
			console.log('Status: ' + xhr.status);
			return;
		}
	};
	xhr.onprogress = function (event) {
		console.log("loaded " + event.loaded + " from " + event.total);
		console.log('event type = '+ event.type);
	};
	xhr.onerror = function() {
		console.log('Error: ' + xhr.status);
		console.log('xhr = : ' + xhr);
		return;
	};
	xhr.send();
	result = xhr.response;
	console.log('result = '+result);
	mrz_.innerHTML = '<div class="container-fluid"><p>Result: ' + result + '₽</p></div>';
}

function GetDomain(event) {
		if (domain_value == null) domain_value = 'https://yu-mor.xyz'; // temp url string
		else domain_value = event.target.value;
}

function GetResponce(event) {
		responce_value = event.target.value;
}
