import Product from "../src/product.js";
let cardsRecently = document.getElementById("cards-recently");
console.log(cardsRecently);
Product.productsAll()
  .then((products) => {
    let count = 0;
    let random_id = 0.0;
    for (const productId in products) {
      if (products.hasOwnProperty(productId)) {
        const product = products[productId];
        if (count % 4 == 0) {
          random_id = Math.random();
          let parentCard = `
        <div id="${random_id}" class="col-12 row mt-2 justify-content-around">
        </div>
        `;
          cardsRecently.insertAdjacentHTML("beforeend", parentCard);
        }

        count++;
      }
    }
  })
  .catch((error) => console.log(error));
