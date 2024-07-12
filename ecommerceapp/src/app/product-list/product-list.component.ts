import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id)
      .subscribe(() => {
        this.products = this.products.filter(product => product.id !== id);
      });
  }

}


// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   products: any[] = [];
//   newProduct = { name: '', description: '', price: 0 };

//   constructor(private productService: ProductService) {}

//   ngOnInit(): void {
//     this.productService.getProducts().subscribe((data: any[]) => {
//       this.products = data;
//     });
//   }

//   addProduct(): void {
//     this.productService.addProduct(this.newProduct).subscribe(product => {
//       this.products.push(product);
//       this.newProduct = { name: '', description: '', price: 0 };
//     });
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ProductService } from '../product.service';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   products: any[] = [];

//   constructor(private productService: ProductService, private router: Router) {}

//   ngOnInit(): void {
//     this.loadProducts();
//   }

//   loadProducts(): void {
//     this.productService.getProducts().subscribe((data: any[]) => {
//       this.products = data;
//     });
//   }

//   addProduct(): void {
//     this.router.navigate(['/edit', 0]);
//   }

//   editProduct(id: number): void {
//     this.router.navigate(['/edit', id]);
//   }

//   deleteProduct(id: number): void {
//     this.productService.deleteProduct(id).subscribe(() => {
//       this.loadProducts();
//     });
//   }
// }
