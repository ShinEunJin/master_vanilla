import { CARD_STATUS } from "../constants.js";
import createElement from "../utils/functions/createElement.js";
import { getLocalStorage, setLocalStorage } from "./Storage.js";

class Card {
  constructor(element, info) {
    this.$element = element;
    this.info = info;
  }

  setCardStatus(idx) {
    if (!getLocalStorage(CARD_STATUS)) {
      return setLocalStorage(CARD_STATUS, []);
    }
    const cardStatus = getLocalStorage(CARD_STATUS);
    const cardIdx = cardStatus.findIndex((index) => index === idx);

    if (cardIdx === -1) cardStatus.push(idx);
    else cardStatus.splice(cardIdx, 1);

    setLocalStorage(CARD_STATUS, cardStatus);
  }

  render() {
    const cardPlaneBack = createElement(
      "div",
      { class: "card_plane card_plane--back" },
      this.info.mbti
    );
    const cardPlaneFront = createElement(
      "div",
      { class: "card_plane card_plane--front" },
      this.info.name
    );
    const card = createElement(
      "div",
      { idx: this.info.idx, class: "card" },
      cardPlaneFront,
      cardPlaneBack
    );

    if (getLocalStorage(CARD_STATUS)) {
      if (getLocalStorage(CARD_STATUS).includes(this.info.idx)) {
        card.classList.toggle("is-flipped");
      }

      card.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("is-flipped");
        this.setCardStatus(Number(e.currentTarget.attributes.idx.nodeValue));
      });
    }

    this.$element.appendChild(card);
  }
}

export default Card;
