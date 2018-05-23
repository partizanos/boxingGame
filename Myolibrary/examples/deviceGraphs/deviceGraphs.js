//This tells Myo.js to create the web sockets needed to communnicate with Myo Connect
Myo.connect('com.myojs.deviceGraphs');

// Myo.on('gyroscope', function(quant){
Myo.on('accelerometer', function(quant){
	// console.log(quant);
	// updateGraph(quant);
	accelerometerTrigger(quant);
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

	distancex = oldOrientationData.x - orientationData.x
	distancey = oldOrientationData.y - orientationData.y
	distancez = oldOrientationData.z - orientationData.z
	  distance = Math.max(
	 	(distancex),
	 	(distancey),
	 	(distancez))

	 oldOrientationData = orientationData;
	 newTime = new Date().getTime();	 
	 timeDifference = newTime - oldTime;
	 
	 if( true 
	 	&&timeDifference > 100
	 	){
	
		 if( true 
	 	&&distance > 100
	 	){

	 //  console.log("distance x: ", 	distancex)
		// console.log("distance y: ",distancey)
		// console.log("distance z: ",distancez)
	 //  console.log(" timeDiff : ", timeDifference)
	  console.log("Left");
	  // sendPunch( );
	 	 oldTime = newTime;
	 } else if( true 
	 	&&distance > 70
	 	&&timeDifference > 3000
	 	){
	 	console.log("haha u punch like a girl")
	 	 // oldTime = newTime;
	 }
	Object.keys(orientationData).map(function(axis){
		graphData[axis] = graphData[axis].slice(1);
		graphData[axis].push(orientationData[axis]);
	});

	graph.setData(formatFlotData());
	graph.draw();
}}


var accelerometerTrigger = function(data) {
  max = Math.max(Math.abs(data.x) ,Math.abs(data.y) ,Math.abs(data.z) )
  max > 1.4 ? console.log(max) :null
}
