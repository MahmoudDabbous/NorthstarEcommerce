export default class Router {
  constructor(routes) {
    this.abs_path_pages = window.location.origin + "/ITI-Javascrit-Project/resources/pages/";
    this.routes = routes;
    this.links = document.getElementById("links");
  }

  loadRouter() {
    Object.keys(this.routes).forEach((route) => {
      const { linkLabel } = this.routes[route];

      let str = `
        <li class="nav-item">
          <a class="nav-link link text-dark" aria-current="page" href="${route}">${linkLabel}</a>
        </li>
        `;
      this.links.insertAdjacentHTML("beforeend", str);
    });

    this.links_a = document.querySelectorAll(".link");

    for (let i = 0; i < this.links_a.length; i++) {
      this.links_a[i].addEventListener("click", (e) => {
        console.log({ e });
        e.preventDefault();
        const { href } = e.target;
        this.links_a.forEach((link) => {
          link.classList.remove("active");
        });
        e.target.classList.add("active");
        history.pushState({}, "", href);
        this.loadContent();
      });
    }
  }

  loadContent() {
    let route = window.location.pathname.split("/")[2].toLocaleLowerCase();
    let html = this.abs_path_pages + "home.html";
    if (route != "") html = this.abs_path_pages + this.routes[route].namePage + ".html";
    fetch(html)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load page");
        }
        return response.text();
      })
      .then((htmlRoutes) => {
        document.getElementById("app").innerHTML = htmlRoutes;
      })
      .catch((error) => {
        console.error("Error loading page:", error);
      });

    let links_a = document.querySelectorAll(".link");
    if (route == "") {
      links_a[0].classList.add("active");
    }
    else
      for (let i = 0; i < links_a.length; i++) {
        if (route === links_a[i].getAttribute("href")) {
          links_a[i].classList.add("active");
        }
      }
  }
}
