const Chocolate = require('./chocolate');

class ShoppingBasket {

  constructor() {
    this.totalPrice = 0;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  addItem(chocolate) {
    this.totalPrice += chocolate.price;
  }
}

const chocolate = new Chocolate('Dapaah', 9.99);
// console.log(chocolate.getName());
// console.log(chocolate.getPrice());

const basket = new ShoppingBasket();
console.log(basket.getTotalPrice());
basket.addItem(chocolate);
console.log(basket.getTotalPrice());

basket.addItem(new Chocolate('Divine', 4.99));
basket.addItem(new Chocolate('Divine', 4.99));
console.log(basket.getTotalPrice());
