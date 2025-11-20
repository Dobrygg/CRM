'use strict';


const cart = {
  items: [],
  count: 0,
  calculateltemPrice() {
    return this.items.reduce((sum, item) =>
      sum + item.price * item.quantity, 0);
  },
  get totalPrice() {
    return this.calculateltemPrice();
  },
  add(name, price, quantity = 1) {
    const newItems = {
      name,
      price,
      quantity,
    };
    this.items.push(newItems);
    this.increaseCount(quantity);
  },
  increaseCount(num) {
    this.count += num;
  },
  clear() {
    this.items = [],
    this.totalPrice = 0,
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
  },
};

cart.add('banan', 5, 2);
cart.add('mango', 4, 1);
cart.add('qiwi', 1, 10);
cart.print();

console.log(cart.calculateltemPrice());


const heading = document.querySelector('.modal__title');
const cancel = document.querySelector('.modal__button-cancel');
const id = document.querySelector('.modal__text-id');
const form = document.querySelector('.modal__form');
const checkbox= document.querySelector('.modal__form-checkbox');
const checkboxInput= document.querySelector('.modal__form-input');
const price = document.querySelector('.modal__price');
console.log(heading)