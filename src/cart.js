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
            console.log(user.readCart());
            storage.create(productId,data);
            return true;
         }

         return false;
    }
    

    
    exists(productId)
    {
        if(Authenticator.isLoggedIn())
        {
           const user=new User(Authenticator.currentUser());
           productsId=user.readCart();
            if(productsId.includes(productId)){
                return true;
            }
            
            return false;
        }
            
    }

    removeFromCart(productId)
    {
        const storage=new Storage(this.collection);

        if(Authenticator.isLoggedIn() & !this.exists(productId))
        {
            
           const user=new User(Authenticator.currentUser());
           user.removeFromCart(productId);
           storage.delete(productId);
           return true;
        }

        return false;
    }



}

  