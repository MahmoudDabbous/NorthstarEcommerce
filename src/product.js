import Storage from "./storage.js";
export default class Product {
  static abs_path_data =
    window.location.origin + "/ITI-Javascrit-Project/data/";
  static storage = new Storage("products");
  addComment(user, comment, rating) {
    this.comments.push({ user, comment, rating });
  }

  static calculateTopSellers() {
    const productsArray = Object.entries(Product.products()).map(([productId, product]) => ({
      productId,
      ...product
    }));
    productsArray.sort((a, b) => a.quantity - b.quantity);
    return productsArray.slice(0, 4);
  }

  static products() {
    return Product.storage.products();
  }
  static productsAll() {
    fetch(Product.abs_path_data + "products.json")
      .then((res) => {
        if (!res.ok) throw new Error("File can't load");
        return res.json();
      })
      .then((products) => {
        for (const productId in products) {
          if (products.hasOwnProperty(productId)) {
            const product = products[productId];
            Product.storage.create(productId, product);
          }
        }
      })
      .catch((error) => console.log(error));
  }

}
