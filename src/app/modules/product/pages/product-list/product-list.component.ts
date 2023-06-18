import { Component, OnInit } from "@angular/core";
import { ProductService } from "@/modules/product/services/product.service";
import { IProduct } from "@/modules/product/types/product";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  page: number = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts(this.page).subscribe(({ products }) => {
      this.products = products;
    });
  }
}
