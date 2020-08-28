// js code
function init() {
}
	 // Set initial Variables
var rID = document.getElementById("result"),
	inp = document.getElementById("inputCunt"),
	shdwR = document.getElementById("shdwR"),
	rAct = document.getElementById("resultAction"),
	clr = document.getElementById("html5colorpicker"),
	ctmC = document.getElementById("customClr"),
	sclr = "#ff0000",
	cp = document.getElementById("copied"),
	vnID = document.getElementById("vlaueNo");

clr.value = sclr;
ctmC.value = sclr;
// focus the input field after page loading
//inp.focus();

// Clipboard copy data
function html5colorpicker() {
sclr = clr.value.toString();
inp.onkeyup();
ctmC.value = sclr;
//console.log(clr.value);
}

// Custom Color Select
ctmC.onkeyup = function() { 

sclr = this.value.toString();
clr.value = sclr;
inp.onkeyup();
//console.log('type');
};

ctmC.onkeydown = function(cc) {
/*
var ccc = (cc.which) ? cc.which : cc.keyCode;
if (ccc != 46 && ccc > 31 && (ccc < 96 || ccc > 106) && (ccc < 48 || ccc > 57))
 return false;

return true;
*/
};

//  keyCode Restricting
inp.onkeydown = function(evt) {

var charCode = (evt.which) ? evt.which : evt.keyCode;
if (charCode != 46 && charCode > 31 && (charCode < 97 || charCode > 105) && (charCode < 49 || charCode > 57))
		 return false;

return true; 

};

inp.onkeyup= function() {

// Set Variables
var cV = this.value,
  vlaueNo = 2*cV + 1,
  sdwC = vlaueNo * vlaueNo,
  instV = '',
  eArray = [];


// Get Multi type Combination
for(var i=-Math.abs(cV); i <= cV; i++) { 
for( var j=-Math.abs(cV); j <= cV; j++ ) {
 instV = i + "px " + j + "px 0px " + sclr;
 eArray.push(instV);
 eArray.toString();
}
}

rID.style.textShadow = eArray;

vnID.innerHTML = "Value = " + vlaueNo + ", Shdw Cunt = " + sdwC;
shdwR.innerHTML = eArray;

rAct.style.display = "block";

// Value is empty or 0
if ( cV = "" || cV == 0 ) {
//console.log('I am Empty');
//vlaueNo = null;
//sdwC    = null;
cV      = null;
eArray = "";
//vnID.innerHTML = "";
//shdwR.innerHTML = "";

rID.style.textShadow = "";
rAct.style.display = "none";
}
};


function copyToClipboard() {
var st = shdwR.innerText;
//window.clipboardData.setData(st);
//var seltext = window.getSelection(); 
//console.log('cliked', st);
}


var btn = document.getElementById("cpyBtn");
btn.addEventListener("click", clickHandler, false);

function clickHandler(e) {
var ta = document.getElementsByTagName('textarea')[0];
ta.value = shdwR.innerText;
ta.select();
document.execCommand('copy');

cp.style.display = 'block';
setTimeout(function(){
cp.style.display = 'none';
}, 1000);

}


var fs = document.getElementById("fontSize");
fs.onchange =  function() {
cs = parseInt(fs.value);
rID.style.fontSize = cs + "px";
//console.log('ok', cs);
}
fs.onkeyup = function() {
fs.onchange();
}


window.addEventListener('DOMContentLoaded', function(e) {
	init();
});
  