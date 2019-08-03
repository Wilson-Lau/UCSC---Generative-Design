function trainP(data){
  for(i=0;i<128;i++){
    console.log('before pichted['+data[i]+']['+data[i+1]+'] = '+ pitched[data[i]][data[i+1]])
      pitched[data[i]][data[i+1]]+=1;
    console.log('after pichted['+data[i]+']['+data[i+1]+'] = '+ pitched[data[i]][data[i+1]])
  }
}

function calP(data){
  for(i=0;i<128;i++){
    for(u=0;u<128;u++){
        pitched[i][u]/=128;
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
