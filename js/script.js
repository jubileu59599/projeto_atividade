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

      document.getElementById("resultado").value = "Este número está ente 0 e 9 ";

    } else {

      document.getElementById("resultado").value = "Este número não está ente 0 e 9 ";
    }

}
