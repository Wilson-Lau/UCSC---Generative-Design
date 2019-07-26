//developed using code from L5-Gerativ Grammers
function dialogBox(){
  if(dialogBoxExist==true){
    rect(0, 0, 500,150);
    textSize(32);

    if(dialogBoxState==false){
      text('I am a dot.\nGenerate Art? (Y/N)', 40, 40);
    }
    else if(dialogBoxState==true&&keyIsDown(89)){
      text('Generated Art', Math.random()*40+20, Math.random()*40+50);
      dialogBoxState=false;
      lsystem = new LSystem(rules);
      let s = lsystem.expand(axiom, 5);
      lsystem.drawString(s, 255);
    }
    if(keyIsDown(89)){
      dialogBoxState=true;

    }
    if(keyIsDown(78)){
      dialogBoxExist=false;
    }
  }
}
