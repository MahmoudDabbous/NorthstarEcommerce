import Product from "../src/product.js";
let cardsRecently = document.getElementById("cards-recently");
console.log(cardsRecently);
Product.productsAll()
  .then((products) => {
    console.log(products);
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
          cardsRecently.insertAdjacentHTML("afterend", parentCard);
        }
        let card = `
            <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="card border-0 text-center w-100">
                    <img src="resources/images/women/women-01.jpg" class="" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">
                            $${product.price}
                        </p>
                    </div>
                </div>
            </div>
`;
        document
          .getElementById(random_id)
          .insertAdjacentHTML("beforeend", card);
        count++;
      }
    }
  })
  .catch((error) => console.log(error));
