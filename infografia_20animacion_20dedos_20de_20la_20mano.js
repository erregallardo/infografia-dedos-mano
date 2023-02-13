(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"infografia_20animacion_20dedos_20de_20la_20mano_atlas_1", frames: [[0,0,463,523]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.flash0ai = function() {
	this.initialize(ss["infografia_20animacion_20dedos_20de_20la_20mano_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AkQEQQhwhwAAigQAAieBwhyQByhwCeAAQCgAABwBwQBxByAACeQAACghxBwQhwBxigAAQieAAhyhxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-38.5,-38.5,77,77), null);


(lib.reiniciar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flecha
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AiLCeQhBg5AEhZQAAiCB1gzQBwgxBqA4QAJAEAIAGQgYg8ArgWQASgKAEAUQARBWgTBTQgDANgQABQhIAKhGgVQgLgEABgOQABgXAXgBQApgGApgBQhRhFhrArQhLAfgHBSQgOCRCTAsQBNAZBNgTIAGAIQgPAxhBAAIgBAAQh0AAhbhQg");
	this.shape.setTransform(-3.2256,0.5307);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// boton
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292C2D").s().p("AkRESQhyhxAAihQAAigByhxQByhyCfAAQChAABxByQByBxgBCgQABChhyBxQhxByihAAQifAAhyhyg");
	this.shape_1.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.7,-38.7,77.5,77.5);


(lib.ojos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AH2BGIAGgKIAMgEIAEAFQAqBlBTg7IAKgEIALAFQADAQgOAHQgoAZggAAQg5AAgchSgApaB/QgNgHADgQIAKgFIAKAEQBTA7AqhlIAFgFIAMAEIAGAKQgcBSg6AAQgfAAgpgZgAtGhJIAagPQDGhpDWBQQipAritAAQgvAAgxgDgAGSh0QDVhQDGBpIAZAPQgwADgvAAQitAAiogrg");
	this.shape.setTransform(83.85,15.1985);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AIsChQgXgFgQgRQgRgRgEgWQgEgWAJgWQAIgWASgOQALgIAMgDQAUgGAWAFQAUAEAQAOQAPAOAGAVQAGAVgEAUQgDARgMAOQgOASgWAIQgOAFgNAAQgJAAgIgDgAocCUQgXgCgVgPQgTgPgJgWQgIgVAFgZQAFgYAPgRQARgQAXgHQAYgGAXAHQAYAIAPATQARAUACAYQADAegQAZQgQAYgdAJQgLAEgNAAIgIAAgAtGhVIAagPQDGhpDWBQQipAritAAQgvAAgxgDgAGSiAQDVhQDGBpIAZAPQgwADgvAAQitAAiogrg");
	this.shape_1.setTransform(83.85,16.37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AIrCtQgWgFgQgRQgRgRgEgWQgEgWAIgWQAJgWASgOQALgIAMgDQAUgGAVAFQAVAEAPAOQAQAOAGAVQAGAVgEAUQgEARgLAOQgOASgXAIQgNAFgNAAQgJAAgJgDgAocCgQgYgCgUgPQgUgPgIgWQgIgVAEgZQAFgYAQgRQAQgRAYgGQAYgGAXAHQAXAHAQAUQARAUACAYQADAegRAZQgPAYgdAJQgLAEgNAAIgIAAgAsggnQCkiZDjAWQjBBtjbArIAVgVgAGaisQDkgWCjCZIAVAUQjbgrjBhsg");
	this.shape_2.setTransform(83.875,15.1678);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AIrDpQgWgHgRgYQgQgYgEgfQgFgfAJgfQAIgfASgTQALgLANgFQAUgIAVAHQAVAGAPAUQAPATAHAeQAGAdgFAcQgDAYgMAUQgOAZgWALQgNAHgNAAQgJAAgJgEgAocDZQgYgDgUgTQgUgUgIgeQgJgcAFghQAFggAQgXQAQgXAYgIQAYgIAWAKQAYAJAQAaQAQAbADAhQADAngRAhQgQAggdANQgLAFgNAAIgHAAgAsIgGQB3i+DiglQifCajIBhIAOgYgAGxjsQDgAlB3C+IAQAZQjJhiieiag");
	this.shape_3.setTransform(83.9,12.3141);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AI9C1QgYgCgUgOQgUgPgIgWQgEgKgBgKIAAgCQgEgWAIgWQAJgWASgOQALgIAMgDQAUgGAVAFIAMADIACABQAXAHAQAUQARAUACAZQADAdgRAZQgPAYgdAKQgLAEgNAAIgIgBgAocCaQgYgCgUgPQgUgPgIgWQgIgVAEgZQAFgYAQgRQAQgQAYgHQAYgGAXAHQAXAIAQATQARAUACAYQADAegRAZQgPAYgdAJQgLAEgNAAIgIAAgAsggtQCkiZDjAWQjBBtjbArIAVgVgAGaiyQDkgWCjCZIAVAUQjbgrjBhsg");
	this.shape_4.setTransform(83.875,15.7731);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},4).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.3,167.7,47.3);


(lib.meñique = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3399").s().p("AhQBeQgGgFgDgHQgQgqgBgsQAHiFB3ALQAsAGASAlQAkBNgQBOQgEAVgUALQgpAYgkAAQgrAAgmgig");
	this.shape.setTransform(-4.1562,-34.1564);

	this.text = new cjs.Text("Meñique", "50px 'Tahoma'", "#333333");
	this.text.lineHeight = 62;
	this.text.lineWidth = 197;
	this.text.parent = this;
	this.text.setTransform(-161.7,-173.1,1,1,14.9992);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AjUIxIAAxhIGpAAIAARhg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.text}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.8,-175.5,210.8,231.7);


(lib.inicio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABHE5QBuhpCEhJIBXgzQiriziBjWIg6DBIlRjEQCwBFCUBwIBEjGQCCDXCwC0QAKALAJANQilBRiJB5IgnAjIgEACQgFgGgBgKgAAoCVInNArIB6lRIAEAUQAIAugSAtQgtBug9BmIA6gNQDIgqDLAQIALB8g");
	this.shape.setTransform(3.725,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AoFIGQjWjXAAkvQAAkuDWjXQDXjWEuAAQEvAADXDWQDWDXAAEuQAAEvjWDXQjXDWkvAAQkuAAjXjWgAG1B7IhXAzQiDBJhvBpQACAKAEAGIAEgCIAngjQCJh5ClhRQgJgNgKgLQivi0iDjXIhEDGQiUhwiwhFIFRDEIA7jBQCADWCrCzgABiEuIgLh8QjKgQjJAqIg5ANQA8hmAthvQASgsgHguIgFgUIh5FRIHMgrIAVByg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.2,-73.2,146.4,146.4);


(lib.indice = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009999").s().p("AANCbQgqgCglgWQgugZgFgxQgCgOADgNQALgnASgnQAMgaAQgbQAegoAugMQAPgDAQAEQATAEALAOQAeAkAJAtQAEAZgGAaQgLAogMApQgKAggWAaQgPASgYAAIgIAAg");
	this.shape.setTransform(18.217,-58.2197);

	this.text = new cjs.Text("Indice", "50px 'Tahoma'", "#333333");
	this.text.lineHeight = 62;
	this.text.lineWidth = 146;
	this.text.parent = this;
	this.text.setTransform(65.35,-103.9,1,1,7.201);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Am3LmIHR5DIGeB4InRZDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.text}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-106.1,256.5,192.3);


(lib.corazon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9933").s().p("AgLCbIgggIQgTgFgPgKIgOgKQgOgLgFgRQgEgRAAgQIABgcIACgkIACgWQACgSAEgQQAEgPAHgOQAJgRALgPQAJgMAMgIQALgJAOgDQASgDARAAQARACAQAIQARAHALAOQAHAHAEAIIAMAZIAMAeQAFAPACARIACAaIABAPIgBAgIgBAVIgBAmQgBAUgQALQgHAFgJADIgbAGIggABIgfgBg");
	this.shape.setTransform(-7.0275,-62.325);

	this.text = new cjs.Text("Corazón", "50px 'Tahoma'", "#333333");
	this.text.lineHeight = 62;
	this.text.lineWidth = 198;
	this.text.parent = this;
	this.text.setTransform(-38,-158.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AjjMvIAA5dIHHAAIAAZdg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.text}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-160.9,202,242.5);


(lib.boca = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// boca
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ak5AeIgOgQIACgPICIA/IBogRQA6hBBUALQA6AIAdAvIBbAZQATgGASgKQAMgHAKgIIALgIIAJgJIAJgKIgQgFIAWgFQgdCci/AIIgkABQjWAAisiKgAidBUQCnBHCrg5QAJgCAIgEQhhgZhiAAQhPAAhRARgABqArQgYgUgfgGQgxgHgmAcIAqgEIBkAJIAAAAgAlIgIIAAgTQD5jOE0BjQBQAaAQBQIgSALIg2hPIgBAKQi8BYjHg+QgggJgYgUIh4BTgAiPhrIgVAGQC2BHC3hDIAWgIIjSgQIgXAAQhDAAhCAOg");
	this.shape.setTransform(142.15,214.3443);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6EEQg3gXgXg6IAMgQIgFgtIgDgrQgGhxAnhrIgBAjIAAARQAEA2AWA0IgmCQIAogJIAUgDQAxgDAxAMIAcAPIAKlpQAUAiAMAlQA2CshUCjIgHADIgGAEQgnAxgvAAQgWAAgXgKgAhrC9QAKBBA/AFIAfgGQAmgIANgoIAEgLQgrgRgrAAQgkAAglAMgAgui9QgNgEgLgGIAEgHQAsALArgJQAZgDAWgMIANAVIglANQgUAHgUAAQgZAAgZgLgAAAkEQgLAAgMACQAbgVAcATQARANAAADQgWgPgbgBg");
	this.shape_1.setTransform(145.4854,213.3294);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeCXQiTgPiPhaQgigWgLgTQgGgIADgGQACgEAEgBQAFgCAEACQAGABAIAIQAtAmBFAeQABgGAKgGQAngUA5gDQAggBBCACQAVAABUgFQBBgEAoAEQAZACATAEQARADAHAIIAEAHIAEAFIAsgbQATgMAHgJQAHgIAMADQANACACALQACAOgOAKQgFAFgUAIQgOAGgTAMIgQAKIgCADQgEAEgHABIgEADQhAAnhPAQQgxAKgzAAQgaAAgcgDgAhkA1Qg7ABgrARIgEABQBoArBjAFQBzAHBggrIAfgQQgFgFgDgCQgDgBgJAAIgbgFQgNgDgagBQg5gCgbAEIgYAEQgNABgKgCQgFADgMgBQhFgFgeAAIgGAAgAhOAIQgagCgQgEQgNgCgUgLIgggPIgogOQgZgJgNgKQgHgEgBgFIgdAVQgIAGgGACQgKACgEgHQgFgKAQgLIAsggQAxgkAegIQAOgEATgBIAhgBIAqABQAYABATADIAlAIQAVAFAPAAQAbACA/gQQA6gOAgAGQAcAEAeATQATAMAhAbIAgAZQAMALADAHQACAGgDAGQgCAGgGABQgGABgKgHIgqghIgDAEQgHAHgRAJIgOANIgNAMQgOAKghAGQhjAPhkAAQgnAAgngCgAi3h2QgNAEgbAPIghAVIAEABQAvASA6AUQAfALAOADQAVAEAkABQB0AFB3gTQAZgEALgHQAFgCANgLIAZgWIAGgFQgVgQgMgGQgUgMgSgEQgXgEghAJQglALgTAEQghAHgggDQgTgCghgHQglgIgQgCQgWgDgsAAQgcAAgLADg");
	this.shape_2.setTransform(146.1629,216.4866);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ak1AYQAuARAfAmIAHAHIBSggQAQgiAdgXIAWgPQhIAGg6gqIgJgHIhHBJIgKgEQDelDFDDmIAUADIgCAWQATAZAMAeIANAhIgHAKIACAUQibB8iRAAQijAAiYiegAjQBgIAKAFQCxBlC5hRIAagMQhwgehxAAQhWAAhXARgACHBAQAuABAlAbIAigaQAYgLgHgaIgBgGIANAGIgqhMQhDAghNgBQAjAgAFAwgAh7A0IDpAJIgehMIh1gBgAi3hXIgZASQDVBADXhEQhrhKhqAAQhfAAhfA8g");
	this.shape_3.setTransform(146.4,218.0986);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AlzgQIAHgLIANAHQCxAhC2giQA2gLA4AIQCAAQB7AIIADAIQh8AniUgnQhagYhZAZQhBAUg7AAQhbAAhNgtg");
	this.shape_4.setTransform(151,221.6828);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AC0B3Ii0gSQhMAChMAJQhpAQhTg7QgbgUgOgfQgDgHAEgEIAHgCIADAAQA+BMBfACQAxABAxgHQB0gPB2AWQBHALBFgMQiLgziVACQh/ABh+AWQgOACgMgEIAFgKQCqgnCuALQCBABBvA4QASAGAZgPQAZgQAYgRIARAIQgCAWgWANQhHAuhSAAQgRAAgQgCgAiugPQgSgDgRgGQgigNgfgZQgEgDgBgFQghANgfAQIguAXQACgbAdgLIA9gcQBWgoBgAMIBHAMQAxAKAvgPQBXgdBWAbQA+AUAzApQAHAGAKAEQAWAIAIAUIgGAKQgeACgZgTQgYgUgagUQgTAagjAGQgnAIgoAGQhGAMhHAAQhWAAhYgSgAjvhUIgoAOQApAEAmATQAcAMAfAHQAhAGAhABQCbALCVgwIALgFIAJgFQgOgMgegGQhUgUhTAcQgXAHgVgBQhBgGg/gNQgUgEgUAAQghAAggALg");
	this.shape_5.setTransform(154.45,216.6158);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag8CnQimgOhchlQEMB6EHhUIgOABQiSgQiRAJIhyACQC8gvDUAXQASADAOANIgBAIQAhgKAhgPQASgUAZAEIAEAAIAIAIQiUB0jNAAQgaAAgbgCgAEJgRQgNgdgfgPIgSgKQjIAujQgpIGCgQQiEhdiYAsQgvAOgkAfQhMBChTAaQC+jtERBXQBxAjBLBbQAHAIAGAKIgIALg");
	this.shape_6.setTransform(155.425,213.3785);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiA8QhJgHhEgiQg5gagzglIAagFIAOAOIDVA7QCKAJB2hJIAigUIAYASQiDBniiAAIgZgBg");
	this.shape_7.setTransform(157.675,213.955);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193.4,240.3);


(lib.anular = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF99").s().p("AgiCSIgUgCQgzgEgGg1QgEgwgCgtQgCgyAYgrQAZgtA0gGQAvgEAcAjQAdAjAKAuIAUBbQALA0gmAeQgPAMgUACQgQACgQAAQgcAAgcgFg");
	this.shape.setTransform(-3.9741,-57.2443);

	this.text = new cjs.Text("Anular", "50px 'Tahoma'", "#333333");
	this.text.lineHeight = 62;
	this.text.lineWidth = 150;
	this.text.parent = this;
	this.text.setTransform(-120,-160.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AlDsjIGfg5IDoaAImfA5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.text}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-162.9,154.4,249.10000000000002);


(lib.andando = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAATAgWQgog/AOhMQAqjvgSj0IgWANQg+AmgtA4IgZAgIAAACQA9BgAcBuQAIAggJAeIgiARQgEgBgCgDQg6g0gdhTQghhhgoheIECi7IgIp8IAZgBQA2C/AEDIQACBVAFBUQAPgPARgMQB/hdBPiAQgIgHgIgGQiehsg6iwQkrhEhCkhQiPpxEzo2IAeAHQk+KREBJoQA8CSCkAKQHvAfhWpLQglkBiwjFIkPj+QGmClB6G1QCtJtomCxQBMCNBRCCQBSCGinBjQhXAyhGBLIABHbQAYAAAXgEQBrgLBiAlQAcAJgBAgQgCADgDACQhUAthxgTQglgGgmALIgTBMQgDAKgJAKQgHAIgIAEQgJAFgIAAQgJAAgIgFgAhqhcQArjVAajZQBIGngiGrQBvgCAKBmQAGBAguAmQkXi0Bbm6gAABGjIAJAUQANAYAdABIAJgugAiWv9Qo4iECXoIQBJj9EKgmIAoAIQrAGSKPGgQENCsDmjqQBuhuABiJQAeHDlqAAQhUAAhrgZgAE16NQjGlymSgOQJHhhBKJ9QgOhLgrhRg");
	this.shape.setTransform(65.6095,212.161);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Al9eIIgbANQAapsEfonQgtIkjIICIBzASQA0gQAjAqIAJAMQhEBChQAAQgyAAg2gagAg0aFQhFhKgPhkQD5k1DNlVIlDh8QkGB0i8jXQgMgNgJgQQgygDgdgpQg/hYA7hXQgCrfImnpQkoG6h/ICQCUmPEPlFIAPAVQkiHAipH7QAoAXAbAnQAiAygSA5IgDAJQI2D8Bnq0QAtkshlksQg+i5ghjAQsZgnDOsZQAyi/DNgmQEhg3DIDYQF6HNm3GUIgHAGQE3JziyK3IDkC4QgYA9g9ARQhGASg2grQgrgigFg5IApghIgthAQhaCBiJBOQC0AvCeBmInSLBQA6AiAkA8QAdAvgaAuIgGAJIgLAAQg8AAgtgxgAGZJxIAMAUIBJgLIAggxIgfgPIgXAnIgsgGgAl2z/QAkDIDdAiQHnBKg4oyQgPifiDheQiig4hyAAQlvAABlIzg");
	this.shape_1.setTransform(73.9984,215.816);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AEQevQgWgBgPgNIgUgMIgdAIQg+gaAYhFQALggAGgiQAaiYAYiYQAQhlgvhfQhEiKgpiTQgbhmgOhlQgHguAsgGQAxAiAKBCQASB7AsB0QAoBoAqBpQAaBBADBFQABAcgFAeQgbCZgaCbQgMBFA+AFQAMADAMgFQAtgWAiAeQANA8hCAVQgiAKgkAAIgEAAgAlHejQgYgBgVgJQgRgIgPgNQgQgNgJgOQgKgRgGgSQFbnygHpgQirgGiKhkQgrgggngmQh8gVgDiDQgBgvAfgjQAbgfAngKQAOpoGanPIA4g+QjwGQh0HCQBzlTDPklIAPAPQjmHYidH2QAbAiABAsQABAggJAdQFCCwDnj3QDEjQABkpQACnEkLluQnagWhFmzQhSoHGwhqQlwDuCmFnQDEGlEAjkQC1ihg7jxQgnijhwh7QDDA5AsDEQAcB7gSB8QgOBqgeBmQghCDhoBWIgOALQGQIyBSKtQgnAQgYAgQgOAVgDAZIBXgOIABAbQg+Afg9gkQgRgKgGgUQgIgbAHgbQAHgXAOgVIAPgUIgrg7QggEBjPCcQhSA+hgAiQg0ASgzAJQAiHkjjGuQg1BkhABaIB7AgIAIAIQgbA+hDAAIgEgBgAo6HPIAiAgIAAAAQAMgBgHgKIgDgjg");
	this.shape_2.setTransform(73.5734,217.0511);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.7,4.7,130.3,415);


(lib._1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF33").s().p("AhMCVQgSgDgMgPQgIgJgIgIQgighgNgxQgMgtAdgkQAcgjAngXQAfgSAhgPQAogPArAJQAwALAmAhQAeAZgGAmQgIAxgsAcQgnAYgkAbQgmAbgoAZQgPAJgRAAIgLgBg");
	this.shape.setTransform(22.6573,-5.8836);

	this.text = new cjs.Text("Pulgar", "50px 'Tahoma'", "#333333");
	this.text.lineHeight = 62;
	this.text.lineWidth = 148;
	this.text.parent = this;
	this.text.setTransform(58.05,-49.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ApQBUIPBorIDgGEIvBIrg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.text}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.3,-51.9,267.4,99.1);


(lib.primerplano = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1_copia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAFIAgeQgGgDgFgEQgLgLgFgPQgFgRgCgRQgDgUAAgTQgxloAelpIAJhmIAZgCQBEFvgCF3QAkgZApgQQA8gYA/AGQAmAFAiARQBLAkAEBRQACAlgpAIQgUgUgQgYQgegpgygNQgqgKgmAQQgvAUgdAoQgeArgLAyIgEADIgEACIgEACIgGABIgNAAIgMgFgAj/f3QB2jMDngBQgilqBDliIAcACQBEGxhVGJIgxgOQjDAQiYBsIgEADQgEAAALgUgABCQtQp0iKgLp5QgInRE5lZQBJhRBUhJIAcADIAIAZIilDrIgKMFICJi8IBGhsQBgAqgEBwQgEBShaADQgWAAgPgPIi1DfIgOAEIgNtQQmRHOFEICQEdHDHsjYQC2hQArjHQCEpmnknLQiIiAiLh/Qpog3iEpaQhonZGajpIjrExIF1kaQK9hQBXLKQA/IIn0CrQFuDqDOF/QDVGMh6GmQhxGFlnAAQhTAAhhgVgAgPD4IATgDIgegNgAoe8qQiqCrAADxQAADxCqCqQCrCrDxAAQDwAACqirQCriqAAjxQAAjxirirQiqiqjwAAQjxAAirCqg");
	this.shape.setTransform(76.2204,208.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AIidWQgJgtgQgrQk+CBkvijQgFD5iQCJQhCjICejRQq2mRAlskQAeqCIjlsQpAiiito9Qhek5BykxQCFjjD+gpIAggEIALAKQphF7E2J5QEfJIJsiDQIxh0AMo8QATs4rxAzQk4APkCCzQITnyJYGOQDvCeAXE4QAuJ0ndFuQM1JjhrP7QgvHGmODVQBvDBA8DWQiehmgnjBgAqmNqQBwI4IVDiQGqC0EplrQHConk0q8QjCm4mSkIIgggVQi5BAi9gqIgkgGQpzI6CbMLgAAAW1QjEh2BYjVIABgEQncneD4qIQA6iXANinIAcgFIAQAXQikJPCrHaQAoByBJBtQBIBtA2B2QEdiLihEtQguBUhgAAIgIAAgAAYVWQBCgDArgwIAthTQgfgMgYAYQghAggugEIgDAFQgSAjgjgJQgPgDgOgFQgGBJBHgCg");
	this.shape_1.setTransform(113.8726,214.9982);

	this.instance = new lib.ojos("synched",0);
	this.instance.setTransform(141.4,78.55,0.7206,0.7206,0,0,0,83.9,15.2);

	this.instance_1 = new lib.boca("single",12);
	this.instance_1.setTransform(109.85,154.35,0.7206,0.7206,0,0,0,103.8,208.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AFgVPQAlmtiJmaQh+l4h7l5IAFgrQAtgQATAqQDZHOBrHxQBkHOhdHPQhLF1jwEmQDcm+AsnwgAz5TvQA4n0DJnOQCKk6DzjqIAlAKQiTEUifE0QkAHvgSItQgOGbCcGAQknmmA6n9gAKwLGQgLhmgxhdQiSkWifkOQC8BfB9EFQBbC/BNDGQBmkdDHjiQAsh6gPiXQgIhQBRgVQC+gvA4DSQBNEekOACQgwAAgggpQj9EkhkF0Qh4gQgTivgAUhA/QAHAYgbAaIg2A0QCeBvgUjqQgPisiEA2QgyAUgTA4QgRAxAKAzQA7hvAqAAQAjAAAXBKgArClgQpYiRiHprQiHpxIAlpQEPi+FQgIQJwgQEzImQE/I9mHIUQgNASgPARQlZE5mpAAQiWAAiggngA1k13QAXKtKCD1QHzC+GRldQG4l/i8o1Qh/l/lyiuQnEjImnECIgmAYIA5hGQniDAASISg");
	this.shape_2.setTransform(184.279,231.0537);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2},{t:this.instance_1},{t:this.instance,p:{startPosition:0}}]},3).to({state:[{t:this.shape_2},{t:this.instance_1},{t:this.instance,p:{startPosition:2}}]},2).to({state:[]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.3,331.3,463.5);


(lib.continua = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.movieClip_4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(178);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABBCxIgDgIIgRh+IACgJQAJABACAGQASAqACAwIAohEQAjg5AsgwQgtgDgjgYQgugfgjgpIAJAeIARArQgBAMgIACQgeALgkgGQgggJggAFQgdABgbgCIgtgDQAqgQAsgCQA3gEA2ADIAOABQgLgdgDgbQgEgYgCgYIAEgBQAVAIAOAQQAjApAuAbQAwAdA6ABIAAAIQgkAggcAkQgzBBgjBKQgFAMgJAMgAjUCgIgCgLQAZg3gMg9QgLg2gZgzIAKgCQAsAvAJA9QAMBFgrA5gAAeATQAGAAAGACIAEABQgPAbgrgEQgiAHgfASQgsAcgoAgIgiAcQBYhtCJgeg");
	this.shape.setTransform(2.45,0.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_1
	this.movieClip_4 = new lib.Símbolo1();
	this.movieClip_4.name = "movieClip_4";

	this.timeline.addTween(cjs.Tween.get(this.movieClip_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.continua, new cjs.Rectangle(-38.5,-38.5,77,77), null);


// stage content:
(lib.RECUP_ejercicioanimaciondedosdelamano19dic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Neutral:34,L:59,Ee:62,M:64,"Neutral":65,"M":69,"Ee":72,"M":75,Oh:76,"M":78,Uh:79,"M":82,Ah:84,D:85,"Neutral":89,"L":102,"Ee":103,"M":105,"Ee":106,"D":108,"Ee":110,R:112,"D":114,"Ee":118,"Uh":120,"D":122,Woo:129,"M":132,"Woo":133,"D":135,S:137,"Neutral":139,"Ee":143,"D":145,"Ee":146,"D":148,"Uh":152,"L":155,"D":157,"Ee":160,"M":163,"D":166,"Neutral":168};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,34,176,179];
	this.streamSoundSymbolsList[34] = [{id:"Migrabación41onlineaudioconvertercom",startFrame:34,endFrame:177,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_6.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			this.gotoAndPlay(2);
		}
		
		
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}
	this.frame_34 = function() {
		var soundInstance = playSound("Migrabación41onlineaudioconvertercom",0);
		this.InsertIntoSoundStreamData(soundInstance,34,177,1);
		playSound("Migrabación41onlineaudioconvertercom");
	}
	this.frame_176 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.movieClip_3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(178);
		}
	}
	this.frame_179 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(142).call(this.frame_176).wait(3).call(this.frame_179).wait(1));

	// reinicio
	this.button_5 = new lib.reiniciar();
	this.button_5.name = "button_5";
	this.button_5.setTransform(690.25,417.25);
	this.button_5._off = true;
	new cjs.ButtonHelper(this.button_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_5).wait(179).to({_off:false},0).wait(1));

	// meñique
	this.instance = new lib.meñique();
	this.instance.setTransform(281.3,255.15,1,1,-14.9992);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.meñique(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(177).to({_off:false},0).wait(3));

	// anular
	this.instance_1 = new lib.anular();
	this.instance_1.setTransform(335.05,214.15);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.anular(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(177).to({_off:false},0).wait(3));

	// corazon
	this.instance_2 = new lib.corazon();
	this.instance_2.setTransform(392.75,212.5);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.corazon(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(177).to({_off:false},0).wait(3));

	// indice
	this.instance_3 = new lib.indice();
	this.instance_3.setTransform(461.05,237.65,1,1,-6.4895);
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.indice(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(177).to({_off:false},0).wait(3));

	// pulgar
	this.instance_4 = new lib._1();
	this.instance_4.setTransform(537.55,375.45);
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib._1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(177).to({_off:false},0).wait(3));

	// mano
	this.instance_5 = new lib.flash0ai();
	this.instance_5.setTransform(254,133,0.6979,0.6979);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(177).to({_off:false},0).wait(3));

	// boton_continua
	this.movieClip_3 = new lib.continua();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(720.5,517.5);
	this.movieClip_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(176).to({_off:false},0).to({_off:true},1).wait(3));

	// ojos_cejas
	this.instance_6 = new lib.ojos("synched",0);
	this.instance_6.setTransform(502.2,285.9,1,1,0,0,0,83.9,15.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).to({_off:true},143).wait(3));

	// boca
	this.instance_7 = new lib.boca("single",12);
	this.instance_7.setTransform(458.3,391.1,1,1,0,0,0,103.7,208.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({_off:false},0).wait(25).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:12},0).wait(4).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:11},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:12},0).wait(13).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:10},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:11},0).wait(2).to({startPosition:2},0).wait(7).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:12},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:11},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:12},0).to({_off:true},9).wait(3));

	// cara
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AuyUPQDNlbE4jfIALAfQhNAhg3BCQh4CRhcCkQjrGviDHaQgCAFgDAFQgemhDZlvgAIXNWQgfgigmgXIAHgbIAegGQH0F8AtKCQAIBlAOBkQhqqTmtnagAjJLxIgtgJQkQg8jdisQjsi4ilj6QihjzgkkiQglklA5khQA6kpDBjrQC8jnENiFQEQiIEwgIQEqgIEQB4QEQB4DBDhQDEDlBQEiQBOEagFElQAMEphoEXQhpEbjnDFQi1CdjiA5Qg9APhBAIQh8AQh8AAQirAAisgegAlM+fQkdBNjmC6QjmC5hxESQgfBNgRBSQhBEkAqEoQArEtClD9QChD4DzClQD0CmEkAhQElAhEig2QErg2DLjgQDLjiA+kpQA8kmgdkqQgdklh6kKQh+kVjwi8Qjli0kfgwQhsgShsAAQiwAAivAxg");
	this.shape.setTransform(505.7546,386.7279);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(34).to({_off:false},0).to({_off:true},143).wait(3));

	// saludo
	this.instance_8 = new lib.primerplano("synched",0);
	this.instance_8.setTransform(402,384.35,1,1,0,0,0,76.2,208.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({startPosition:5},5).to({_off:true},5).wait(146));

	// andando
	this.instance_9 = new lib.andando("synched",0);
	this.instance_9.setTransform(-71.1,364.1,1,1,0,0,0,63.4,209.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:352,startPosition:6},24).to({_off:true},1).wait(155));

	// mujer
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("As8XeQBinShamfQgfiSg2hTQgjg3gvglQg0gog6gMQgBgRAOgOQANgNASgDQAcgDAnAVQCsBfBKEaQA4DXgHDuQgGDgg9DlQhpGNkUGwQDjmuBUmPgEgJfAjTQgFgIAKgPQAdgtAtgxQAfghA4gzQB1hsB7hmQBzhgBahAQBHgyAvgRQAagKARAEQAMADAHAKQAIAJgCALQgCAOgYAOQiWBajgDBQkHDhhmBIQgJAHgIABIgEABQgIAAgDgGgAKdX5QkEhVjIioQjTi0hejsQg6iQgRixQgRi0Aai6QAai0BBivQAkhfA3gMQg3C3gdCUQgiCzAACfQABCzAsCgQAwCtBeCGQBZB8CJBmQCUBuC2BEQCuBADBAVQFiAnGIhvQikA/h0AiQiaAsiHAKQgxAEgyAAQjOAAjXhFgA1EWEQglgRgdggQgYgbgVgpQgLgUgYg3QgTgugUgTQgOgOgSgFQgTgHgSAGQgXAHgbAqQgbArgWAJQgJAEgIgBQgKgBgFgGQgJgJAFgPQAEgMALgNQD1kmCdlcQAzhxARhNQALgwAEgMQALghAUgRQAIBZgeBqQgWBMgzBuQh+EMiRC+QAhACAeAYQAbAVAUAhQALAUAUAsQATAqANAVQAUAhAbAUQAgAXAhAAQAYAAAbgNQATgJAbgUQApgdAVgaQAdgjACglQAHAggRAlQgMAagbAkQgeAogYAUQghAegjAHQgMACgMAAQgcAAgcgMgAwqiJQA1gJApgiQALgJAVgWQAsguAVgYQAigoAXgkQASgeAPgkQALgaAFgRQALgmgFglIgCgTQgBgXALgVQAOgBALATQAYArgFA4QgEAsgXA3QgLAegPAXQgKARgTAVQgWAagXAUQgSAQgqAdQg1AkgiARQgyAYgtADQAAgIAOgDgAnOlAQgagMgUgWQgZgagLggQgEgKgHgeIgLg3IgFgfQABgbgBgNIgCgVQAAgMAFgHQAFgIAKgCQAKgCAKAEQARAIAHAVQADAJADAfQABALAHAkIAKAvQAGAfAHANQAPAeAlAQQAcAMAoACQA3ACBAgSQAxgOBBgdIAEAGIiHBGQgdAPgZAJQgoAOgoABIgCAAQgqAAgigRgAu8qCQh4gfhdhDQiQhphOi6QhGiogEjJQgEjYBJi2QBRjLCehrQAbgTASACQANABAJAKQAJALgEALQiPBYhQCwQhFCcgIDBQgJDmBKCxQArBjBDBNQBIBSBaAuQCEBDCtgIQCRgHCog7QDFhGCLhuQCgiAA8imQA9ipgujFQgpizh1ihQiNjDixhKQishIj3AdQioAUiYA6QifA9iABiQiGBmhcCJQhfCNgkCeQgTBTgFBlQgEBLACBwQgslnBtj1QBDiZCFh+QB8h0CjhPQD8h5EVgKQDcgHCeBFQCfBHCICkQCoDHAxDeQAaB3gLB3QgMB7gzBpQh2DylLCgQjxB0jTAKIgmABQhmAAhegZg");
	this.shape_1.setTransform(268.8402,384.4635);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},1).wait(179));

	// inicio
	this.button_6 = new lib.inicio();
	this.button_6.name = "button_6";
	this.button_6.setTransform(408.9,295.8);
	new cjs.ButtonHelper(this.button_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_6).to({_off:true},1).wait(179));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(271.2,351.2,487.8,286.09999999999997);
// library properties:
lib.properties = {
	id: 'BCDC88B7917E1D448A1AEC92DB5180FD',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/infografia_20animacion_20dedos_20de_20la_20mano_atlas_1.png", id:"infografia_20animacion_20dedos_20de_20la_20mano_atlas_1"},
		{src:"sounds/Migrabación41onlineaudioconvertercom.mp3", id:"Migrabación41onlineaudioconvertercom"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BCDC88B7917E1D448A1AEC92DB5180FD'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;