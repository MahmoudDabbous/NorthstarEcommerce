import Storage from "./storage.js";
import User  from "./user.js";
import Authenticator from "./authenticator.js";

export default class Cart {

    constructor(collection) {
         this.collection=collection;
         const storage=new Storage(collection);
           storage.save();
      }

    addToCart(productId,data)
    {
        const storage=new Storage(this.collection);

         if(Authenticator.isLoggedIn())
         {
            const user=new User(Authenticator.currentUser());
             
            user.addToCart(productId);
           
            storage.create(productId,data);
            return true;
         }

         return false;
    }
    


    removeFromCart(productId)
    {
        const storage=new Storage(this.collection);

        if(Authenticator.isLoggedIn())
        {
           const user=new User(Authenticator.currentUser());
           user.removeFromCart(productId);
           storage.delete(productId);
           return true;
        }

        return false;
    }


    udate(productId,data){

        const storage=new Storage(this.collection);

         if(Authenticator.isLoggedIn())
         {
            storage.update(productId,data);
            return true;
         }

         return false

    }

    count()
    {
        const storage=new Storage(this.collection);

        if(Authenticator.isLoggedIn())
        {
            
           return storage.count();
           
        }

        return false;
    }


    allProducts()
    {
        const storage=new Storage(this.collection);

        if(Authenticator.isLoggedIn())
        {
            
           return storage.products();
           
        }

        return false;
    }


    productIds()
    {
        if(Authenticator.isLoggedIn())
        {
            
            const user=new User(Authenticator.currentUser());
           return user.readCart();
           
        }

        return false;
    }
}

  