let abs_path_pages =
  window.location.origin + "/FinalProjectJavaScript/resources/pages/";

const routes = {
  home: {
    linkLabel: "HOME",
    namePage: "home",
  },
  about: {
    linkLabel: "ABOUT",
    namePage: "about",
  },
  login: {
    linkLabel: "LOGIN",
    namePage: "login",
  },
};

let links = document.getElementById("links");
// to get keys and create a element to the array of objects

Object.keys(routes).forEach((route) => {
  const { linkLabel } = routes[route];

  let str = `
    <li class="nav-item">
      <a class="nav-link link text-dark" aria-current="page" href="${route}">${linkLabel}</a>
    </li>
    `;
  links.insertAdjacentHTML("beforeend", str);
});

// to get links  a element
let links_a = document.querySelectorAll(".link");

// to prevent default
for (let i = 0; i < links_a.length; i++) {
  links_a[i].addEventListener("click", (e) => {
    e.preventDefault();
    const { href } = e.target;
    // to remove active from all links
    links_a.forEach((link) => {
      link.classList.remove("active");
    });
    // add active for link that is clicked
    e.target.classList.add("active");
    history.pushState({}, "", href);
    loadContent();
  });
}

function loadContent() {
  let route = window.location.pathname.split("/")[2].toLocaleLowerCase();
  let html = abs_path_pages + "home.html";
  if (route != "") html = abs_path_pages + routes[route].namePage + ".html";
  // Fetch the content of the corresponding HTML file
  fetch(html)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load page");
      }
      return response.text();
    })
    .then((htmlContent) => {
      // Load the retrieved content into the #content div
      document.getElementById("app").innerHTML = htmlContent;
    })
    .catch((error) => {
      // Handle error
      console.error("Error loading page:", error);
    });
}

// to initialize for the router
(function initialize() {
  links_a[0].classList.add("active");
  loadContent();
})();
