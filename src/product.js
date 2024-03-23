import Storage from "./storage.js";
export default class Product {
  static abs_path_data =
    window.location.origin + "/ITI-Javascrit-Project/data/";
  static storage = new Storage("produts");

  static addComment(productId, user, comment) {
    let oldProduct = Product.storage.read(productId);
    let comments = oldProduct.comments;
    let newComment = { user: user, comment: comment };
    comments.push(newComment);
    Product.storage.update_property(productId, "comments", comments);
    return true;
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
