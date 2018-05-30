(function(){
	var Socket, myoList = {};
	if(typeof window !== 'undefined'){
		if(!("WebSocket" in window)) throw "MYO: Websockets are not supported by your browser :(";
		Socket = WebSocket;
	}

	var Myo = {
		defaults : {
			api_version : 3,
			socket_url  : "ws://127.0.0.1:10138/myo/",
			app_id      : 'com.myojs.default'
		},
		lockingPolicy : 'default',
		events : [],
		myos : [],

		onError : function(){
			throw 'MYO: Error with the socket connection. Myo Connect might not be running. If it is, double check the API version.';
		},
		setLockingPolicy: function(policy) {
			Myo.socket.send(JSON.stringify(['command',{
				"command": "set_locking_policy",
				"type": policy
			}]));
			Myo.lockingPolicy = policy;
			return Myo;
		},
		trigger : function(eventName){
			var args = Array.prototype.slice.apply(arguments).slice(1);
			emitter.trigger.call(Myo, Myo.events, eventName, args);
			return Myo;
		},
		on : function(eventName, fn){
			return emitter.on(Myo.events, eventName, fn);
		},
		off : function(eventName){
			Myo.events = emitter.off(Myo.events, eventName);
			return Myo;
		},

		connect : function(appId, socketLib){
			if(socketLib) Socket = socketLib;
			if(!Socket) throw "MYO: Must provide a socket library to use. Try 'Myo.setSocketLib('id', require('ws'))' before you connect.";
			if(appId){
				Myo.defaults.app_id = appId;
			}
			Myo.socket = new Socket(Myo.defaults.socket_url + Myo.defaults.api_version + '?appid=' + Myo.defaults.app_id);
			Myo.socket.onmessage = Myo.handleMessage;
			Myo.socket.onopen = Myo.trigger.bind(Myo, 'ready');
			Myo.socket.onclose = Myo.trigger.bind(Myo, 'socket_closed');
			Myo.socket.onerror = Myo.onError;
		},
		disconnect : function(){
			Myo.socket.close();
		},

		handleMessage : function(msg){
			var data = JSON.parse(msg.data)[1];
			if(!data.type || typeof(data.myo) === 'undefined') return;
			if(data.type == 'paired'){
				var exists = Myo.myos.some(function(myo) {
					return myo.macAddress == data.mac_address;
				});

				if (!exists) {
					Myo.myos.push(Myo.create({
						macAddress      : data.mac_address,
						name            : data.name,
						connectIndex    : data.myo
					}));
				}
			}

			Myo.myos.map(function(myo){
				if(myo.connectIndex === data.myo){
					var isStatusEvent = true;
					if(eventTable[data.type]){
						isStatusEvent = eventTable[data.type](myo, data);
					}
					if(!eventTable[data.type] || isStatusEvent){
						myo.trigger(data.type, data, data.timestamp);
						myo.trigger('status', data, data.timestamp);
					}
				}
			})
		},

		create : function(props){
			var myoProps = utils.merge({
				macAddress      : undefined,
				name            : undefined,
				connectIndex    : undefined,
				locked          : true,
				connected       : false,
				synced          : false,
				batteryLevel    : 0,
				lastIMU         : undefined,
				arm             : undefined,
				direction       : undefined,
				warmupState     : undefined,
				orientationOffset : {x : 0,y : 0,z : 0,w : 1},
				events : [],
			}, props || {});
			return utils.merge(Object.create(Myo.methods), myoProps);
		},

		methods : {
			trigger : function(eventName){
				var args = Array.prototype.slice.apply(arguments).slice(1);
				emitter.trigger.call(this, Myo.events, eventName, args);
				emitter.trigger.call(this, this.events, eventName, args);
				return this;
			},
			_trigger : function(eventName){
				var args = Array.prototype.slice.apply(arguments).slice(1);
				emitter.trigger.call(this, this.events, eventName, args);
				return this;
			},
			on : function(eventName, fn){
				return emitter.on(this.events, eventName, fn);
			},
			off : function(eventName){
				this.events = emitter.off(this.events, eventName);
				return this;
			},
			lock : function(){
				Myo.socket.send(JSON.stringify(["command", {
					"command": "lock",
					"myo": this.connectIndex
				}]));
				return this;
			},
			unlock : function(hold){
				Myo.socket.send(JSON.stringify(["command", {
					"command": "unlock",
					"myo": this.connectIndex,
					"type": (hold ? "hold" : "timed")
				}]));
				return this;
			},
			zeroOrientation : function(){
				this.orientationOffset = utils.quatInverse(this.lastQuant);
				this.trigger('zero_orientation');
				return this;
			},
			vibrate : function(intensity){
				intensity = intensity || 'medium';
				Myo.socket.send(JSON.stringify(['command',{
					"command": "vibrate",
					"myo": this.connectIndex,
					"type": intensity
				}]));
				return this;
			},
			requestBluetoothStrength : function(){
				Myo.socket.send(JSON.stringify(['command',{
					"command": "request_rssi",
					"myo": this.connectIndex
				}]));
				return this;
			},
			requestBatteryLevel : function(){
				Myo.socket.send(JSON.stringify(['command',{
					"command": "request_battery_level",
					"myo": this.connectIndex
				}]));
				return this;
			},
			streamEMG : function(enabled){
				Myo.socket.send(JSON.stringify(['command',{
					"command": "set_stream_emg",
					"myo": this.connectIndex,
					"type" : (enabled ? 'enabled' : 'disabled')
				}]));
				return this;
			}
		}
	};

	var eventTable = {
		//Stream Events
		'pose' : function(myo, data){
			if(myo.lastPose){
				myo.trigger(myo.lastPose + '_off');
				myo.trigger('pose_off', myo.lastPose);
			}
			if(data.pose == 'rest'){
				myo.trigger('rest');
				myo.lastPose = null;
				if(Myo.lockingPolicy === 'standard') myo.unlock();
			}else{
				myo.trigger(data.pose);
				myo.trigger('pose', data.pose);
				myo.lastPose = data.pose;
				if(Myo.lockingPolicy === 'standard') myo.unlock(true);
			}
		},
		'orientation' : function(myo, data){
			myo.lastQuant = data.orientation;
			var ori = utils.quatRotate(myo.orientationOffset, data.orientation);
			var imu_data = {
				orientation : ori,
				accelerometer : {
					x : data.accelerometer[0],
					y : data.accelerometer[1],
					z : data.accelerometer[2]
				},
				gyroscope : {
					x : data.gyroscope[0],
					y : data.gyroscope[1],
					z : data.gyroscope[2],
					ax : data.accelerometer[0],
					ay : data.accelerometer[1],
					az : data.accelerometer[2],
					data: data,
					myo: myo
				}
			};
			if(!myo.lastIMU) myo.lastIMU = imu_data;
			myo.trigger('orientation',   imu_data.orientation, data.timestamp);
			myo.trigger('accelerometer', imu_data.accelerometer, data.timestamp);
			myo.trigger('gyroscope',     imu_data.gyroscope, data.timestamp);
			myo.trigger('imu',           imu_data, data.timestamp);
			myo.lastIMU = imu_data;
		},
		'emg' : function(myo, data){
			myo.trigger(data.type, data.emg, data.timestamp);
		},


		//Status Events
		'arm_synced' : function(myo, data){
			myo.arm = data.arm;
			myo.direction = data.x_direction;
			myo.warmupState = data.warmup_state;
			myo.synced = true;

			return true;
		},
		'arm_unsynced' : function(myo, data){
			myo.arm = undefined;
			myo.direction = undefined;
			myo.warmupState = undefined;
			myo.synced = false;
			return true;
		},
		'connected' : function(myo, data){
			myo.connectVersion = data.version.join('.');
			myo.connected = true;
			return true;
		},
		'disconnected' : function(myo, data){
			myo.connected = false;
			return true;
		},
		'locked' : function(myo, data){
			myo.locked = true;
			return true;
		},
		'unlocked' : function(myo, data){
			myo.locked = false;
			return true;
		},
		'warmup_completed' : function(myo, data){
			myo.warmupState = 'warm';
			return true;
		},

		'rssi' : function(myo, data){
			data.bluetooth_strength =  utils.getStrengthFromRssi(data.rssi);
			myo.trigger('bluetooth_strength', data.bluetooth_strength, data.timestamp);
			myo.trigger('rssi', data.rssi, data.timestamp);
			myo.trigger('status', data, data.timestamp);
		},
		'battery_level' : function(myo, data){
			myo.batteryLevel = data.battery_level;
			myo.trigger('battery_level', data.battery_level, data.timestamp);
			myo.trigger('status', data, data.timestamp);
		},
	};


	var emitter = {
		eventCounter : 0,
		trigger : function(events, eventName, args){
			var self = this;
			events.map(function(event){
				if(event.name == eventName) event.fn.apply(self, args);
				if(event.name == '*'){
					var args_temp = args.slice(0);
					args_temp.unshift(eventName);
					event.fn.apply(self, args_temp);
				}
			});
			return this;
		},
		on : function(events, name, fn){
			var id = new Date().getTime() + "" + emitter.eventCounter++;
			events.push({
				id   : id,
				name : name,
				fn   : fn
			});
			return id;
		},
		off : function(events, name){
			events = events.reduce(function(result, event){
				if(event.name == name || event.id == name || !name) {
					return result;
				}
				result.push(event);
				return result;
			}, []);
			return events;
		},
	};

	var utils = {
		merge : function(obj1,obj2){
			for(var attrname in obj2) { obj1[attrname] = obj2[attrname]; }
			return obj1;
		},
		quatInverse : function(q) {
			var len = Math.sqrt(q.x * q.x + q.y * q.y + q.z * q.z + q.w * q.w);
			return {
				w: q.w/len,
				x: -q.x/len,
				y: -q.y/len,
				z: -q.z/len
			};
		},
		quatRotate : function(q, r) {
			return {
				w: q.w * r.w - q.x * r.x - q.y * r.y - q.z * r.z,
				x: q.w * r.x + q.x * r.w + q.y * r.z - q.z * r.y,
				y: q.w * r.y - q.x * r.z + q.y * r.w + q.z * r.x,
				z: q.w * r.z + q.x * r.y - q.y * r.x + q.z * r.w
			};
		},
		getStrengthFromRssi : function(rssi){
			var min = -95;
			var max = -40;
			rssi = (rssi < min) ? min : rssi;
			rssi = (rssi > max) ? max : rssi;
			return Math.round(((rssi-min)*100)/(max-min) * 100)/100;
		},
	};
	if(typeof window !== 'undefined') window.Myo = Myo;
	if(typeof module !== 'undefined') module.exports = Myo;
})();

