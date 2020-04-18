// Variables

var inputvol = .3;
var randomoffset = 0;
var vertex = [];


// Create container to hold animation

var container = new MovieClip();
addChild(container);
container.x = stage.stageWidth / 2;
container.y = stage.stageHeight / 2;


// Import media microphone

import flash.media.Microphone;
var mic: Microphone = Microphone.getMicrophone();
mic.setLoopBack(true);


// Draw shape vertices

drawvertices();

function drawvertices() {
	for (var i = 0; i < 8; i++) {
		var ball: Ball = new Ball();
		container.addChild(ball);
		vertex.push(ball);
		var pos: Point = Point.polar(80, (i / 8) * Math.PI * 2);
		ball.x = pos.x;
		ball.y = pos.y;
	}
}


// Draw Polygon shape from vertices

var polyContainerSprite = new Sprite();
container.addChild(polyContainerSprite);

function enterframe(e: Event) {
	for (var i = 0; i < 8; i++) {
		randomoffset = (mic.activityLevel + 1) * randomNumber(-2, 8);
		var pos: Point = Point.polar(80 + (inputvol * randomoffset), (i / 8) * Math.PI * 2);
		vertex[i].x = pos.x;
		vertex[i].y = pos.y;
	}

	polyContainerSprite.graphics.clear();
	polyContainerSprite.graphics.beginFill(0, 1);
	
	for (var j = 0; j < vertex.length; j++) {
		if (j == 0) {
			polyContainerSprite.graphics.moveTo(vertex[j].x, vertex[j].y);
		} else if (j > 0 && j < vertex.length) {
			polyContainerSprite.graphics.lineTo(vertex[j].x, vertex[j].y);
		}
	}
}

stage.addEventListener(Event.ENTER_FRAME, enterframe);


// Randomizing between 2 preset values

function randomNumber(low: Number = 0, high: Number = 1): Number {
	return Math.floor(Math.random() * (1 + high - low)) + low;
}