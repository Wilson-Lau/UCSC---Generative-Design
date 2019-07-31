//developed using code from https://p5js.org/examples/simulate-particle-system.html
let system;

function setup() {
  createCanvas(500, 500);
	system2 = new ParticleSystem(createVector(1, 10),'deepskyblue');
	system = new ParticleSystem(createVector(width, 10,'darkorange'));
}

function draw() {
  background(1);
  system.addParticle('darkorange');
  system.run();
	system2.addParticle('deepskyblue');
  system2.run();
}
