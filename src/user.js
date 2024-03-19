import Storage from "./storage.js";

export default class User {
  constructor(email) {
    const storage = new Storage("users");
    const user = storage.read(email);

    this.email = email;
    this.password = user.password;
    this.name = user.name;
    this.cart = user.cart;
    this.wishlist = user.wishlist;
  }

  save() {
    const storage = new Storage("users");
    storage.update(this.email, this);
  }

  readCart() {
    
    return this.cart;
  }
  
  addToCart(productId) {
    this.cart.push(productId);
    this.save();
  }

  removeFromCart(productId) {
    const index = this.cart.indexOf(productId);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.save();
    }
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
}
