const Page = `<h1>Page</h1>`;

const app = document.getElementById("app");

const home = document.createElement("h1");
home.innerText = "Home";
app.appendChild(home);

const page = document.createElement("span");
page.style.cursor = "pointer";
page.setAttribute("route", "page");
page.innerText = "page";
app.appendChild(page);

window.onload = () => {
  page.addEventListener("click", (e) => {
    const path = e.target.getAttribute("route");

    window.history.pushState(
      { page: 1 },
      path,
      `${window.location.origin}/${path}`
    );
    app.innerHTML = Page;
  });

  window.addEventListener("popstate", (e) => {
    console.log(window.history);
  });
};
