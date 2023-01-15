import CardView from "../components/CardView.js";
import ContentTitle from "../components/ContentTitle.js";

class HomePage {
  constructor(main) {
    this.$main = main;
    this.$title = "CardView";
  }

  render() {
    const contentTitle = new ContentTitle(this.$main, this.$title);
    contentTitle.render();

    const cardsContainer = new CardView(this.$main);
    cardsContainer.render();
  }
}

export default HomePage;
