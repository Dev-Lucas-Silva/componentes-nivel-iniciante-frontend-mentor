const formulario = document.querySelector("form");
const conteudo = document.querySelector(".container");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    conteudo.innerHTML = `<div class="container-resposta"><img src="./images/illustration-thank-you.svg" alt="">
    <p>You selected <span></span> out of 5</p>
    <h1>Thank you!</h1>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, don´t hesitate to get in touch!</p></div>`;
    const span = document.querySelector(".container span");
  } else {
    conteudo.innerHTML = `<div class="container-resposta"><img src="./images/illustration-thank-you.svg" alt="">
    <p>You selected <span></span> out of 5</p>
    <h1>Thank you!</h1>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, don´t hesitate to get in touch!</p></div>`;

  }
  
  const parametros = new URLSearchParams(location.search);
  console.log(parametros);
  
  function classificacaoAtivado(parametro) {
    console.log(parametro);
    const span = document.querySelector(".container span");
    span.innerHTML = parametro;
  }
  
  parametros.forEach(classificacaoAtivado);
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "post",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
