document.querySelector('#P1Button').addEventListener('click',Player_1_Turn)
document.querySelector('#P2Button').addEventListener('click',Player_2_Turn)
document.querySelector('#P3Button').addEventListener('click',Player_3_Turn)
document.querySelector('#P4Button').addEventListener('click',Player_4_Turn)

let Player_1_Space = 0;
let Player_2_Space = 0;
let Player_3_Space = 0;
let Player_4_Space = 0;
let Temp_Square = 0
let Temp_Msg = "nul"

function Player_1_Turn(){
  Player_1_Space = Player_1_Space + Math.floor(Math.random() * 6) + 1
  Temp_Square = Player_1_Space
  Checker();
  Player_1_Space = Temp_Square
  document.querySelector('#P1Spot').innerText = Temp_Msg
}
function Player_2_Turn(){
  Player_2_Space = Player_2_Space + Math.floor(Math.random() * 6) + 1
  Temp_Square = Player_2_Space
  Checker();
  Player_2_Space = Temp_Square
  document.querySelector('#P2Spot').innerText = Temp_Msg
}

function Player_3_Turn(){
  Player_3_Space = Player_3_Space + Math.floor(Math.random() * 6) + 1
  Temp_Square = Player_3_Space
  Checker();
  Player_3_Space = Temp_Square
  document.querySelector('#P3Spot').innerText = Temp_Msg
}

function Player_4_Turn(){
  Player_4_Space = Player_4_Space + Math.floor(Math.random() * 6) + 1
  Temp_Square = Player_4_Space
  Checker();
  Player_4_Space = Temp_Square
  document.querySelector('#P4Spot').innerText = Temp_Msg
}

function Checker(){  
  if (Temp_Square == 1){
    Temp_Square = 38 
    Temp_Msg = "Ladder to 38"
  }
  else if (Temp_Square  == 4){
    Temp_Square  = 14 
    Temp_Msg = "Ladder to 14"
  }
  else if (Temp_Square  == 9){
    Temp_Square  = 31 
    Temp_Msg = "Ladder to 31"
  }
  else if (Temp_Square  == 16){
    Temp_Square  = 6 
    Temp_Msg = "Chute to 6"
  }
  else if (Temp_Square  == 28){
    Temp_Square  = 84 
    Temp_Msg = "Ladder to 84"
  }
  else if (Temp_Square  == 36){
    Temp_Square  = 44 
    Temp_Msg = "Ladder to 44"
  }
  else if (Temp_Square  == 47){
    Temp_Square  = 26 
    Temp_Msg = "Chute to 26"
  }
  else if (Temp_Square  == 49){
    Temp_Square  = 11
    Temp_Msg = "Chute to 11"
  }
  else if (Temp_Square  == 51){
    Temp_Square  = 67
    Temp_Msg = "Ladder to 67"
  }
  else if (Temp_Square  == 56){
    Temp_Square  = 53
    Temp_Msg = "Chute to 53"
  }
  else if (Temp_Square  == 62){
    Temp_Square  = 10
    Temp_Msg = "Chute to 10"
  }
  else if (Temp_Square  == 64){
    Temp_Square  = 60
    Temp_Msg = "Chute to 60"
  }
  else if (Temp_Square  == 80){
    Temp_Square  = 100
    Temp_Msg = "Ladder to 100 Winner!!! "
  }
  else if (Temp_Square  == 87){
    Temp_Square  = 24
    Temp_Msg = "Chute to 24"
  }
  else if (Temp_Square  == 93){
    Temp_Square  = 73
    Temp_Msg = "Chute to 73"
  }
  else if (Temp_Square  == 95){
    Temp_Square  = 75
    Temp_Msg = "Chute to 75"
  }
  else if (Temp_Square  == 98){
    Temp_Square  = 78
    Temp_Msg = "Chute to 78"
  }
  else if (Temp_Square  >= 100){
    Temp_Msg = "Winner!!!"
  }
  else {Temp_Msg = Temp_Square}

}

