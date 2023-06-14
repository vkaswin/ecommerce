import { Component, Input, OnChanges } from "@angular/core";
import { IProduct } from "@/product/types/product";
import { IQuantityAction } from "@/cart/types/cart";
import { CartService } from "@/cart/services/cart.service";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent {
  @Input() product = {} as IProduct;

  constructor(private cartService: CartService) {}

  get discountPrice() {
    return (
      this.product.price -
      (this.product.price * this.product.discountPercentage) / 100
    );
  }

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
      discountPrice: this.discountPrice,
    });
  }

  handleQuantity(type: IQuantityAction) {
    this.cartService.updateQuantity(this.product.id, type);
  }
}
