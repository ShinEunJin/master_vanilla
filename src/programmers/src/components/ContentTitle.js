import createElement from "../utils/functions/createElement.js";

class ContentTitle {
  constructor(element, title) {
    this.$element = element;
    this.$title = title;
  }

  render() {
    const content_title = createElement("h1", null, this.$title);
    const content_title_box = createElement(
      "div",
      { class: "content_title" },
      content_title
    );
    this.$element.appendChild(content_title_box);
  }
}

export default ContentTitle;
