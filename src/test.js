export default function sketch (p) {
  var circles = [];
  p.setup = function() {
    p.createCanvas(p.windowWidth, 60);
    p.background(255);
    setInterval(p.drawRandomCircles, p.random(1000, 5000));
  };

  p.draw = function() {
    p.background(255,255,255,80);
    for (var i=0; i<circles.length; i++) {
      circles[i].display();
      circles[i].move();
    }
  }
  p.Circle = function(x,y) {
    this.x = x;
    this.y = y;
    this.diameter = p.random(5, 20);
    this.ySpeed= p.random(-10,10);
    this.xSpeed = p.random (-5, 5);
    this.color = [p.random(255), p.random(255), p.random(255), 255]
    this.move = function() {
      this.y += this.ySpeed;
      this.x += this.xSpeed;
    }
    this.display = function() {
      p.noStroke();
      p.fill(this.color);
      p.ellipse(this.x, this.y, this.diameter, this.diameter)
    }
  }

  p.drawRandomCircles = function() {
    var xPos = p.random(p.width / 3, p.width / 1.5);
    var yPos = p.random(p.height / 3, p.height / 1.5);
    var amount = Math.floor(p.random(5, 100));
    circles = [];
    for (var i = 0; i < amount; i++) {
      circles.push(new p.Circle(xPos, yPos));
    }
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth / 2, p.windowHeight);
    p.setup();
  }
}
