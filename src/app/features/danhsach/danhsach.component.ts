import { Product } from "./product";
// import { ProductService } from './productservice';
import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AsyncPipe, NgIf } from "@angular/common";
// Import PrimeNG modules
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
@Component({
  selector: "app-danhsach",
  templateUrl: "./danhsach.component.html",
  imports: [CommonModule, TableModule],
  standalone: true,
})
export class TableSizeDemo {
  products!: Product[];

  sizes!: any[];

  selectedSize: any = "";

  // constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.productService.getProductsMini().then((data) => {
    //     this.products = data;
    // });

    this.sizes = [
      { name: "Small", class: "p-datatable-sm" },
      { name: "Normal", class: "" },
      { name: "Large", class: "p-datatable-lg" },
    ];
  }
}
