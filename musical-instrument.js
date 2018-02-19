// Incorporating the soothing sounds of nature

var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;
var freqQ = 140;
var freqW = 160;

var oscA, oscS, oscD, oscF, oscQ, oscW;

var playingA, playingS, playingD, playingF, playingQ, playingW;

var playing = false;

function preload() {
	rain = loadSound('assets/rain.mp3');
  ocean = loadSound('assets/ocean.mp3')
  }

function setup() {
  backgroundColor = color(10, 10, 15);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('sine');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('sine');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('sine');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('sine');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
  
  oscQ = new p5.Oscillator();
  oscQ.setType('sine');
  oscQ.freq(freqQ);
  oscQ.amp(0);
  oscQ.start();
  
  oscW = new p5.Oscillator();
  oscW.setType('sine');
  oscW.freq(freqW);
  oscW.amp(0);
  oscW.start();
}

function draw() {
  if (playing) {
background(0, 255, 255);
	  } else {
	    background(255, 0, 255);
	  }
}


function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    rain.play();
    rain.setVolume(0.1);
    playingA = true;
  } else if (key == 'S') {
    osc = oscS;
    playingS = true;
  } else if (key == 'D') {
    osc = oscD;
    playingD = true;
  } else if (key == 'F') {
    osc = oscF;
    playingF = true;
  } else if (key == 'Q') {
    osc = oscQ;
    playingQ = true; 
  } else if (key == 'W') {
    osc = oscW;
    ocean.play();
    ocean.setVolume(0.1);
    playingW = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = false;
  } else if (key == 'S') {
    osc = oscS;
    playingS = false;
  } else if (key == 'D') {
    osc = oscD;
    playingD = false;
  } else if (key == 'F') {
    osc = oscF;
    playingF = false;
  } else if (key == 'Q') {
    osc = oscQ;
    playingQ = false;
  } else if (key == 'W') {
    osc = oscW;
    playingW = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playingA = false, playingS = false, playingD = false, playingF = false
    playingQ = false, playingW = false;
  }
}

function draw() {
	  background(10);
	  colorMode(RGB);
	  if (playingA) {
	    fill(80);
	    noStroke();
	    ellipse(30, 30, 15, 15);
	  }
	  if (playingS) {
	    fill(70);
	    noStroke();
	    ellipse(25, 25, 12, 12);
	  }
	  if (playingD) {
	    fill(60);
	    noStroke();
	    ellipse(20, 20, 10, 10);
	  }
	  if (playingF) {
	    fill(40);
	    noStroke();
	    ellipse(15, 15, 7, 7);
	  }
 	 if (playingQ) {
	    fill(30);
	    noStroke();
	    ellipse(15, 15, 4, 4);
  }
   	 if (playingW) {
	    fill(30);
	    noStroke();
	    ellipse(10, 10, 5, 5);
  }
	}
