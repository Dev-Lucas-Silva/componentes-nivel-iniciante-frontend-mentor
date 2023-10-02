function envioDoFormulario() {
  const formulario = document.querySelector("form");
  const conteudo = document.querySelector(".container");
 if(formulario && conteudo) {

function formularioEnviado() {
  conteudo.innerHTML = `<div class="container-resposta"><img src="./images/illustration-thank-you.svg" alt="">
    <p>You selected <span></span> out of 5</p>
    <h1>Thank you!</h1>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, don´t hesitate to get in touch!</p></div>`;

  const data = new FormData(formulario);
  const datajson = Object.fromEntries(data.entries());

  const span = document.querySelector(".container span");
  span.innerHTML = datajson.rating;
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  formularioEnviado();
}

formulario.addEventListener("submit", enviarFormulario);
}
}
envioDoFormulario()