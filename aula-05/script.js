function tooglePassword() {
  document
    .querySelectorAll(".eye")
    .forEach((eye) => eye.classList.toggle("hide"));

  const type =
    password.getAttribute("type") == "password" ? "text" : "password";

  password.setAttribute("type", type);
}

/* verificar se o usuário está logado ao carregar a página */
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "loggedUser.html";
  }
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // impedindo o comportamento padrão de reload

  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  /* definir as credenciais válidas */
  const validEmail = "usuario@mail.com";
  const validPassword = "senha123";

  /* verificar se o e-mail e senha enviados correspondem as credenciais setadas */
  if (emailInput === validEmail && passwordInput === validPassword) {
    /* armazenar no localStorage a informação de que o usuário está logado */
    localStorage.setItem("isLoggedIn", "true");

    window.location.href = "loggedUser.html";
  } else {
    alert("E-mail ou senha incorretos. Tente novamente!");
  }
});
