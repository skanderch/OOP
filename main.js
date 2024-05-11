// Create Product class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // Create ShoppingCartItem class
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate the total price of the item
    calculateTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // Create ShoppingCart class
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to get the total of items inside the cart
    getTotalItems() {
      return this.items.length;
    }
  
    // Method to add items
    addItem(item) {
      this.items.push(item);
    }
  
    // Method to remove items
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  
    // Method to display cart items
    displayCartItems() {
      console.log("Shopping Cart Items:");
      this.items.forEach((item) => {
        console.log(`  ${item.product.name} x ${item.quantity} = ${item.calculateTotalPrice()}`);
      });
    }
  }
  
  // Create products
  const apple = new Product(1, "Apple", 0.99);
  const banana = new Product(2, "Banana", 1.99);
  const orange = new Product(3, "Orange", 2.99);
  
  // Create a shopping cart
  const cart = new ShoppingCart();
  
  // Add items to the cart
  cart.addItem(new ShoppingCartItem(apple, 5));
  cart.addItem(new ShoppingCartItem(banana, 3));
  cart.addItem(new ShoppingCartItem(orange, 1));
  
  // Display the cart
  cart.displayCartItems();
  
  // Remove an item from the cart
  cart.removeItem(cart.items[1]);
  
  // Display the cart again
  cart.displayCartItems();