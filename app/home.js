import Product from "../src/product.js";
import Storage from "../src/storage.js";
let cardsRecently = document.getElementById("cards-recently");
const storage = new Storage("produts");

if (!localStorage.getItem("produts")) {
  Product.productsAll()
    .then((products) => {
      for (const productId in products) {
        if (products.hasOwnProperty(productId)) {
          const product = products[productId];
          storage.create(productId, product);
        }
      }
    })
    .catch((error) => console.log(error));
}



//     console.log("Product ID:", productId);
//     console.log("Product Name:", product.name);
//     console.log("Price:", product.price);
//     console.log("Category:", product.category);
//     console.log("Description:", product.description);
//     console.log("Image:", product.image);
(function () {
  let products = storage.products();
  let count = 0;
  let random_id = 0.0;
  for (var productId in products) {
    if (products.hasOwnProperty(productId)) {
      var product = products[productId];

      if (count % 4 == 0) {
        random_id = Math.random();
        let parentCard = `
              <div id="${random_id}" class="col-12 row mt-2 justify-content-around">
              </div>
              `;
        cardsRecently.insertAdjacentHTML("afterend", parentCard);
      }
      let card = `
             <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="card border-0 text-center">
                    <a href="itempage?id=${productId}"><img style="min-height:200px;max-height:200px" class="img-thumbnail rounded-0 border-0" src="resources/images/cart/${product.image}"  alt="..."></a>
                   <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                       <p class="card-text">
                             $${product.price}
                      </p>
                   </div>                </div>
            </div> `;
      document.getElementById(random_id).insertAdjacentHTML("beforeend", card);
      count++;
    }
  }
})();
