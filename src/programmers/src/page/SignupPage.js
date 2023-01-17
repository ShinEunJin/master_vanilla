import ContentTitle from "../components/ContentTitle.js";
import SignupView from "../components/SignupView.js";

class SignupPage {
  constructor(main) {
    this.$main = main;
    this.$title = "Sign Up, GreatPeople!";
  }

  render() {
    const contentTitle = new ContentTitle(this.$main, this.$title);
    contentTitle.render();

    const formContainer = new SignupView(this.$main);
    formContainer.render();
  }
}

export default SignupPage;
