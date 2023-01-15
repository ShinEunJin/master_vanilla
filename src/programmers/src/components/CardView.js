import createElement from "../utils/functions/createElement.js";
import Card from "./Card.js";
import { getLocalStorage } from "./Storage.js";
import { PERSONALINFO_KEY } from "../constants.js";

class CardView {
  constructor(element) {
    this.$element = element;
  }

  render() {
    const cardsContainer = createElement("div", { id: "cards_container" });

    if (getLocalStorage(PERSONALINFO_KEY)) {
      getLocalStorage(PERSONALINFO_KEY).forEach((info) => {
        const card = new Card(cardsContainer, info);
        card.render();
      });
    }

    this.$element.appendChild(cardsContainer);
  }
}

export default CardView;
