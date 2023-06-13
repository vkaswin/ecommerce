import { Injectable } from "@angular/core";
import { ICart, IQuantityAction } from "../types/cart";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart: ICart[] = [];
  private total: number = 0;

  constructor() {}

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.total;
  }

  addProduct(product: ICart) {
    this.cart.push(product);
    this.updateTotal();
  }

  private getIndexByProductId(productId: number) {
    return this.cart.findIndex(({ id }) => id === productId);
  }

  removeProduct(productId: number) {
    let index = this.getIndexByProductId(productId);
    if (index === -1) return;
    this.cart.splice(index, 1);
    this.updateTotal();
  }

  updateQuantity(productId: number, type: IQuantityAction) {
    let index = this.getIndexByProductId(productId);
    if (index === -1) return;
    if (type === "increase") this.cart[index].quantity += 1;
    else {
      if (this.cart[index].quantity === 1) this.removeProduct(productId);
      else this.cart[index].quantity -= 1;
    }
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.cart.reduce(
      (acc, { quantity, discountPrice }) => acc + discountPrice * quantity,
      0
    );
  }
}
