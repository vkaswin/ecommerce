import { Component } from "@angular/core";
import { ProductService } from "@/modules/product/services/product.service";
import { IProduct } from "@/modules/product/types/product";
import { debounce } from "@/utils";

@Component({
  selector: "search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.scss"],
})
export class SearchBoxComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  handleSearch = debounce((event: Event) => {
    let value = (event.target as HTMLInputElement).value;
    this.productService.searchProducts(value).subscribe(({ products }) => {
      this.products = products;
    });
  }, 500);
}
