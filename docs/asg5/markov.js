function trainP(data){
  for(i=0;i<128;i++){
    //console.log('before pichted['+data[i]+']['+data[i+1]+'] = '+ pitched[data[i]][data[i+1]])
    pitched[parseInt(data[i],10)][parseInt(data[i+1],10)]+=1;
    //console.log('after pichted['+data[i]+']['+data[i+1]+'] = '+ pitched[data[i]][data[i+1]])
    console.log('after pichted['+parseInt(data[i],10)+']['+parseInt(data[i+1],10)+'] = '+ pitched[parseInt(data[i],10)][parseInt(data[i+1],10)]);
    var x = parseInt(data[i],10);
    var y = parseInt(data[i+1],10);
    console.log(pitched[x][y]);

  }
}

function calP(pitch){
  var hold =0;
  for(i=0;i<128;i++){
    for(u=0;u<128;u++){
      //console.log(data[i][u]);
        hold+=pitched[i][u];
    }
  }
  console.log('hold: '+hold);
  for(i=0;i<128;i++){
    for(u=0;u<128;u++){
      console.log('before: '+pitched[i][u]+', ');
          pitched[pitch[i]][pitch[u]]*=100;
          pitched[pitch[i]][pitch[u]]/=hold;
          pitched[pitch[i]][pitch[u]]/=100;
      console.log('after: '+pitched[i][u]+', ');
    }
  }

}

function trainL(data){
  for(i=0;i<128;i++){
    for(u=0;u<128;u++){
        sounded[data[i]][data[u]]/=128;
    }
  }
}

function calL(data){
  for(i=0;i<128;i++){
    sounded[i][u]+=1;
  }
}
