import Product from "../src/product.js";
let cardsRecently = document.querySelector("#cards-recently");
let topSeller = document.querySelector("#top-seller");
let imageCarousel = ["carousel1", "carousel2"];
let carousel = document.querySelector("#carousel-inner");

if (!localStorage.getItem("products")) {
  Product.productsAll();
}
let count = 0;
imageCarousel.forEach((image) => {
  let img = "";
  if (count == 0) {
    img = `
          <div class="carousel-item active">
            <div id="${image}" class="img-home"></div>
          </div>`;
  } else {
    img = `
          <div class="carousel-item">
            <div id="${image}" class="img-home"></div>
          </div>`;
  }
  count++;
  carousel.insertAdjacentHTML("beforeend", img);
  document.querySelector(`#${image}`).style.backgroundImage = `url("resources/images/carousel/${image}.jpg")`;
});

//     console.log("Product ID:", productId);
//     console.log("Product Name:", product.name);
//     console.log("Price:", product.price);
//     console.log("Category:", product.category);
//     console.log("Description:", product.description);
//     console.log("Image:", product.image);





Product.calculateTopSellers().forEach((product, index) => {
  let card = `
             <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="card border-0 text-center">
                    <a href="itempage?id=${product.productId}"><img style="min-height:200px;max-height:200px" class="img-thumbnail rounded-0 border-0" src="resources/images/cart/${product.image}"  alt="..."></a>
                   <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                       <p class="card-text">
                             $${product.price}
                      </p>
                   </div>                </div>
            </div> `;
  topSeller.insertAdjacentHTML("beforeend", card);
});



(function () {
  let products = Product.products();
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