//This tells Myo.js to create the web sockets needed to communnicate with Myo Connect
Myo.connect('com.myojs.deviceGraphs');

Myo.on('gyroscope', function(quant){ gyroListener(quant); })


var settings = {
	 oldOrientationData: {x: null, y:null, z :null }
	 ,  distance: 1000
	, oldTime: new Date().getTime()
	, timeDifference: 0
	, lastLaugh: 0
	, accel : []
 }

var right = Object.assign(settings);
var left = Object.assign(settings);
var handSide = {
 "c0-6b-70-de-9e-08": {
 	hand: "left",
 	code: 37,
 	settings: left,
 	initFlag: false
 },
 "dd-e1-c9-30-42-f2": {
 	hand: "right",
 	code: 39,
 	settings: right,
 	initFlag: false
 },
};

function initHand(hand, data) {
	 hand.settings.oldOrientationData = {x: data.x, y:data.y, z :data.z  }
	 hand.settings.oldAccel = {ax: data.ax, ay:data.ay, az :data.az  }
}

function getNewDistance(oldOrientationData, orientationData) {
	return  Math.max(Math.abs(orientationData.x),
						Math.abs(orientationData.y),
						Math.abs(orientationData.z))
}

function mapAccelTime(hand ,acell)  {
	if (acell < 1) 
		return 1000;
	if (acell < 1.1) 
		return 900;
	if (acell < 1.2) 
		return 800;
	if (acell < 1.5) 
		return 300;

}

