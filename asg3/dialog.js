//developed using code from https://p5js.org/examples/simulate-particle-system.html
function dialogBox(){
  if(dialogBoxExist==true){
    rect(0, 0, 500,150);
    textSize(32);

    if(dialogBoxState==false){
      text('Generate Art? (Y)', 40, 40);
    }
    else if(dialogBoxState==true){
      text('Generate Art', 40, 40);
    }
    if(keyIsDown(89)){
      dialogBoxState=true;
    }
  }
}
