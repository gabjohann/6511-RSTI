/* 
Declaração de variáveis:

let -> variáveis que o valor irá mudar ao longo do código
const -> variáveis com valor imutável

exemplo: idade é uma variável do tipo let, CPF é uma variável do tipo const
*/
function mostrarTabuada(event) {
  event.preventDefault();

  let number = document.querySelector("#number").value;
  let result = document.querySelector("#result");
  result.innerText = "";

  let ul = document.createElement("ul");

  for (let i = 0; i <= 10; i++) {
    setTimeout(function () {
      let li = document.createElement("li");
      li.innerText = `${number} x ${i} = ${number * i}`;

      ul.appendChild(li);
    }, i * 500);
  }

  result.append(ul);
}