const blockHandle = (data, currentHand, time) => {

	if (!currentHand.blockTime) currentHand.blockTime = 0
	if (!currentHand.unblockTime) currentHand.unblockTime = 0
	if (distance > 170 ) 
		if ( !currentHand.blockFlag && (time - currentHand.unblockTime )> 500 ) {
				currentHand.blockFlag = true
				currentHand.blockTime = time
		} else if( time - currentHand.blockTime > 800) {
			console.log("unblock")

			sendKeyPress(40, "keyup")
			currentHand.blockFlag = false
			currentHand.unblockTime = time
		}

	const shouldBlockFlag = Object.keys(handSide)
		.filter(handKey => handSide[handKey].blockFlag)
		.length ==  Object.keys(handSide).length;

		if(shouldBlockFlag) {
			console.log("block")
			// debugger;
					sendKeyPress(40, "keydown")
		}	
		return shouldBlockFlag;
}
	
 
var gyroListener = function(data){
	
					window.data= data;
	var hand = handSide[data.myo.macAddress];

	if(!hand.initFlag) {
		initHand(hand, data);
		hand.initFlag = !hand.initFlag
	}
	// if (hand.hand == "left")
	// console.log (data.ax, data.ay, data.az )


	handSettings = hand.settings
	code = hand.code

	maxAccel = Math.max(Math.abs(data.ax) ,Math.abs(data.ay) ,Math.abs(data.az) )

	accelAvg = getAvgAccel(hand.settings.accel) || 0.8;
	//empty acceleration if threshold gets too high
	if (accelAvg> 1.4 ) 
		hand.settings.accel = [];

	distance = getNewDistance(handSettings.oldOrientationData, data);
	

	myDate = new Date()
	newTime = myDate.getTime();	 	
	store.push({accelleration: maxAccel, time: myDate})

	// blockHandle(distance, hand, newTime)

	timeLimit = mapAccelTime(hand, maxAccel);
	timeDifference =  newTime - handSettings.oldTime;


	// if no punch for long time update data hand since it moves either way
	if (timeDifference > 5000 ) {
		updateHand(hand, data, newTime)
		return;
	}

	if( 
		true 
	 	&&timeDifference > timeLimit
	 	){
	
			if( 
					true 
				 	// &&distance > 200
		 	){

				if(
					true
				 	&& maxAccel  > 1.2
					){
							 		hand.axel=maxAccel
							 		punchesThrownData.push({time:myDate, punData: hand})
							 		console.log("#################")
							 		// printObj(hand)
							 		// printObj(data)
							 		// printObj(maxAccel)
						 			handSettings.accel.push(maxAccel)
					
									updateHand(hand, data, newTime);
									sendKeyPress(code, "keydown");
					} 
					// else if(  newTime - lastLaugh > 3000){
				 // 	// 	counterLaughs++;
				 // 	// 	console.log("haha u punch like a girl")
					// 	// lastLaugh = newTime
					// }
			}
			 // else if( 
				// 		true 
			 // 			&&handSettings.distance > 30
				// 		&&  handSettings.newTime - handSettings.lastLaugh > 3000
		 	// 	){
		 	// 	handSettings.lastLaugh = handSettings.newTime;
		 	// 	console.log("haha u punch like a girl")
		 	//  	handSettings.oldTime = handSettings.newTime;
		 	// 	}		
		}
}

function sendKeyPress(code, eventType) {
	
	var eventToSend = document.createEvent('KeyboardEvent'); 
	Object.defineProperty(eventToSend, 'keyCode', {
	    get : function() { return this.keyCodeVal;}
	});     

	eventToSend.initKeyboardEvent(eventType,true,true,null,false,false,false,false,code,code);
	eventToSend.keyCodeVal = code;
	document.querySelector('body').dispatchEvent(eventToSend);
}

const updateHand = (hand, data, newTime) => {
	hand.settings.oldOrientationData = {x: data.x, y:data.y, z:data.z};
	hand.settings.oldTime = newTime;	
}

function printObj(obj) {
			 		Object.keys(obj).forEach(
		 			key => console.log(key, obj[key])
		 		)
}

const getAvgAccel = (arr) => 
	arr.length > 3 ? arr.slice(  arr.length-3, arr.length-1)
	.reduce(function(a, b) { return a + b; }) / 3 : 0


counterPlayer=0
counterLaughs=0
counterEnemy=0
lastLaugh =0 
store = []
punchesThrownData = []
