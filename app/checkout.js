import Product from "../src/product.js";
import Storage from "../src/storage.js";
import Cart from "../src/cart.js";
import User from "../src/user.js";

const storage = new Cart("users");
const prds = new Storage("produts");

var tableBody = document.querySelector("#table-body");
var Shipping = document.querySelector("#table-Shipping");
var Total=document.querySelector("#Total");
var SubTotal=document.querySelector("#table-Subtotal");
var clear_checkout=document.querySelector("#clear-checkout");

let totalPriceOfProduects=0;


let Allproducts = prds.products();
storage.productIds().forEach(element => {
  const tempContainer = document.createElement("div");
  let totalPriceOfProduect=Allproducts[element]["price"]*storage.getQuantity(element);
  var row= `   
  <tr>
    <td>${Allproducts[element]["name"]}</td>
    <td>${storage.getQuantity(element)}</td>
    <td>${Allproducts[element]["price"]}</td>
    <td>${totalPriceOfProduect}.00$</td>
  </tr>
`;

tableBody.innerHTML += row;

totalPriceOfProduects+=totalPriceOfProduect;
});


SubTotal.textContent=`${totalPriceOfProduects}.00$`;
Shipping.textContent=`${50}.00$`;
Total.textContent=`${totalPriceOfProduects+50}.00$`


clear_checkout.addEventListener("click",()=>{
  storage.productIds().forEach(element => {

    storage.removeFromCart(element);
  })
})