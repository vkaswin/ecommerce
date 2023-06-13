import { Component } from "@angular/core";
import { CartService } from "@/cart/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(private cartService: CartService) {}

  get total() {
    return this.cartService.getTotal();
  }

  get count() {
    return this.cartService.getCart().length;
  }
}
