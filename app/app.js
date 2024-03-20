import "../resources/js/bootstrap.bundle.min.js";
import Authenticator from "../src/authenticator.js";
import Router from "../src/router.js";

const routes = new Router({
  home: {
    linkLabel: "HOME",
    namePage: "home",
    script: "home",
  },
  about: {
    linkLabel: "ABOUT",
    namePage: "about",
    auth: false,
  },
  login: {
    linkLabel: "LOGIN",
    namePage: "login",
    auth: Authenticator.isLoggedIn(),
    script: "login",
  },
  contact: {
    linkLabel: "CONTACT",
    namePage: "contact",
    auth: false,
  },
  register: {
    linkLabel: "REGISTER",
    namePage: "register",
    auth: Authenticator.isLoggedIn(),
    script: "register",
  },
  profile: {
    linkLabel: "PROFILE",
    namePage: "profile",
    auth: !Authenticator.isLoggedIn(),
    script: "profile",
  },
  itempage: {
    linkLabel: "",
    namePage: "itempage",
    auth: false,
  },
  logout: {
    linkLabel: "LOGOUT",
    namePage: "logout",
    auth: !Authenticator.isLoggedIn(),
    script: "logout",
  },
  "edit-profile": {
    linkLabel: "EDIT PROFILE",
    namePage: "edit-profile",

    auth: !Authenticator.isLoggedIn(),
    script: "edit-profile",
  },
  checkout: {
    linkLabel: "CHECKOUT",
    namePage: "checkout",

    auth: !Authenticator.isLoggedIn(),
    script: "checkout",
  },
});

(function () {
  routes.loadRouter();
  if (Authenticator.isLoggedIn()) {
    const logout = document.getElementById("logout-nav");
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      Authenticator.logout();
      window.location.href =
        window.location.origin + "/ITI-Javascrit-Project/login";
    });
  }
})();

/**
 *
 *  {
 *   "eksd@rfmds.com": {
 *      "password": "123456",
 *      "name": "Ahmed",
 *      "cart":[{}...],
 *      "wishlist":[{}...],
 *  }
 * }
 */
