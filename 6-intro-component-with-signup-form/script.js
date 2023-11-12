const form = document.getElementById("cadastro");
const erro = document.querySelector(".erro");


function handleChange(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    target.classList.add("invalido");
    target.setCustomValidity("Please provide a valid email");
    erro.innerText = target.validationMessage;
  }
  else {
    target.classList.remove("invalido");
    erro.innerText = "";
  }
}

form.addEventListener("change", handleChange);
