export default function sketch (p) {
  var mic;
  var amplitude;
  var spacing = 10;
  var minHeight = 2;
  var prevLevels = new Array(60);

  p.setup = function() {
    p.createCanvas(p.windowWidth, 180);
    p.background(255);
    p.noStroke();
    p.rectMode(p.CENTER);
    p.colorMode(p.HSB);
    mic = new p.p5.AudioIn();
    mic.start();
    amplitude = new p.p5.Amplitude();
    amplitude.setInput(mic);
    amplitude.smooth(0.6);
  }

  p.draw = function() {
    p.p.background(255);
    p.fill(0,10);
    var level = amplitude.getLevel();
    var w = p.width/(prevLevels.length * spacing);
    prevLevels.push(level);
    prevLevels.splice(0,1);
    for (var i =0; i<prevLevels.length; i++) {
      var x = p.map(i, prevLevels.length, 0, p.width/2, p.width);
      var h = p.map(prevLevels[i],0,0.5,minHeight, p.height);
      var alphaValue = p.logMap(h, minHeight, p.height, 200, 255);
      var hueValue = p.map(h,minHeight,p.height,200,255);
      p.fill(hueValue, 255, 255, alphaValue);
      p.rect(x, p.height/2, w, h);
      p.rect(p.width - x, p.height /2, w, h)
    }
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, 60);
    p.setup();
  }
}
