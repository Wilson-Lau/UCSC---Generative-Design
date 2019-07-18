// A simple Particle class
//developed using code from https://p5js.org/examples/simulate-particle-system.html
let Particle = function(position,color) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 400;
	this.color =color;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
	this.position.add(this.velocity);
 this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
 stroke(1, this.lifespan);
 strokeWeight(2);
 fill(this.color);
 ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
 return this.lifespan < 0;
};
