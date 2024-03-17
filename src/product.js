export default class Product {
  static abs_path_data =
    window.location.origin + "/ITI-Javascrit-Project/data/";
  constructor(
    id,
    name,
    price,
    category,
    description,
    image,
    rating,
    comments,
    quantity,
    inCartOf,
    inWishListOf
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.description = description;
    this.image = image;
    this.rating = rating;
    this.comments = comments;
    this.quantity = quantity;
    this.inCartOf = inCartOf;
    this.inWishListOf = inWishListOf;
  }

  // Method to add a comment to the product
  addComment(user, comment, rating) {
    this.comments.push({ user, comment, rating });
  }

  // Method to increase the quantity of the product
  increaseQuantity(amount) {
    this.quantity += amount;
  }

  // Method to decrease the quantity of the product
  decreaseQuantity(amount) {
    if (this.quantity >= amount) {
      this.quantity -= amount;
    } else {
      console.log("Error: Quantity cannot be decreased below 0.");
    }
  }

  // Method to add the product to the cart of a user
  addToCart(user) {
    if (!this.inCartOf.includes(user)) {
      this.inCartOf.push(user);
    }
  }

  // Method to remove the product from the cart of a user
  removeFromCart(user) {
    const index = this.inCartOf.indexOf(user);
    if (index !== -1) {
      this.inCartOf.splice(index, 1);
    }
  }

  // Method to add the product to the wish list of a user
  addToWishList(user) {
    if (!this.inWishListOf.includes(user)) {
      this.inWishListOf.push(user);
    }
  }

  // Method to remove the product from the wish list of a user
  removeFromWishList(user) {
    const index = this.inWishListOf.indexOf(user);
    if (index !== -1) {
      this.inWishListOf.splice(index, 1);
    }
  }

  static productsAll() {
    return new Promise((resolve, reject) => {
      fetch(Product.abs_path_data + "products.json")
        .then((res) => {
          if (!res.ok) throw new Error("File can't load");
          return res.json();
        })
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  }
}
