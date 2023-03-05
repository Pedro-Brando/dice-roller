var historicoRolagens = [];

function Rolld(lados){

  //"limpar" a rolagem anterior
  document.getElementById("crit").style.opacity=0;
  var resTotal = 0;

  //rolar o dado
  var jogada = 1 + Math.floor(Math.random()*lados);
  resTotal = jogada;

  historicoRolagens.push(" ( D" + lados + " => " + resTotal + " )");
  
  var resultadoAtual = document.getElementById("placeholder");
  resultadoAtual.innerHTML = resTotal;

  var elmHistorico = document.getElementById("historico");
  elmHistorico.innerHTML = historicoRolagens.toString();

  
  if (resTotal == lados){
    crit();
}
}

function crit(){
  document.getElementById("crit").style.opacity=1;
}

function resetResultados() {
  document.getElementById("historico").innerHTML = "";
  document.getElementById("crit").style.opacity=0;
}

function bigImg(x) {
  x.style.height = "10rem";
  x.style.width = "10rem";
}

function normalImg(x) {
  x.style.height = "3rem";
  x.style.width = "3rem";
}




/* Eu, em minha genialidade, iniciei fazendo funções individuais para cada dado.

function Rolld20(){

  //rolar os dados
  var resTotal = 0;

  for(var i = 0; i < 1; i++){
    var jogada = 1 + Math.floor(Math.random()*20);
    resTotal = resTotal + jogada; //resTotal += jogada;
  }
  
    var resultadoAtual = document.getElementById("placeholder");
  resultadoAtual.innerHTML = resTotal + "!";

}

function Rolld12(){

  //rolar os dados
  var resTotal = 0;

  for(var i = 0; i < 1; i++){
    var jogada = 1 + Math.floor(Math.random()*12);
    resTotal = resTotal + jogada; //resTotal += jogada;
  }
  
    var resultadoAtual = document.getElementById("placeholder");
  resultadoAtual.innerHTML =resTotal + "!";

}

function Rolld10(){

  //rolar os dados
  var resTotal = 0;

  for(var i = 0; i < 1; i++){
    var jogada = 1 + Math.floor(Math.random()*10);
    resTotal = resTotal + jogada; //resTotal += jogada;
  }
  
    var resultadoAtual = document.getElementById("placeholder");
  resultadoAtual.innerHTML = resTotal + "!";

}

function Rolld8(){

  //rolar os dados
  var resTotal = 0;

  for(var i = 0; i < 1; i++){
    var jogada = 1 + Math.floor(Math.random()*8);
    resTotal = resTotal + jogada; //resTotal += jogada;
  }
  
    var resultadoAtual = document.getElementById("placeholder");
  resultadoAtual.innerHTML = resTotal + "!";

}

function Rolld4(){

  //rolar os dados
  var resTotal = 0;

  for(var i = 0; i < 1; i++){
    var jogada = 1 + Math.floor(Math.random()*4);
    resTotal = resTotal + jogada; //resTotal += jogada;
  }
  
    var resultadoAtual = document.getElementById("placeholder");
  resultadoAtual.innerHTML = resTotal + "!";

}

*/