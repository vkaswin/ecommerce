import { ICart } from "@/cart/types/cart";
import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "cart-card",
  templateUrl: "./cart-card.component.html",
  styleUrls: ["./cart-card.component.scss"],
})
export class CartCardComponent {
  @Input() product = {} as ICart;
}
