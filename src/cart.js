import Storage from "./storage.js";
import User from "./user.js";
import Authenticator from "./authenticator.js";


export default class Cart {

    constructor(collection) {
        this.collection = collection;
        this.storage = new Storage(this.collection);
        this.storage.save();
        this.alldata={};
    }

    addToCart(productId, data) {
        
        if (Authenticator.isLoggedIn()) {
            this.storage.create(productId, data);
            return true;
        }
        return false;
    }
    



    removeFromCart(productId) {
        const storage = new Storage(this.collection);

        if (Authenticator.isLoggedIn()) {
            const user = new User(Authenticator.currentUser());
            user.removeFromCart(productId);
            
            return true;
        }

        return false;
    }


    update(email, data) {

        const storage = new Storage(this.collection);

        if (Authenticator.isLoggedIn()) {

            storage.update(email, data);
            return true;
        }

        return false

    }

    exists(email) {
        if(this.allProducts()[email])
        {
            return true;
        }

        return false;
      }
    
    count() {
        const storage = new Storage(this.collection);

        if (Authenticator.isLoggedIn()) {

            return storage.count();

        }

        return false;
    }


    allProducts() {
        const storage = new Storage(this.collection);

        if (Authenticator.isLoggedIn()) {

            return storage.products();

        }

        return false;
    }


    productIds() {
        if (Authenticator.isLoggedIn()) {

            const user = new User(Authenticator.currentUser());
            return user.Ids();

        }

        return false;
    }


     getQuantity(productId)
    {
        if (Authenticator.isLoggedIn()) {

            const user = new User(Authenticator.currentUser());
            return user.getCount(productId);

        }

        return false;
    }


    incr_Quantity(productId,quantity)
    {
        if (Authenticator.isLoggedIn()) {

            const user = new User(Authenticator.currentUser());
            return user.incre_count(productId,quantity);

        }

        return false;
    }


    decr_Quantity(productId,quantity)
    {
        if (Authenticator.isLoggedIn()) {

            const user = new User(Authenticator.currentUser());
            return user.decre_count(productId,quantity);

        }

        return false;
    }
}

