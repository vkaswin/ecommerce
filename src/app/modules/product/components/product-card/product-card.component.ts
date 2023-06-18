import { Component, Input } from "@angular/core";
import { IProduct } from "@/modules/product/types/product";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent {
  @Input() product = {} as IProduct;

  constructor() {}

  get discountPrice() {
    return (
      this.product.price -
      (this.product.price * this.product.discountPercentage) / 100
    );
  }
}
