import { CartService } from "@/cart/services/cart.service";
import { ICart, IQuantityAction } from "@/cart/types/cart";
import { Component, Input } from "@angular/core";

@Component({
  selector: "cart-card",
  templateUrl: "./cart-card.component.html",
  styleUrls: ["./cart-card.component.scss"],
})
export class CartCardComponent {
  @Input() product = {} as ICart;

  constructor(private cartService: CartService) {}

  removeProduct() {
    this.cartService.removeProduct(this.product.id);
  }

  updateQuantity(type: IQuantityAction) {
    this.cartService.updateQuantity(this.product.id, type);
  }
}
