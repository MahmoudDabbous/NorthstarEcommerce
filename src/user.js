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
    console.log(data);
  }
}
