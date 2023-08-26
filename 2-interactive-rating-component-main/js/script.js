const form = document.getElementById("form");

form.addEventListener('submit', function(e){
    e.preventDefault();
    const number = document.querySelector('input[name="rating"]:checked');
    localStorage.setItem("rating",number.value);
    window.location.href="resposta.html";
});
