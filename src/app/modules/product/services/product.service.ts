import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IAllProduct, IProduct } from "@/modules/product/types/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private baseUrl = "https://dummyjson.com";
  private allProductsUrl = this.baseUrl + "/products";
  private searchProductUrl = this.baseUrl + "/products/search";

  constructor(private http: HttpClient) {}

  getProducts(page: number = 1) {
    return this.http.get<IAllProduct>(this.allProductsUrl, {
      params: { page, limit: 30 },
    });
  }

  getProductById(id: string) {
    return this.http.get<IProduct>(this.allProductsUrl + "/" + id);
  }

  searchProducts(keyword: string, page: number = 1) {
    return this.http.get<IAllProduct>(this.searchProductUrl, {
      params: { q: keyword, page, limit: 30 },
    });
  }
}
