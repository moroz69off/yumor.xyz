// Snowmaker Copyright (c) 2003 Peter Gehrig. All rights reserved.
// Modified (c) 2005, Igor Svetlov, Nickname: 12345c
var snowmax = 17; // Set the number of snowflakes (more than 30 - 40 not recommended)
var snowcolor = ["#c4bbcc","#ccddFF","#ccd6DD","#bccdd4"];
// Set the colors for the snow. Add as many colors as you like
var snowtype = ["Consolas","Arial Narrow","Times","Comic Sans MS"];
// Set the fonts, that create the snowflakes. Add as many fonts as you like
var snowletter = ["*","❅","❆",'✺'];   //,'$','₽','€'
// Set the letter that creates your snowflake (recommended:*)
var sinkspeed = 0.8; // Set the speed of sinking (recommended values range from 0.3 to 2)
var snowmaxsize = 45; // Set the maximal-size of your snowflaxes
var snowminsize = 22; // Set the minimal-size of your snowflaxes
var snowingleft = 0.1; //левая граница присутствия снега
var snowingwidth = 0.8; //ширина присутствия снега в окне
var opac = 1; //непрозрачность снега (0.0-1.0), при 1.0 в 2 раза быстрее работает.
var stepTime = 111; //шаг покадровой анимации (мсек). При менее 100 сильно нагружает процессор
var snow = [];
var marginbottom;
var marginright;
var x_mv = [];	var crds = [];	var lftrght = [];
var browserinfos = navigator.userAgent;
d = document;
var isOpera = self.opera;
var ie5 = d.all&&d.getElementById&&!isOpera;
var ns6 = d.getElementById&&!d.all;
var opera9 = isOpera && parseFloat(navigator.appVersion) >=9;
var browserok = ie5||ns6||isOpera;
var ww = 0;
var timer = 0;
var snowmaxOld = 0;
function createSnow(){
	for(i =0; i < Math.max(snowmax, snowmaxOld); i++){ if(i < snowmax){
		var o = d.createElement('SPAN');
		if(d.getElementById('s'+ i)){ snowZone.replaceChild(o, d.getElementById('s'+ i));}
		else{snowZone.appendChild(o);}
		o.setAttribute('id','s'+ i);
		o.style.position ='absolute';
		o.style.top = -snowmaxsize +'px';
		if(ns6) o.style.MozOpacity = opac;
		if(opera9) o.style.opacity = opac;
		if(ie5){ o.style.filter ='alpha'; o.filters[0].opacity = opac *100;}
		snowZone.childNodes[i].innerHTML = snowletter[Math.floor(snowletter.length * Math.random())];
	}else{snowZone.removeChild(d.getElementById('s'+ i));}
	}snowmaxOld = snowmax;}
function randommaker(range){return Math.floor(range * Math.random());}

function botRight(){	if(ie5 || isOpera){ marginbottom = d.body.clientHeight; marginright = d.body.clientWidth;
}else if(ns6){marginbottom = innerHeight;	marginright = innerWidth;}}
function checkPgDn(){scrltop = ns6 ? pageYOffset : document.body.scrollTop;}
function snowRestart(s){ if(s) eval(s);
	createSnow();
	snowsizerange = snowmaxsize - snowminsize;
	clearInterval(ww);clearTimeout(timer);
	checkPgDn();if(ns6) ww = setInterval(checkPgDn, 999);
	botRight();
	for(i = 0; i < snowmax; i++){ crds[i] =0;
		lftrght[i] = Math.random() *20;
		x_mv[i] = 0.03 + Math.random() /10;
		snow[i] = d.getElementById('s'+ i);
		snow[i].style.fontFamily = snowtype[randommaker(snowtype.length)];
		snow[i].style.fontSize = (0|(snow[i].size = randommaker(snowsizerange) + snowminsize)) +'px';
		snow[i].style.color = snowcolor[randommaker(snowcolor.length)];
		snow[i].sink = sinkspeed * snow[i].size /5;
		newPosSnow(randommaker(marginbottom - 3 * snow[i].size), i);
	}
	if(snowmax) movesnow(); else{ clearTimeout(timer); clearInterval(ww);}
}
function newPosSnow(y, i){ var o;
	snow[i].posy = y + (ns6 ? pageYOffset : d.body.scrollTop);
	snow[i].posx = randommaker(marginright * snowingwidth - 2* snow[i].size) + marginright * snowingleft;
	snow[i].size = randommaker(snowsizerange) + snowminsize;
	if(snow[i].hasChildNodes() && (o = snow[i].childNodes[0]).tagName =='IMG') o.width = o.height = randommaker(snowsizerange / 1.6) + snowminsize;
	if(ie5) snow[i].filters[0].opacity = opac *100; if(ns6 || opera9) snow[i].style.opacity = opac;
	setTimeout((function(i){return function(){typeof snow !='undefined' && (snow[i].style.visibility ='visible');}})(i), 250);
}
function movesnow(){if(typeof snow =='undefined')return;
	for(i =0; i < snowmax; i++){
		snow[i].style.top = (snow[i].posy += snow[i].sink + lftrght[i] * Math.sin(crds[i]) /3) +'px';
		crds[i] += x_mv[i];
		snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) +'px';
		var a = marginbottom + scrltop - 1.5 * snow[i].size - snow[i].posy;
		if(a <= 9.5 * snow[i].size){ if(ie5) snow[i].filters[0].opacity = opac * a / (9.5 * snow[i].size) *100;
		else if(ns6 || opera9) snow[i].style.opacity = opac * a / (9.5 * snow[i].size);}
		if(a <= 0 || parseInt(snow[i].style.left) > marginright - 3 * lftrght[i]){ snow[i].style.visibility ='hidden'; newPosSnow(-1.5 * snow[i].size, i);}
	}
	noStopMotion &&(timer = setTimeout(movesnow, stepTime));

}
onmousewheel = onscroll = function(){checkPgDn();};
onresize = function(){botRight();}
if(browserok){ var opera9 = isOpera && (document.body.style.opacity =='');
// start script
setTimeout(snowRestart, 99);
d.body.innerHTML +='<div id=snowZone style=position:absolute></div>';}

window.noStopMotion =1
document.querySelector('button').addEventListener('click',function(){if(noStopMotion = noStopMotion ?0:1) movesnow();},!1);



