import Storage from "./storage.js";
import Session from "./session.js";

export default class User {
  constructor(email) {
    const storage = new Storage("users");
    const user = storage.read(email);

    this.email = email;
    this.password = user.password;
    this.name = user.name;
    this.cart = user.cart;
    this.wishlist = user.wishlist;
    this.address = user.address;
    this.phoneNum = user.phoneNum;
  }

  save() {
    const storage = new Storage("users");
    storage.update(this.email, this);
  }



  addToCart(productId, data) {
    const exists = this.readCart().some(element => element.productId === productId);

      if (!exists) {
          this.cart.push(data);
          this.save();
      }
 }


  updatecount(productId, count) {
  
    const existingProductIndex = this.readCart().findIndex(element => element.productId === productId);

    if (existingProductIndex !== -1) {
      
        this.cart[existingProductIndex].count = count;
    } else {
        
        this.cart.push({ productId: productId, count: count });
    }

  
    this.save();
  }

    removeFromCart(productIdToRemove) {
      
      const indexToRemove = this.cart.findIndex(item => item.productId === productIdToRemove);
  
      if (indexToRemove !== -1) {
         
          this.cart.splice(indexToRemove, 1);
          this.save();
          return true; 
      } else {
          
          return false;
      }
  }
  
  getCount(productId) {
    const product = this.readCart().find(item => item.productId === productId);

    return product ? product.count : 0;
}

  readCart()
  {
    return this.cart;
  }

  Ids() {
    return this.cart.map(item => item.productId);
    }

  addToWishlist(productId) {
    this.wishlist.push(productId);
    this.save();
  }

  removeFromWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    if (index !== -1) {
      this.wishlist.splice(index, 1);
      this.save();
    }
  }

  /* newly added method to update user*/
  static updateUser(email, data) {
    const storage = new Storage("users");
    if (storage.exists(email)) {
      storage.delete(email);
      storage.create(data.email, data);
      if (email !== data.email) {
        const session = new Session("session");
        session.create("loggedInUser", data.email);
      }
    }
  }
}
