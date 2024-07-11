import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  newProduct = { name: '', description: '', price: 0 };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  addProduct(): void {
    this.productService.addProduct(this.newProduct).subscribe(product => {
      this.products.push(product);
      this.newProduct = { name: '', description: '', price: 0 };
    });
  }
}
