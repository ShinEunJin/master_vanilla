import Header from "./components/Header.js";
import HomePage from "./page/HomePage.js";
import SignupPage from "./page/SignupPage.js";
import { setLocalStorage } from "./components/Storage.js";
import routes from "./routes.js";
import { PERSONALINFO_KEY } from "./constants.js";
import new_data from "./data/new_data.json" assert { type: "json" };

class App {
  constructor(root) {
    this.$root = root;
    this.render();
  }

  render() {
    const header = new Header(this.$root);
    header.render();

    const main = document.createElement("main");
    main.setAttribute("id", "page_content");
    this.$root.appendChild(main);

    const homePage = new HomePage(main);
    const signupPage = new SignupPage(main);

    homePage.render();

    document.addEventListener("urlchange", (e) => {
      let pathname = e.detail.href;
      main.innerHTML = "";

      switch (pathname) {
        case routes.main:
          homePage.render();
          break;
        case routes.signup:
          signupPage.render();
          break;
        default:
          break;
      }
    });

    setLocalStorage(PERSONALINFO_KEY, new_data);
  }
}

export default App;
