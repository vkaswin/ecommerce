import { Component } from "@angular/core";
import { CartService } from "@/modules/cart/services/cart.service";
import { AuthService } from "@/modules/auth/services/auth.service";
import { IProduct } from "@/modules/product/types/product";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  products: IProduct[] = [];

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}

  get total() {
    return this.cartService.getTotalAmount();
  }

  get count() {
    return this.cartService.getCart().length;
  }

  get user() {
    return this.authService.getUser();
  }
}
