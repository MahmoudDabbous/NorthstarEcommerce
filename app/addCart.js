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
  storage.removeFromCart(productId);
  let badge_span_header = document.querySelector("#badge-span-header");
  const cart = new Cart("cart");
  badge_span_header.textContent = cart.productIds().length;

  displayProducts();
}

//---------------------dispaly products in cart page------------------------------------------
//
item.textContent = `You have ${storage.productIds().length} items in your cart`;

function displayProducts() {
  var childScripts = item.children;
  Array.from(childScripts).forEach(function (child) {
    item.removeChild(child);
  });
  let Allproducts = prds.products();
  // console.log(Allproducts, new User("users").Ids());
  storage.productIds().forEach((element) => {
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = `
      <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
      <div class="d-flex flex-row align-items-center"> <!-- Center this div -->
          <img class="rounded" src="resources/images/cart/${
            Allproducts[element]["image"]
          }" width="120">
          <div class="ml-2 text-center p-3">
              <span class="font-weight-bold d-block">${
                Allproducts[element]["name"]
              }</span>
              <span class="spec">${Allproducts[element]["category"]}</span>
          </div>
      </div>
      <div class="quantity d-flex justify-content-center align-items-center"> <!-- Centered div -->
          <button class="btn-minus btn w-60 btn-outline-primary border-0 bg-transparent" id="${element}_m">-</button>
          <span class="quantity-value d-block p-1">${storage.getQuantity(
            element
          )}</span>
          <button class="btn-plus btn w-60 btn-outline-primary border-0 bg-transparent" id="${element}_p">+</button>
      </div>
      <span class="ml-5 font-weight-bold p-2">$${
        Allproducts[element]["price"]
      }</span>
      <button id="${element}" class="btn btn-outline-primary border-0 bg-transparent">
          <img class="rounded" src="resources/images/delete.png" width="20">
      </button>
  </div>
  
  
      `;

    //   console.log(badge_span_header);
    item.appendChild(tempContainer.firstElementChild);

    let removeItem = document.querySelector(`#${element}`);
    removeItem.addEventListener("click", (e) => {
      removeFromLocalStorage(element);
    });

    // Selecting plus and minus buttons
    let plusButton = document.querySelector(`#${element}_p`);
    let minusButton = document.querySelector(`#${element}_m`);

    console.log(Allproducts[element]["quantity"]);
    // Adding event listeners for plus and minus buttons
    plusButton.addEventListener("click", (e) => {
      e.preventDefault();
      storage.incr_Quantity(element, Allproducts[element]["quantity"]);

      let quantityInlocalStorage = Allproducts[element]["quantity"] - 1;
      prds.update_property(element, "quantity", quantityInlocalStorage);
      updateQuantityDisplay(element);
    });

    minusButton.addEventListener("click", (e) => {
      e.preventDefault();
      storage.decr_Quantity(element, Allproducts[element]["quantity"]);
      let quantityInlocalStorage = Allproducts[element]["quantity"] + 1;
      prds.update_property(element, "quantity", quantityInlocalStorage);
      updateQuantityDisplay(element);
    });
  });
}

function updateQuantityDisplay(element) {
  let quantityElement = document.querySelector(
    `#${element}_p`
  ).previousElementSibling;
  quantityElement.textContent = storage.getQuantity(element);
}

displayProducts();
