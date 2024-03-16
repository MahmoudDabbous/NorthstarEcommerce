# Todos

- Authentication (Login, Registration) - Dabbous
- Cart - Torky
- Wishlist - Torky
- Forms in pages - Mansour and Fakhr
  - Contact form
  - Edit profile form
  - Checkout form
- dynamic products display (we need dummy data) - Galal
  - All
  - Single
  - Search

## Data Schema

- Products Schema

```json
{
 "product_id": {
      "name": "product1",
      "price": 100,
      "category": "category1",
      "description": "description1",
      "image": "image1",
      "rating": 5,
      "comments": [ { "user": "email", "comment": "comment", "rating": 5 },...],
      "quantity": 10,
      "inCartOf": ['email',...], 
      "inWishListOf": ['email',...], 
 },...
}
```

- Users Schema

```json
{
 "eksd@rfmds.com": {
         "password": "123456",
         "name": "Ahmed",
         "cart":[product_id, ...],
         "wishlist":[product_id, ...],
 },...
}
```
