import '../resources/js/bootstrap.bundle.min.js';
import Authenticator from '../src/authenticator.js';
import Router from '../src/router.js';

const routes = new Router({
    home: {
        linkLabel: "HOME",
        namePage: "home",
        auth: false,
    },
    about: {
        linkLabel: "ABOUT",
        namePage: "about",
        auth: false,
    },
    login: {
        linkLabel: "LOGIN",
        namePage: "login",
        auth: false,
    },
    contact: {
        linkLabel: "CONTACT",
        namePage: "contact",
        auth: false,
    },
    register: {
        linkLabel: "REGISTER",
        namePage: "register",
        auth: false,
        script: 'register.js'
    },
    profile: {
        linkLabel: "",
        namePage: "profile",
        auth: Authenticator.isLoggedIn(),
    },
    itempage: {
        linkLabel: "",
        namePage: "itempage",
        auth: false,
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
