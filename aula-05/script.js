function tooglePassword() {
  document
    .querySelectorAll(".eye")
    .forEach((eye) => eye.classList.toggle("hide"));

  const type =
    password.getAttribute("type") == "password" ? "text" : "password";

  password.setAttribute("type", type);
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // impedindo o comportamento padrão de reload

  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  /* definir as credenciais válidas */
  const validEmail = "usuario@mail.com";
  const validPassword = "senha123";

  /* verificar se o e-mail e senha enviados correspondem as credenciais setadas */
  if (emailInput === validEmail && passwordInput === validPassword) {
    alert("Login bem-sucedido! Bem vindo à plataforma!");
  } else {
    alert("E-mail ou senha incorretos. Tente novamente!");
  }
});
