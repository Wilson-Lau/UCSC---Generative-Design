function trainP(data){
  for(i=0;i<128;i++){
    //console.log('before pichted['+data[i]+']['+data[i+1]+'] = '+ pitched[data[i]][data[i+1]])
    var x =parseInt(data[i],10);
    var y =parseInt(data[i+1],10);
    //console.log(x+','+y);
    pitched[x][y]+=1;
    //console.log('pitched['+x+']['+y+'] = '+pitched[x][y]);
    //console.log('after pichted['+data[i]+']['+data[i+1]+'] = '+ pitched[data[i]][data[i+1]])
    /*console.log('after pichted['+parseInt(data[i],10)+']['+parseInt(data[i+1],10)+'] = '+ pitched[parseInt(data[i],10)][parseInt(data[i+1],10)]);
    var x = parseInt(data[i],10);
    var y = parseInt(data[i+1],10);
    console.log('x: '+x+', y:'+y+', pitched: '+pitched[x][y]);
    */
  }
  //toConsole();
}

function calP(pitch){
  var hold =0;
  for(i=0;i<128;i++){
    var hold =0;
    for(u=0;u<128;u++){
      //console.log(pitch[i][u]);
      var x=parseInt(pitch[i],10);
      var y=parseInt(u,10);
      hold+=pitched[x][y];
    }
      for(u=0;u<128;u++){
          //console.log('i:'+i+' hold: '+hold);
                var y=parseInt(u,10);
          pitched[x][y]*=100;
          pitched[x][y]/=hold;
          //pitched[x][y]/=100;
        }
  }
  //console.log('hold: '+hold);
}

function trainL(data){
  for(i=0;i<128;i++){
    var x =parseInt(data[i],10);
    var y =parseInt(data[i+1],10);
    sounded[x][y]+=1;
  }
}

function calL(pitch){
  var hold =0;
  for(i=0;i<128;i++){
    var hold =0;
    for(u=0;u<128;u++){
      var x=parseInt(pitch[i],10);
      var y=parseInt(u,10);
      hold+=sounded[x][y];
    }
      for(u=0;u<128;u++){
          var y=parseInt(u,10);
          sounded[x][y]*=100;
          sounded[x][y]/=hold;
        }
  }
}

function gen(pitch,lengthOfSound){
  //starting variables
  var songSpace = ' .'
  var randPitch = parseInt(pitch[Math.floor(Math.random() * pitch.length)],10);
  var randSound = parseInt(lengthOfSound[Math.floor(Math.random() *   lengthOfSound.length)],10);
  song=(randPitch+'_'+randSound);
  var spaceLength=Math.floor(Math.random() * 8+1);
  for(i=0;i<spaceLength;i++){
    song+=(songSpace);
  }
  song+=(' ');
  console.log(song);
  var hold=0;
  console.log(pitch.length);
  for(i=0;i<128;i++){
    var rand= Math.floor(Math.random() * (100)) + 1;
    for(u=0;u<128;u++){
      //console.log(data[i][u]);
        var y=parseInt(u,10);
        if(pitched[randPitch][y]!=0&&rand<=pitched[randPitch][y]){
          console.log('rand'+rand+' is less than '+pitched[randPitch][y]);
          hold = y;
      }
    }
  }
  song+=pitch[y];
    console.log(song);
}
