const container = document.createElement("div");
const boxWrap = document.createElement("div");
const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");
const box4 = document.createElement("div");
const box5 = document.createElement("div");
const leftArrow = document.createElement("img");
const rightArrow = document.createElement("img");

boxWrap.setAttribute("class", "boxWrap");
box1.setAttribute("class", "box");
box2.setAttribute("class", "box");
box3.setAttribute("class", "box");
box4.setAttribute("class", "box");
box5.setAttribute("class", "box");

const body = document.querySelector("body");

body.append(container, boxWrap);

container.style.width = "1500px";
container.style.heigth = "300px";
container.style.float = "left";

container.append(box1, box2, box3, box4, box5);

boxWrap.style.border = "2px solid black";
boxWrap.style.boxSizing = "border-box";
boxWrap.style.width = "300px";
boxWrap.style.height = "300px";
boxWrap.style.position = "absolute";
boxWrap.style.zIndex = 2;
boxWrap.style.textAlign = "center";

leftArrow.src = "bottomArrow.png";
leftArrow.style.transform = "rotate(90deg)";
leftArrow.style.padding = "4px";
leftArrow.style.backgroundColor = "black";
rightArrow.src = "bottomArrow.png";
rightArrow.style.transform = "rotate(-90deg)";
rightArrow.style.padding = "4px";
rightArrow.style.backgroundColor = "black";
boxWrap.append(leftArrow, rightArrow);

const box = document.querySelectorAll(".box");

box.forEach((item, idx) => {
  const text = document.createElement("span");
  text.style.fontSize = "24px";
  text.style.fontWeight = "bold";
  text.innerText = idx + 1;
  item.innerHTML = text.outerHTML;
  item.style.display = "flex";
  item.style.justifyContent = "center";
  item.style.alignItems = "center";
  item.style.width = "300px";
  item.style.height = "300px";
  item.style.float = "left";
  item.style.backgroundColor = ["yellow", "green", "gray", "aqua", "blue"][idx];
});

leftArrow.onclick = () => {
  const animation = container.animate(
    [{ transform: "translateX(0px)" }, { transform: "translateX(300px)" }],
    200
  );
  animation.onfinish = () => {
    const removeItem = container.removeChild(container.firstElementChild);
    container.appendChild(removeItem);
  };
};

rightArrow.onclick = () => {
  const animation = container.animate(
    [{ transform: "translateX(0px)" }, { transform: "translateX(-300px)" }],
    200
  );
  animation.onfinish = () => {
    const removeItem = container.removeChild(container.lastElementChild);
    container.prepend(removeItem);
  };
};
