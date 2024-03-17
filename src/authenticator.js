import Session from "./session.js";
import Storage from "./storage.js";

export default class Authenticator {
    static register(email, data) {
        const storage = new Storage("users");
        if (storage.exists(email)) {
            return false;
        }
        storage.create(email, data);
        const session = new Session("session");
        session.create("loggedInUser", email);
        return true;
    }

    
    static login(email, password) {
        const storage = new Storage("users");
        if (!storage.exists(email)) {
            return false;
        }
        const user = storage.read(email);
        if (user.password !== password) {
            return false;
        }
        const session = new Session("session");
        session.create("loggedInUser", email);
        return true;
    }

    static isLoggedIn() {
        const session = new Session("session");
        return session.exists("loggedInUser");
    }

    static logout() {
        const session = new Session("session");
        session.delete("loggedInUser");
    }
}