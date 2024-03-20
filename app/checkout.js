import checkout from "./checkout.js";

// Sample data (replace this with your actual data)
var products = [
  { name: "Product 1", price: 10, quantity: 2 },
  { name: "Product 2", price: 15, quantity: 3 },
  { name: "Product 3", price: 20, quantity: 1 },
];

var tableBody = document.getElementById("table-body");
var total = 0;

// Loop through products and populate the table
products.forEach(function (product) {
  var productTotal = product.price * product.quantity;
  total += productTotal;

  var row = `
      <tr>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>${productTotal}</td>
      </tr>
    `;
  tableBody.innerHTML += row;
});

// Add total row at the end
var totalRow = `
    <tr>
      <td colspan="3" class="fw-bold text-end">Total:</td>
      <td>${total}</td>
    </tr>
  `;
tableBody.innerHTML += totalRow;
