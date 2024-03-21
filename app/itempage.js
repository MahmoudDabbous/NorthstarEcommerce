import Storage from "../src/storage.js";
let imgProduct = document.querySelector("#img-product");
let nameProduct = document.querySelector("#name-product");
let priceProduct = document.querySelector("#price-product");
let oldPriceProduct = document.querySelector("#old-price-product");
let descProduct = document.querySelector(".desc-product");
let reviews = document.querySelector("#reviews");
let addProduct = document.querySelector("#add-product");
let badge_span_header = document.querySelector("#badge-span-header");
let search = new URLSearchParams(window.location.search);

const products = new Storage("produts");
const cart = new Storage("cart");
let productId = "";

if (search.size > 0) {
    productId = search.get("id");
}
else {
    window.location.href = "home";
}

if (productId) {
    if (products.exists(productId)) {
        badge_span_header.textContent = cart.count();
        let res = products.read(productId);
        imgProduct.src = "resources/images/cart/" + res.image;
        nameProduct.textContent = res.name;
        priceProduct.textContent = "$ " + res.price;
        oldPriceProduct.textContent = "$ " + (res.price / 2 + res.price);
        descProduct.textContent = res.description;
        res.comments.forEach((comment) => {
            let review = `            
        <div class="review mb-3">
            <strong>${comment.user}:</strong>
            <p class="mb-0">${comment.comment}</p>
        </div>
        `;
            reviews.insertAdjacentHTML("beforeend", review);
        });
    }
}

addProduct.addEventListener("click", function (e) {
    if (productId) {
        let quantity = products.read(productId).quantity;
        if (cart.exists(productId)) {
            let count = (parseInt(cart.read(productId).count));
            if (count < quantity) {
                const product = {
                    productId: productId,
                    count: ++count,
                };
                cart.update(productId, product);
            } else
                alert("This product finished");
        } else {
            const product = {
                productId: productId,
                count: 1,
            };
            cart.create(productId, product);
        }
    }
    badge_span_header.textContent = cart.count();
});
