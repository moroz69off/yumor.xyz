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
		mrz_.classList.add('container');
		mrz_.style.color = '#c9c9c9';
		
		document.body.appendChild(mrz_);
	}
}

function GetResult () {
	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

	var xhr = new XHR();

	xhr.open('GET', domain_value, true);

	xhr.onload = function() {
		if (xhr.status != 200) {
			console.log( 'Error: ' + xhr.status);
			return;
		}
	};

	xhr.onprogress = function(event) {
		console.log(`loaded ${event.loaded} from ${event.total}`);
	};

	xhr.onerror = function() {
		alert('Error: ' + xhr.status);
	};

	xhr.send();

	result = xhr.response;

	mrz_.innerHTML = '<div class="container-fluid"><p>Result: ' + result + '₽</p></div>';
}

function GetDomain (event) {
	domain_value = event.target.value;
}

function GetResponce (event) {
	responce_value = event.target.value;
}
