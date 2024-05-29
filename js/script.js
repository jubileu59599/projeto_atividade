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

  if (numero >= 0 && number <= 9) {
      return true;
    } else {
      return false;
    }
  }

  // Exemplo de uso:

  var resultado = 0;

  if (isBetweenZeroAndNine()) {
      resultdo( está entre 0 e 9.)
  } else {
    resultado( não está entre 0 e 9.);
  }

  //Aqui vai escrever no input "resultado" o valor que está armazenado na variável "resultado"
  document.getElementById("resultado").value = resultado;

}
