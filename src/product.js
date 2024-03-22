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
    quantity
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
