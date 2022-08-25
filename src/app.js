const wrapper = document.querySelector(".wrapper");
const box = wrapper.querySelector(".box");
const list = box.querySelector("ul");
const image = list.querySelectorAll("img");

let count = 0;

let width = 300;
list.style.transform = `translate(-${width}px)`;
box.style.width = `${width}px`;
list.style.width = `${list.childElementCount * width}px`;
list.style.height = `${width}px`;
for (let x of image) {
  x.style.width = `${width}px`;
}
list.prepend(list.removeChild(list.lastElementChild));

const slide = (dirt) => {
  if (dirt === "next") {
    const animation = list.animate(
      [
        { transform: `translateX(-${width}px)` },
        { transform: `translateX(-${width * 2}px)` },
      ],
      { easing: "ease-out", duration: 150 }
    );
    animation.onfinish = () => {
      list.appendChild(list.removeChild(list.firstElementChild));
    };
  } else {
    const animation = list.animate(
      [
        { transform: `translateX(-${width}px)` },
        { transform: `translateX(0px)` },
      ],
      { easing: "ease-out", duration: 150 }
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

const inputNumber = document.querySelector(".input-number");
inputNumber.setAttribute("placeholder", width);

inputNumber.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
  if (e.target.value && 300 <= e.target.value && e.target.value <= 600) {
    box.animate([{ opacity: 0 }, { opacity: 1 }], 150);
    width = Number(e.target.value);
    list.style.transform = `translate(-${width}px)`;
    box.style.width = `${width}px`;
    list.style.width = `${list.childElementCount * width}px`;
    list.style.height = `${width}px`;
    for (let x of image) {
      x.style.width = `${width}px`;
    }
  }
});
