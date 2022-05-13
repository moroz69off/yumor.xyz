"use strict";

/*



*/

var data = [];
var result = null;
var mrz_ = document.createElement("div");
var domain_value = "a";
var responce_value = "b";

Init();

function Init() {
	window.onload = function () {

		mrz_.classList.add('result');
		mrz_.classList.add('container');
		mrz_.style.color = '#c9c9c9';
<<<<<<< HEAD

=======
		
>>>>>>> b3c7092d0b01c7e2afe5f7c9896159a511a5ded2
		document.body.appendChild(mrz_);
	}
}

<<<<<<< HEAD
function GetResult() {
=======
function GetResult () {
>>>>>>> b3c7092d0b01c7e2afe5f7c9896159a511a5ded2
	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

	var xhr = new XHR();

<<<<<<< HEAD
=======
	xhr.open('GET', domain_value, true);
>>>>>>> b3c7092d0b01c7e2afe5f7c9896159a511a5ded2

	xhr.open('GET', domain_value, true);

	xhr.setRequestHeader('Access-Control-Allow-Origin', domain_value);

	xhr.onload = function () {
		if (xhr.status != 200) {
			console.log('Error: ' + xhr.status);
			return;
		}
	};

<<<<<<< HEAD
	xhr.onprogress = function (event) {
		console.log(`loaded ${event.loaded} из ${event.total}`);
		console.log(event);
		console.log(event.result);
	};

	xhr.onerror = function () {
=======
	xhr.onprogress = function(event) {
		console.log(`loaded ${event.loaded} from ${event.total}`);
	};

	xhr.onerror = function() {
>>>>>>> b3c7092d0b01c7e2afe5f7c9896159a511a5ded2
		alert('Error: ' + xhr.status);
	};

	xhr.send();

	result = xhr.response;

	mrz_.innerHTML = '<div class="container-fluid"><p>Result: ' + result + '₽</p></div>';
}

function GetDomain(event) {
	domain_value = event.target.value;
}

function GetResponce(event) {
	responce_value = event.target.value;
}
