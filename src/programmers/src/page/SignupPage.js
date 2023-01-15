import ContentTitle from "../components/ContentTitle.js";

class SignupPage {
  constructor(main) {
    this.$main = main;
    this.$title = "Sign Up, GreatPeople!";
  }

  render() {
    const contentTitle = new ContentTitle(this.$main, this.$title);
    contentTitle.render();
  }
}

export default SignupPage;
