const checkoutBtn = document.getElementById("header-shopping-btn");
const logoImg = document.getElementById("logo");

function handleCheckout() {
  checkoutBtn.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
}

logoImg.addEventListener("click", () => {
  window.location.href = "index.html";
});
