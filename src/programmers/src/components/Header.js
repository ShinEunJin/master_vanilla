import routes from "../routes.js";
import createElement from "../utils/functions/createElement.js";

class Header {
  constructor(root) {
    this.$root = root;
  }

  changeUrl(url) {
    window.history.pushState("", "", url);
    const urlChange = new CustomEvent("urlchange", {
      detail: { href: url },
    });
    document.dispatchEvent(urlChange);
  }

  render() {
    const signup_menu_span = createElement(
      "span",
      { class: "menu_name", id: "menu_signup" },
      "SIGNUP"
    );

    const home_menu_span = createElement(
      "span",
      { class: "menu_name", id: "menu_home" },
      "HOME"
    );

    const signup_menu = createElement(
      "div",
      { class: "header header_right" },
      signup_menu_span
    );

    signup_menu.addEventListener("click", () => {
      this.changeUrl(routes.signup);
    });

    const home_menu = createElement(
      "div",
      { class: "header header_left" },
      home_menu_span
    );

    home_menu.addEventListener("click", () => {
      this.changeUrl(routes.main);
    });

    const header = createElement("header", null, home_menu, signup_menu);
    this.$root.appendChild(header);
  }
}

export default Header;
