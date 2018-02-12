var mySound;
var mySound2;
var mySound3;

function preload() {
  mySound = loadSound('assets/SOUND_EFFECT_Punch[Mp3Converter.net].mp3');
	mySound2 = loadSound('assets/DamnSon.mp3');
	mySound3 = loadSound('assets/Splash.mp3')
}

function setup() { 
  mySound.setVolume(0.5);
  mySound.play();
	mySound2.setVolume(0.8);
  mySound2.play();
	mySound3.setVolume(0.3);
  mySound3.play();
  createCanvas(100, 100);
}

function draw() {
  if (keyIsPressed) {
    background(240);
  } else {
    background(120);
  }
}

function keyPressed() {
	print(key);
	if (key == 'P') {
  mySound.play();
	} else if (key == 'G') {
	mySound2.play();
	} if (key == 'B') {
	mySound3.play();
	}
}
