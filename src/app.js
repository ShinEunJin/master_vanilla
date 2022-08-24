const wrapper = document.querySelector(".wrapper");
const list = wrapper.querySelector("ul");

list.style.transform = "translate(-150px)";
list.prepend(list.removeChild(list.lastElementChild));

const slide = (dirt) => {
  if (dirt === "next") {
    const animation = list.animate(
      [
        { transform: "translateX(-150px)" },
        { transform: "translateX(-300px)" },
      ],
      200
    );
    animation.onfinish = () => {
      list.appendChild(list.removeChild(list.firstElementChild));
    };
  } else {
    const animation = list.animate(
      [{ transform: "translateX(-150px)" }, { transform: "translateX(0px)" }],
      200
    );
    animation.onfinish = () => {
      list.prepend(list.removeChild(list.lastElementChild));
    };
  }
};

wrapper.addEventListener("click", (event) => {
  const dirt = event.target.dataset.action;
  if (dirt) slide(dirt);
});
