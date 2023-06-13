import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { IProduct } from "@/product/types/product";
import { ICart, IQuantityAction } from "@/cart/types/cart";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnChanges {
  @Input() product = {} as IProduct;
  @Input() cart?: ICart;

  @Output() onAddToCart = new EventEmitter<ICart>();
  @Output() onQuantityChange = new EventEmitter<{
    productId: number;
    type: IQuantityAction;
  }>();

  discountPrice!: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    let { product } = changes;

    if (product && product.firstChange) {
      this.discountPrice =
        this.product.price -
        (this.product.price * this.product.discountPercentage) / 100;
    }
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

    this.onAddToCart.emit({
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
    this.onQuantityChange.emit({ productId: this.product.id, type });
  }
}
