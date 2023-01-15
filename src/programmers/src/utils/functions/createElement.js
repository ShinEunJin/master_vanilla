const createElement = (tag, attributes = {}, ...children) => {
  const element = document.createElement(tag);

  if (attributes) {
    for (const [key, val] of Object.entries(attributes)) {
      element.setAttribute(key, val);
    }
  }

  if (children && children.length > 0) {
    for (const child of children) {
      element.appendChild(
        typeof child === "object" ? child : document.createTextNode(child)
      );
    }
  }

  return element;
};

export default createElement;
