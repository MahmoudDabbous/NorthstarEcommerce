import Product from "../src/product.js";
import Cart from "../src/cart.js";
const storage=new Cart("cart");

//assume all products 
const products = {
  product_id_1: {name: "Men's Casual Shirt", price: 35, category: "Men's Clothing", description: 'Comfortable and stylish casual shirt for men.', image: 'casual_shirt.jpg'},
  product_id_2: {name: "Women's Denim Jeans", price: 45, category: "Women's Clothing", description: 'Classic denim jeans for women, perfect for any occasion.', image: 'denim_jeans.jpg'},
  product_id_3: {name: "Men's Formal Suit", price: 120, category: "Men's Clothing", description: 'Elegant formal suit for men, ideal for special occasions.', image: 'formal_suit.jpg'},
  product_id_4: {name: "Women's Summer Dress", price: 25, category: "Women's Clothing", description: 'Light and breezy summer dress for women, perfect for hot days.', image: 'summer_dress.jpg'},
  product_id_5: {name: "Kid's T-Shirt", price: 15, category: "Kid's Clothing", description: 'Cute and comfortable t-shirt for kids, available in various colors.', image: 'kids_tshirt.jpg'},
  product_id_6: {name: "Men's Sports Shoes", price: 60, category: "Men's Footwear", description: 'Durable and stylish sports shoes for men, suitable for various outdoor activities.', image: 'sports_shoes.jpg'},
  product_id_7: {name: "Women's Running Shoes", price: 50, category: "Women's Footwear", description: 'High-performance running shoes for women, designed for comfort and durability.', image: 'running_shoes.jpg'},
  product_id_8: {name: "Men's Hoodie", price: 40, category: "Men's Clothing", description: 'Warm and cozy hoodie for men, perfect for casual wear during colder weather.', image: 'hoodie.jpg'},
  product_id_9: {name: "Women's Blouse", price: 30, category: "Women's Clothing", description: 'Stylish blouse for women, suitable for both casual and formal occasions.', image: 'blouse.jpg'},
  product_id_10: {name: "Men's Leather Belt", price: 20, category: "Accessories", description: 'Classic leather belt for men, adds a touch of sophistication to any outfit.', image: 'leather_belt.jpg'},
}

// assume this is product id of product which user select it to add cart
var product_id="product_id_1";


// Product.productsAll()
// .then((products) => {
//   storage.addToCart(product_id,products[product_id]);
//     }
//   )
//   .catch((error) => console.log(error));


//  to add product to cart
storage.addToCart(product_id,products[product_id]);

// to remove product from cart
// storage.removeFromCart("product_id_1");
