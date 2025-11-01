import "bootstrap";
import "./style.css";

window.onload = function () {

  const totalCard = document.querySelector(".card");
  const topValue = document.querySelector(".top-left");
  const middleValue = document.querySelector(".center-center");
  const bottomValue = document.querySelector(".bottom-right");


  const suits = ["spade", "heart", "club", "diamond"];
  const symbols = {
    spade: "♠",
    heart: "♥",
    club: "♣",
    diamond: "♦"
  };

  const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  const chooseRandom = (myArray) => 
    myArray[Math.floor(Math.random() * myArray.length)]

  function buildRandomCard() {
    const suitCard = chooseRandom(suits);
    const numberCard = chooseRandom(numbers);

    console.log("palo:", suitCard);
    console.log("palo:", numberCard);

    topValue.textContent = symbols[suitCard];
    bottomValue.textContent = symbols[suitCard];
    middleValue.textContent = numberCard;

    totalCard.classList.remove("spade", "heart", "club", "diamond");
    totalCard.classList.add(suitCard);

  }
  buildRandomCard();

  const button = this.document.querySelector(".btn");
  button.addEventListener("click", buildRandomCard)

};
