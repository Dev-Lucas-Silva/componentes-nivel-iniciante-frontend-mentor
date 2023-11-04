const form = document.getElementById("email-address");
const erro = document.querySelector(".erro");

function handleChangeValid(event) {
  const target = event.target;
  if (target.checkValidity()) {
    target.classList.remove("invalido");
    erro.innerText = "";
    console.log(target.checkValidity());
  }
}

function handleChange(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    target.classList.add("invalido");
    target.setCustomValidity("Please provide a valid email");
    erro.innerText = target.validationMessage;
    console.log(target.checkValidity());

  }
}

form.addEventListener("change", handleChange);
form.addEventListener("change", handleChangeValid);
