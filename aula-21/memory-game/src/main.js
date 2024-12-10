import "./style.css";
import swal from "sweetalert";

const emojiData = [
  { src: "./src/assets/angular.svg", alt: "angularjs" },
  { src: "./src/assets/css3.svg", alt: "css3" },
  { src: "./src/assets/html5.svg", alt: "html5" },
  { src: "./src/assets/typescript.svg", alt: "typescript" },
  { src: "../src/assets/vue.svg", alt: "vuejs" },
  { src: "./src/assets/javascript.svg", alt: "javascript" },
  { src: "./src/assets/react.svg", alt: "react" },
  { src: "./src/assets/bootstrap.svg", alt: "bootstrap" },
];

const emojis = [...emojiData, ...emojiData].map(
  (item) => `<img alt="${item.alt}" src="${item.src}" />`
);

/* função para embaralhar as imagens */
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

/* função para tocar o áudio */
const playSound = (audioName) => {
  const audio = new Audio(`./assets/sounds/${audioName}.m4a`);
  audio.volume = 0.5;
  audio.play();
};

let openCards = [];

/* emaralhar as imagens e adicioná-las na DOM */
shuffle(emojis).forEach((emoji) => {
  const box = document.createElement("div");
  box.className = "item";
  box.innerHTML = emoji;
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
});

/* função para manipualr o clique nos cartões */
function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }

  playSound("flip");
}

/* verficiar se os cards são iguais */
function checkMatch() {
  const [card1, card2] = openCards;

  if (card1.innerHTML === card2.innerHTML) {
    card1.classList.add("boxMatch");
    card2.classList.add("boxMatch");
  } else {
    card1.classList.remove("boxOpen");
    card2.classList.remove("boxOpen");
    playSound("flipback");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    swal("Parabéns!", "Você completou o jogo", "success");

    window.location.reload();
  }
}
