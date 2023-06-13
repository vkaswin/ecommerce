import { CartService } from "@/cart/services/cart.service";
import { Component } from "@angular/core";

@Component({
  selector: "cart-list",
  templateUrl: "./cart-list.component.html",
  styleUrls: ["./cart-list.component.scss"],
})
export class CartListComponent {
  constructor(private cartService: CartService) {}

  get products() {
    return this.cartService.getCart();
  }

  get totalAmount() {
    return this.cartService.getTotal();
  }

  get discountAmount() {
    return this.cartService.getDiscount();
  }
}
