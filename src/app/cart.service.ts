import { Injectable } from "@angular/core";

@Injectable()
export class CartService {
  item = [];
  constructor() {}
  addToCart(product) {
    this.item.push(product);
    localStorage.setItem("clickCounter", JSON.stringify(this.item));
  }
  getItems() {
    this.item = JSON.parse(localStorage.getItem("clickCounter"));
    return this.item;
  }
}
