import Product from "../src/product.js";
import Storage from "../src/storage.js";
import Cart from "../src/cart.js";
import User from "../src/user.js";

const items = document.querySelector("#items");
const item = document.querySelector("#item");
const storage = new Cart("cart");
const prds = new Storage("produts");

//---------------------remove product From Local Storage---------------------------------------
function removeFromLocalStorage(productId) {
  //  console.log(product_id);
  storage. removeFromCart(productId);
  displayProducts();
}

//---------------------dispaly products in cart page------------------------------------------
// console.log(storage.getQuantity());
function displayProducts() {

  var childScripts = item.children;
  Array.from(childScripts).forEach(function (child) {
    item.removeChild(child);
  });
  let Allproducts =prds.products();
  
  items.innerHTML = `You have ${storage.productIds().length}  items in your cart`;
  storage.productIds().forEach(element => {
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div class="d-flex flex-row">
                    <img class="rounded" src="resources/images/cart/${Allproducts[element]["image"]}" width="120">
                    <div class="ml-2 text-center p-3">
                        <span class="font-weight-bold d-block">${Allproducts[element]["name"]}</span>
                        <span class="spec">${Allproducts[element]["category"]}</span>
                    </div>
                </div>
                <div class="d-flex flex-row align-items-center p-2">
                    <span class="d-block p-4">${storage.getQuantity(element)}</span>
                    <span class="d-block ml-5 font-weight-bold p-2">$${Allproducts[element]["price"]}</span>
                    <button id="${element}" class="btn btn-outline-primary border-0 bg-transparent">
                        <img class="rounded" src="resources/images/delete.png" width="20">
                    </button>
                </div>
            </div>           
        `;

    item.appendChild(tempContainer.firstElementChild);

    let removeItem = document.querySelector(`#${element}`);

  
    removeItem.addEventListener("click",(e)=> {
      removeFromLocalStorage(element);
    });
  });
  
}

displayProducts();

;