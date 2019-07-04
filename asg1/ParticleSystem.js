//developed using code from https://p5js.org/examples/simulate-particle-system.html
let ParticleSystem = function(position) {
 this.origin = position.copy();
 this.particles = [];
};

ParticleSystem.prototype.addParticle = function(color) {
 this.particles.push(new Particle(this.origin,color));
};

ParticleSystem.prototype.run = function() {
 for (let i = this.particles.length-1; i >= 0; i--) {
	 let p = this.particles[i];
	 p.run();

if (p.isDead()) {
	this.particles.splice(i, 1);
}
}
};
