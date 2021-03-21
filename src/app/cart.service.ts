import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class CartService {
  item = [];
  constructor(private _http: HttpClient) {}
  addToCart(product) {
    this.item.push(product);
    localStorage.setItem("clickCounter", JSON.stringify(this.item));
  }
  getItems() {
    this.item = JSON.parse(localStorage.getItem("clickCounter"));
    return this.item;
  }
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
