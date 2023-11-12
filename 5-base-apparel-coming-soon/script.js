const form = document.getElementById("email-address");
const erro = document.querySelector(".erro");


function handleChange(event) {
  const target = event.target;
  if (!target.ValidityState()) {
    target.classList.add("invalido");
    target.setCustomValidity(" ");
    erro.innerText = "Please provide a valid email";
  }
  else {
    target.classList.remove("invalido");
  };
}

form.addEventListener("change", handleChange);
