//https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
//https://stackoverflow.com/questions/8935632/check-if-character-is-number
var pitched =new Array(128);
for (i=0; i <128; i++){
    pitched[i]=new Array(128);
    for(u=0;u<128;u++){
    pitched[i][u] = 0;
  }
}

let sounded =new Array(128);
for (i=0; i <128; i++){
  sounded[i]=new Array(128);
  for(u=0;u<128;u++){
    sounded[i][u]=0;
  }
}

let song ={};
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
    let lengthOfSound =[];
    var addedToArray= false;
    var z=0;
    for(var x = 0; x < midiText.length;)
    {
      addedToArray= false;
      if (!isNaN(parseInt(midiText[x], 10))) {
        // Is a number
        //console.log(parseInt(midiText[x], 10));
        pitch[z]=(parseInt(midiText[x], 10));
        //console.log(pitch[z]+ ' added to pitch\n');
        x++;
        // if next character is a number
          if (!isNaN(parseInt(midiText[x], 10))) {
            pitch[z]*=10;
            pitch[z]+=(parseInt(midiText[x], 10));
            //console.log(pitch[z]+ ' added 2nd digit to pitch\n');
            x++;
            //if the number is 3 digits
            if (!isNaN(parseInt(midiText[x], 10))) {
              pitch[z]*=10;
              pitch[z]+=(parseInt(midiText[x], 10));
              //console.log(pitch[z]+ ' added 3rd digit to pitch\n');
              x++;
            }
          }
          if(midiText[x]=='_'){
          //triggers when second argument
              //console.log(parseInt(midiText[x+1], 10));
              lengthOfSound[z]=parseInt(midiText[x+1],10);
              //console.log(lengthOfSound[z]+ ' added to lengthOfSound\n');
              x++;
              //if the number is 2 digits
              if (!isNaN(parseInt(midiText[x+1], 10))) {
                lengthOfSound[z]*=10;
                lengthOfSound[z]+=parseInt(midiText[x+1],10);
                //console.log(lengthOfSound[z]+ ' added 2nd digit to lengthOfSound\n');
                x++;
                if (!isNaN(parseInt(midiText[x+1], 10))) {
                  lengthOfSound[z]*=10;
                  lengthOfSound[z]+=parseInt(midiText[x+1],10);
                  //console.log(lengthOfSound[z]+ ' added 3rd digit to lengthOfSound\n');
                  x++;

                }
              }
              x++;
            }
              //increment to next on pitch and lengthOfSound
              z++;
      }
      else{
        x++;
      }
    }
    let store=[];
    console.log(midiText);
    for(var x = 0; x < pitch.length;x++){
      store += (pitch[x]+'_'+lengthOfSound[x]+',');
    }
    //console.log(store);



    trainP(pitch);
    //toConsole(pitch);
    calP(pitch);
    //toConsoleP(pitch);
    trainL(lengthOfSound);
    calL(lengthOfSound);
    //toConsoleL(lengthOfSound);
    gen(pitch,lengthOfSound);
    midiPlayer.setPianoRoll(pianoRoll, tsCallback);
}


function tsCallback(currentTs, notesOn) {
    // console.log(currentTs, notesOn);
}

function toConsoleP(data){
  for(i=0;i<128;i++){
    for(u=0;u<128;u++){
      //console.log(data[i][u]);
        var x=parseInt(data[i],10);
        var y=parseInt(u,10);
        if(pitched[x][y]!=0){
        console.log('pitched['+i+']['+u+'] = '+ pitched[x][y]);
      }
    }
  }
}

function toConsoleL(data){
  for(i=0;i<128;i++){
    for(u=0;u<128;u++){
      //console.log(data[i][u]);
        var x=parseInt(data[i],10);
        var y=parseInt(u,10);
        if(sounded[x][y]!=0){
        console.log('sounded['+i+']['+u+'] = '+ sounded[x][y]);
      }
    }
  }
}
