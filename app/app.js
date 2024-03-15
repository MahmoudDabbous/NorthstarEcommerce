import '../resources/js/bootstrap.bundle.min.js';
import Router from '../src/router.js';

const routes = new Router({
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
    contact: {
        linkLabel: "CONTACT",
        namePage: "contact",
    },
  register: {
    linkLabel: "REGISTER",
    namePage: "register",
  }
});

(function () {
    routes.loadRouter();
})()

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
