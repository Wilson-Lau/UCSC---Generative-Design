//developed using code from L5-Gerativ Grammers
class LSystem {
    constructor(rules) {
        this.x = 400;
        this.y = 100;
        this.s = 5;
        this.angle = radians(Math.floor(Math.random()*90)+50);
        this.rules = rules;
        this.stack = [];
    }

    expand(axiom, n) {
        let s = axiom;

        // Generations
        for(let i = 0; i < n; i++) {
            console.log("Generation " + i)

            let ns = "";
            // Iterate on every character of s expanding nonterminals
            for(let j = 0; j < s.length; j++) {
                // If the characte has a rule in the rules, it is
                // a nonterminal.
                if(s[j] in this.rules) {
                    ns += this.rules[s[j]];
                }
                else {
                    ns += s[j];
                }
            }

            console.log(ns);
            s = ns;
        }

        return s;
    }

    drawString(s, theta) {
      fill(Math.random()*255, Math.random()*204, Math.random()*100);
        beginShape();

        vertex(this.x, this.y);

        for(let i = 0; i < s.length; i++) {
            switch (s[i]) {
                case "+":
                    this.angle += radians(theta);
                    break;
                case "-":
                    this.angle -= radians(theta);
                    break;
                case "[":
                    this.stack.push([this.x, this.y]);
                    break;
                case "]":
                    endShape();
                    beginShape();
                    let ppos = this.stack.pop();
                    this.x = ppos[0];
                    this.y = ppos[1];
                    vertex(this.x, this.y);
                    break;
                case "F":
                    this.x += cos(this.angle) * this.s;
                    this.y -= sin(this.angle) * this.s;
                    vertex(this.x, this.y);
                    break;
                case "G":
                    endShape();
                    beginShape();
                    this.x += cos(this.angle) * this.s;
                    this.y -= sin(this.angle) * this.s;
                    vertex(this.x, this.y);
                    break;

                default:
                    console.log("Command doesn't exist");
            }
        }

        endShape();
    }
}
