function trainP(data){
  for(i=0;i<128;i++){
    pitched[data[i]][data[i+1]]+=1;
  }
}

function calP(data){
  for(i=0;i<128;i++){
    for(u=0;u<128;u++){
        pitched[data[i]][data[u]]/=128;
    }
  }
}

function calL(data){
  for(i=0;i<128;i++){
    for(u=0;u<128;u++){
        sounded[data[i]][data[u]]/=128;
    }
  }
}

function trainL(data){
  for(i=0;i<128;i++){
    sounded[data[i]][data[i+1]]+=1;
  }
}
