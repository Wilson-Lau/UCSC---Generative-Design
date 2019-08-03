
let ilegalChars = {" ": 0};
let name = "";


//generates the string of midi sound
function generateName(pd) {
    let nstate = sample(pd, "#");
    let name = "";

    while(nstate !== "#") {
        name += nstate;
        nstate = sample(pd, nstate);
        console.log(nstate);
    }

    return name;
}

function train(data) {
    let pd = {};

    // Load all states
    /*for(let name of data) {
        name = "#" + name + "#"
        //console.log(name);
        
        for(let c of name) {

            //c = c.toLowerCase();
            if(!(c in ilegalChars) && !(c in pd)) {
                // Create a new state for this character
                pd[c] = {};
            }
        }
    }*/

    // Estimate probability distribution
    for(let name of data) {
        name = "#" + name + "#";

        for(let i = 0; i < name.length - 1; i++) {
            let cstate = name[i];
            if(cstate in pd) {

                let nstate = name[i + 1];

                if(!(nstate in pd[cstate])) {
                    pd[cstate][nstate] = 0;
                }

                pd[cstate][nstate] += 1;
            }
        }
    }

    // Normalize pd
    for(let cstate in pd) {
        let ctotal = 0;
        for(let nstate in pd[cstate]) {
            ctotal += pd[cstate][nstate];
        }

        for(let nstate in pd[cstate]) {
            pd[cstate][nstate] /= ctotal;
        }
    }

    return pd;
}

function sample(pd, istate) {
    let r = random();
    let probSoFar = 0;

    for(let nstate in pd[istate]) {
        probSoFar += pd[istate][nstate];

        if(r < probSoFar) {
            return nstate;
        }
    }
}
