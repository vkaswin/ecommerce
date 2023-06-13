import { Injectable } from "@angular/core";
import { ICart, IQuantityAction } from "../types/cart";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart: ICart[] = [];
  private totalAmount: number = 0;
  private discountAmount: number = 0;

  constructor() {
    this.calculateTotal();
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.totalAmount;
  }

  getDiscount() {
    return this.discountAmount;
  }

  addProduct(product: ICart) {
    this.cart.push(product);
    this.calculateTotal();
  }

  private getIndexByProductId(productId: number) {
    return this.cart.findIndex(({ id }) => id === productId);
  }

  removeProduct(productId: number) {
    let index = this.getIndexByProductId(productId);
    if (index === -1) return;
    this.cart.splice(index, 1);
    this.calculateTotal();
  }

  updateQuantity(productId: number, type: IQuantityAction) {
    let index = this.getIndexByProductId(productId);
    if (index === -1) return;
    if (type === "increase") this.cart[index].quantity += 1;
    else {
      if (this.cart[index].quantity === 1) this.removeProduct(productId);
      else this.cart[index].quantity -= 1;
    }
    this.calculateTotal();
  }

  calculateTotal() {
    let total = 0;
    let discount = 0;

    for (let { discountPrice, price, quantity } of this.cart) {
      total += discountPrice * quantity;
      discount += (price - discountPrice) * quantity;
    }

    this.totalAmount = total;
    this.discountAmount = discount;
  }
}
