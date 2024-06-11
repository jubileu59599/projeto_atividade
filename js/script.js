var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função verificar
  isBetweenZeroAndNine();
});


//Função verificar
function isBetweenZeroAndNine() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let numero = Number(document.getElementById("numero").value);

  if (numero >= 0 && numero <= 9) {

      document.getElementById("resultado").value = resultado;
    } else {

      document.getElementById("resultado").value = resultado;
    }



  // Exemplo de uso:

  var resultado = 0;

//Aqui vai escrever no input "resultado" o valor que está armazenado na variável "resultado"
  if (()) {
    resultdo( "está entre 0 e 9.");
  } else {
    resultado( "não está entre 0 e 9.");
  }
}
