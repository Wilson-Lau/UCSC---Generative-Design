//https://stackoverflow.com/questions/8935632/check-if-character-is-number
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(240);

    midiPlayer = new MidiPlayer();
    midiPlayer.loadMidis("data/midi_files.json", onMIDIsLoaded);
}

function draw() {
    midiPlayer.draw();
}

function onMIDIsLoaded(pianoRolls) {
    // Pick random file to play
    let pianoRoll = random(pianoRolls);

    // Encode the piano roll (2D array) as string
    let midiText = midiPlayer.pianoRoll2Text(pianoRoll);
    console.log(midiText);
    //converts string to L08 markov.js name format
    let pitch =[];
    var lengthOfSound =[];
    var addedToArray= false;
    var z=0;
    for(var x = 0; x < midiText.length; x++)
    {
      addedToArray= false;
      if (!isNaN(parseInt(midiText[x], 10))) {
        // Is a number
        console.log(parseInt(midiText[x], 10));
        pitch[z]=(parseInt(midiText[x], 10));
        console.log(pitch[z]+ ' added to pitch\n');
        // if next character is a number
          if (!isNaN(parseInt(midiText[x+1], 10))) {
            pitch[z]*=10;
            pitch[z]+=(parseInt(midiText[x+1], 10));
            console.log(pitch[z]+ ' added 2nd digit to pitch\n');
            x++;
            //if the number is 3 digits
            if (!isNaN(parseInt(midiText[x+1], 10))) {
              pitch[z]*=10;
              pitch[z]+=(parseInt(midiText[x+1], 10));
              console.log(pitch[z]+ ' added 3rd digit to pitch\n');
              x++;
            }
          }

          /*triggers when second argument
          if(midiText[x]=='_'){
              lengthOfSound[z]+=midiText[x+1]
              x++;
              //if the number is 2 digits
              if (!isNaN(parseInt(midiText[x+1], 10))) {
                lengthOfSound[z]*=10;
                lengthOfSound[z]+=midiText[x+1];
                x++;
              }
              console.log(lengthOfSound[z]+ 'added to lengthOfSound\n');
        }*/

              //increment to next on pitch and lengthOfSound
              z++;
      }

    }
    /*
    let pd = train();
    name = generateName(pd);
    console.log(pd);
    */
    midiPlayer.setPianoRoll(pianoRoll, tsCallback);
}


function tsCallback(currentTs, notesOn) {
    // console.log(currentTs, notesOn);
}
