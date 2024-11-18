// Espera o DOM estar completamente carregado antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {
  // Função para atualizar o contador na interface
  function updateQuantity(coffeeId, newQuantity) {
    const counter = document.querySelector(`#counter-${coffeeId}`);
    if (counter) {
      counter.textContent = newQuantity;
    }
  }

  // Função para obter a quantidade armazenada no localStorage
  function getStoredQuantity(coffeeId) {
    const storedQuantity = localStorage.getItem(coffeeId);
    return storedQuantity ? parseInt(storedQuantity) : 1; // valor padrão é 1 se não houver no localStorage
  }

  // Função para gerenciar os eventos de incremento e decremento
  function setupCoffeeAmountButtons() {
    const incrementButtons = document.querySelectorAll(".increment-btn");
    const decrementButtons = document.querySelectorAll(".decrement-btn");

    // Evento de incremento
    incrementButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const coffeeId = event.target.dataset.id; // Pegando o ID do café
        let currentQuantity = parseInt(
          document.querySelector(`#counter-${coffeeId}`).textContent
        );
        currentQuantity++;
        updateQuantity(coffeeId, currentQuantity); // Atualiza na interface
      });
    });

    // Evento de decremento
    decrementButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const coffeeId = event.target.dataset.id; // Pegando o ID do café
        let currentQuantity = parseInt(
          document.querySelector(`#counter-${coffeeId}`).textContent
        );
        if (currentQuantity > 1) {
          currentQuantity--;
          updateQuantity(coffeeId, currentQuantity); // Atualiza na interface
        }
      });
    });
  }

  // Função para salvar no localStorage quando o ícone do carrinho for clicado
  function setupCartButtonListeners() {
    const cartButtons = document.querySelectorAll(".shopping-btn");

    cartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        // Encontrando o ID do café associado ao botão (utilizando data-id)
        const coffeeCard = event.target.closest(".coffe-card");
        const coffeeId = coffeeCard ? coffeeCard.dataset.id : null; // Obtém o ID do café a partir do data-id
        const quantity = parseInt(
          document.querySelector(`#counter-${coffeeId}`).textContent
        );

        if (coffeeId) {
          // Armazenando a quantidade no localStorage
          localStorage.setItem(coffeeId, quantity);
          console.log(
            `Quantidade de ${coffeeId} salva no localStorage: ${quantity}`
          );
        }
      });
    });
  }

  // Função para inicializar as quantidades armazenadas ao carregar a página
  function initializeCoffeeQuantities() {
    const coffeeIds = ["tradicional", "americano", "cremoso", "gelado"]; // Lista de IDs dos cafés

    coffeeIds.forEach((coffeeId) => {
      const storedQuantity = getStoredQuantity(coffeeId);
      const counterElement = document.querySelector(`#counter-${coffeeId}`);

      if (counterElement) {
        counterElement.textContent = storedQuantity; // Atualiza o contador com a quantidade armazenada
      } else {
        console.error(`Elemento com ID #counter-${coffeeId} não encontrado!`);
      }
    });
  }

  // Chama as funções para configurar os botões e inicializar as quantidades
  setupCoffeeAmountButtons();
  setupCartButtonListeners(); // Adiciona o evento no botão do carrinho
  initializeCoffeeQuantities();
});
