//This tells Myo.js to create the web sockets needed to communnicate with Myo Connect
Myo.connect('com.myojs.deviceGraphs');

Myo.on('gyroscope', function(quant){
	updateGraph(quant);
})

var range = 500;
var resolution = 100;
var graph;

var arrayOfZeros = Array.apply(null, Array(resolution)).map(Number.prototype.valueOf,0);

var graphData= {
	x : arrayOfZeros.slice(0),
	y : arrayOfZeros.slice(0),
	z : arrayOfZeros.slice(0),
//	w : Array.apply(null, Array(resolution)).map(Number.prototype.valueOf,0)
}

$(document).ready(function(){
	graph = $('.orientationGraph').plot(formatFlotData(), {
		colors: [ '#04fbec', '#ebf1be', '#c14b2a', '#8aceb5'],
		xaxis: {
			show: false,
			min : 0,
			max : resolution
		},
		yaxis : {
			min : -range,
			max : range,
		},
		grid : {
			borderColor : "#427F78",
			borderWidth : 1
		}
	}).data("plot");


});

var formatFlotData = function(){
	return Object.keys(graphData).map(function(axis){
		return {
			label : axis + ' axis',
			data : graphData[axis].map(function(val, index){
				return [index, val]
			})
		}
	});
}


var oldOrientationData = {x: 0, y:0, z :0 },  distance = 0;
var oldTime = new Date().getTime()
var timeDifference = 1000
var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";	
var updateGraph = function(orientationData){
	

	  distance = Math.max(
	 	(oldOrientationData.x - orientationData.x),
	 	(oldOrientationData.y - orientationData.y),
	 	(oldOrientationData.z - orientationData.z))

	 oldOrientationData = orientationData;
	 
	 if(distance > 100){

	keyboardEvent[initMethod](
                   "keydown", // event type : keydown, keyup, keypress
                    true, // bubbles
                    true, // cancelable
                    window, // viewArg: should be window
                    false, // ctrlKeyArg
                    false, // altKeyArg
                    false, // shiftKeyArg
                    false, // metaKeyArg
                    40, // keyCodeArg : unsigned long the virtual key code, else 0
                    0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
	);
	document.dispatchEvent(keyboardEvent);
	 	

	  console.log("distance: ", distance)
	  console.log(" timeDiff : ", timeDifference)
	  console.log("TODO call punch");

	  newTime = new Date().getTime();
	 timeDifference = newTime - oldTime;
	 oldTime = newTime;
	 }
	Object.keys(orientationData).map(function(axis){
		graphData[axis] = graphData[axis].slice(1);
		graphData[axis].push(orientationData[axis]);
	});

	graph.setData(formatFlotData());
	graph.draw();
}



/*




*/