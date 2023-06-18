import { Component, Input } from "@angular/core";
import { CartService } from "@/modules/cart/services/cart.service";
import { IProduct } from "@/modules/product/types/product";
import { IQuantityAction } from "@/modules/cart/types/cart";

@Component({
  selector: "add-to-cart",
  templateUrl: "./add-to-cart.component.html",
  styleUrls: ["./add-to-cart.component.scss"],
})
export class AddToCartComponent {
  @Input() product: IProduct = {} as IProduct;

  constructor(private cartService: CartService) {}

  get cart() {
    return this.cartService.getProductById(this.product.id);
  }

  handleAddToCart() {
    let {
      id,
      brand,
      category,
      description,
      discountPercentage,
      price,
      title,
      thumbnail,
    } = this.product;

    this.cartService.addProduct({
      id,
      brand,
      category,
      description,
      discountPercentage,
      price,
      thumbnail,
      quantity: 1,
      title,
      discountPrice:
        this.product.price -
        (this.product.price * this.product.discountPercentage) / 100,
    });
  }

  handleQuantity(type: IQuantityAction) {
    this.cartService.updateQuantity(this.product.id, type);
  }
}
