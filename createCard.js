// creating user task cards container array
let cards = [];

// creating task cards for user
const createCard = () => {
  if (cards.length >= 20) {
    return;
  } else {
    cards.length++;
    const cardSelector = document.querySelector(".taskCardContainer");
    const card = document.createElement("button");
    cardSelector.append(card);
    card.classList.add("taskCard");
  }
};
