// Set initial Variables
var fontSize = document.getElementById("fontSize"),
	strokeWidth = document.getElementById("strokeWidth"),
	initFont = document.getElementById('initFont'),
	initStrokeWidth = document.getElementById('initStrokeWidth'),
	cssfontSize = document.getElementById('cssfontSize'),
	initColor = "ff0000",
	rID = document.getElementById("result"),
	strokeCss = document.getElementById("strokeCss"),
	rAct = document.getElementById("resultAction"),
	colorPicker = document.getElementById("colorPicker"),
	customColor = document.getElementById("customColor"),
	resultField = document.getElementById('resultField'),
	copyBtn = document.getElementById("copyBtn"),
	copied = document.getElementById("copied");

function init() {
	initFont.innerHTML = fontSize.value;
	cssfontSize.innerHTML = fontSize.value;
	initStrokeWidth.innerHTML = strokeWidth.value;
	colorPicker.value = '#'+initColor;
	customColor.value = initColor;
	funStroke();

	
	strokeWidth.addEventListener('input', funStroke);
	fontSize.addEventListener('input', funFontSize);
	customColor.addEventListener('input', funCustomColor);
	colorPicker.addEventListener('input', funColorPicker);
	copyBtn.addEventListener("click", copyHandler);
}

// Clipboard copy data
const funColorPicker = function(e) {
	initColor = '#'+colorPicker.value;
	customColor.value = e.target.value.slice(1);
	funStroke();
}

// Custom Color Select
const funCustomColor = function(e) {
	initColor = e.target.value;
	colorPicker.value = '#'+initColor;
	funStroke();
}

const funStroke = function(e) {
	var cV = strokeWidth.value,
	instV = '',
	eArray = [];

	initStrokeWidth.innerHTML = cV;

	// Get Multi type Combination
	for(var i=-Math.abs(cV); i <= cV; i++) { 
		for( var j=-Math.abs(cV); j <= cV; j++ ) {
			instV = i + "px " + j + "px 0px #"+customColor.value;
			eArray.push(instV);
			eArray.toString();
		}
	}

	rID.style.textShadow = eArray;
	strokeCss.innerHTML = eArray;
	rAct.style.display = "block";

	// Value is empty or 0
	if ( cV = "" || cV == 0 ) {
		cV      = null;
		eArray = "";

		rID.style.textShadow = "";
		rAct.style.display = "none";
	}
}

const funFontSize = function() {
	rID.style.fontSize = fontSize.value + "px";
	initFont.innerHTML = fontSize.value;
	cssfontSize.innerHTML = fontSize.value;
}



const copyHandler = function() {
	resultField.value = document.getElementById('copyWrap').innerText;
	resultField.select();
	document.execCommand('copy');

	copied.style.display = 'block';
	setTimeout(function(){
		copied.style.display = 'none';
	}, 1000);

}



window.addEventListener('DOMContentLoaded', function(e) {
	init();
});
  