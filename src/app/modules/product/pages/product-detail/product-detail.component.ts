import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "@/modules/product/services/product.service";
import { IProduct } from "@/modules/product/types/product";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  product = {} as IProduct;
  activeImage = 0;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  get discountPrice() {
    return (
      this.product.price -
      (this.product.price * this.product.discountPercentage) / 100
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getProductById(id);
    });
  }

  getProductById(id: string) {
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
      this.loading = false;
    });
  }

  handleImage(index: number) {
    this.activeImage = index;
  }
}
