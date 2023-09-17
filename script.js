function exercicio1(){
  var nota= parseInt (prompt("Digite o número"));

  while(nota < 0 || nota > 10){
    nota = parseInt(prompt("Digite novamente nota"));
  }

  document.getElementById("root").style.display = "block"
  document.getElementById("root").innerHTML = `
  <p>A sua nota ${nota}</p>
  `

}
  
function exercicio2(){
  
  return n ? countdown(n - 1) : 0; 
}

countdown(10);
