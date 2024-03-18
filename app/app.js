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
    linkLabel: "",
    namePage: "profile",
    auth: !Authenticator.isLoggedIn(),
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
  editProfile: {
    linkLabel: "editProfile",
    namePage: "editProfile",

    auth: !Authenticator.isLoggedIn(),
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
