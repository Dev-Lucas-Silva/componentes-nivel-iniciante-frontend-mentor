const form = document.getElementById("cadastro");
const erro = document.querySelector(".erro");

function handleChangeValid(event) {
  const target = event.target;
  if (target.checkValidity()) {
    target.classList.remove("invalido");
    erro.innerText = "";
  }
}

function handleChange(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    target.classList.add("invalido");
    target.setCustomValidity("Please provide a valid email");
    erro.innerText = target.validationMessage;
  }
}

form.addEventListener("change", handleChange);
form.addEventListener("change", handleChangeValid);
