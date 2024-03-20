import Product from "../src/product.js";
import Cart from "../src/cart.js";

const items = document.querySelector("#items");
const item = document.querySelector("#item");
const storage = new Cart("cart");

//---------------------add product To Local Storage---------------------------------------
function addToLocalStorage(product_id) {
  Product.productsAll()
    .then((products) => {
      storage.addToCart(product_id, products[product_id]);
    })
    .catch((error) => console.log(error));
}

// addToLocalStorage("product_id_5")
//---------------------remove product From Local Storage---------------------------------------
function removeFromLocalStorage(product_id) {
  //  console.log(product_id);
  storage.removeFromCart(product_id);
  displayProducts();
}

//---------------------dispaly products in cart page------------------------------------------

function displayProducts() {
  var childScripts = item.children;
  Array.from(childScripts).forEach(function (child) {
    item.removeChild(child);
  });
  items.innerHTML = `You have ${storage.count()}  items in your cart`;
  let Allproducts = storage.allProducts();
  for (let index = 0; index < storage.count(); index++) {
    let product_id = storage.productIds()[index];
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div class="d-flex flex-row">
                    <img class="rounded" src="resources/images/cart/${Allproducts[product_id]["image"]}" width="120">
                    <div class="ml-2 text-center p-3">
                        <span class="font-weight-bold d-block">${Allproducts[product_id]["name"]}</span>
                        <span class="spec">${Allproducts[product_id]["category"]}</span>
                    </div>
                </div>
                <div class="d-flex flex-row align-items-center p-2">
                    <span class="d-block p-4">${Allproducts[product_id]["quantity"]}</span>
                    <span class="d-block ml-5 font-weight-bold p-2">$${Allproducts[product_id]["price"]}</span>
                    <button id="${product_id}" class="btn btn-outline-primary border-0 bg-transparent">
                        <img class="rounded" src="resources/images/delete.png" width="20">
                    </button>
                </div>
            </div>

           
        `;

    item.appendChild(tempContainer.firstElementChild);

    let removeItem = document.querySelector(`#${product_id}`);

  
    removeItem.addEventListener("click",(e)=> {
      removeFromLocalStorage(product_id);
    });
  }
}

displayProducts();
