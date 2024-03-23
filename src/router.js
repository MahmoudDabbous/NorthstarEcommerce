import Authenticator from "./authenticator.js";

export default class Router {
  constructor(routes) {
    this.abs_path_pages = window.location.origin + "/pages/";
    this.abs_path_scripts = window.location.origin + "/app/";
    this.routes = routes;
    this.links = document.getElementById("links");
    this.offcanvas = document.querySelector("#offcanvas");
  }

  loadRouter() {
    Object.keys(this.routes).forEach((route) => {
      const { linkLabel, namePage, auth } = this.routes[route];
      if (!auth && linkLabel != "") {
        let str = `
          <li class="nav-item">
            <a id="${namePage}-nav" class="nav-link link navigator text-dark" aria-current="page" href="${route}">${linkLabel}</a>
          </li>
        `;
        if (namePage == "logout")
          this.offcanvas.insertAdjacentHTML("beforeend", str);
        else this.links.insertAdjacentHTML("beforeend", str);
      }
    });

    this.links_a = document.querySelectorAll(".navigator");

    this.links_a.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const { href } = e.target;
        this.links_a.forEach((link) => {
          link.classList.remove("active");
        });
        e.target.classList.add("active");
        history.pushState({}, "", href);
        window.location.href = link;
      });
    });

    this.loadContent();
  }

  loadContent() {
    let route = window.location.pathname.split("/")[1].toLowerCase();
    const { auth, script } = this.routes[route] || {};
    let html =
      this.abs_path_pages +
      (route === "" ? "home" : this.routes[route].namePage) +
      ".html";
    if (auth) {
      if (!Authenticator.isLoggedIn()) {
        window.location.href = "/login";
      } else {
        window.location.href = "/profile";
      }
      return;
    }

    fetch(html)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load page");
        }
        return response.text();
      })
      .then((htmlRoutes) => {
        document.getElementById("app").innerHTML = htmlRoutes;
        this.setActiveLink(route);

        this.loadScript(script);
      })
      .catch((error) => {
        console.error("Error loading page:", error);
      });
  }

  setActiveLink(route) {
    let links_a = document.querySelectorAll(".navigator");
    const { script } = this.routes[route] || {};
    if (route == "") {
      links_a[0].classList.add("active");
      this.loadScript("home");
    } else {
      links_a.forEach((link) => {
        if (route === link.getAttribute("href")) {
          link.classList.add("active");
          if (script) this.loadScript(script);
        } else {
          link.classList.remove("active");
        }
      });
    }
  }

  loadScript(script) {
    if (script) {
      let scriptTag = document.createElement("script");
      let main_script = document.getElementById("script");
      var childScripts = main_script.children;
      Array.from(childScripts).forEach(function (child) {
        main_script.removeChild(child);
      });
      scriptTag.src = this.abs_path_scripts + script + ".js";
      scriptTag.type = "module";
      main_script.appendChild(scriptTag);
    }
  }
}
