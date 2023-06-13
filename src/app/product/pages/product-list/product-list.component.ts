import { Component, OnInit } from "@angular/core";
import { ProductService } from "@/product/services/product.service";
import { IProduct } from "@/product/types/product";
import { CartService } from "@/cart/services/cart.service";
import { ICart, IQuantityAction } from "@/cart/types/cart";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  get cart() {
    return this.cartService.getCart();
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getCartById(productId: number) {
    return this.cart.find(({ id }) => id === productId);
  }

  handleQuantity({
    productId,
    type,
  }: {
    productId: number;
    type: IQuantityAction;
  }) {
    this.cartService.updateQuantity(productId, type);
  }

  handleAddToCart(product: ICart) {
    this.cartService.addProduct(product);
  }
}
