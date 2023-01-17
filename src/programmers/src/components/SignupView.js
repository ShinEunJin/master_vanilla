import createElement from "../utils/functions/createElement.js";

class SignupView {
  constructor(element) {
    this.$element = element;
  }

  render() {
    const formContainer = createElement("div", { id: "form_container" });

    this.$element.appendChild(formContainer);
  }
}

export default SignupView;
