import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId: number = 0;
  product = { name: '', description: '', price: 0 };

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    // Vérification de l'existence du paramètre 'id'
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.productId = +idParam; // Conversion en nombre
    } else {
      console.error("No 'id' parameter found in the route");
    }
    
    // Si l'id est différent de 0, cela signifie que nous éditons un produit existant
    if (this.productId !== 0) {
      this.productService.getProduct(this.productId).subscribe(data => {
        this.product = data;
      }, error => {
        console.error("Error fetching product details", error);
      });
    }
  }

  saveProduct(): void {
    if (this.productId === 0) {
      this.productService.addProduct(this.product).subscribe(() => {
        this.router.navigate(['/products']);
      }, error => {
        console.error("Error adding product", error);
      });
    } else {
      this.productService.updateProduct(this.productId, this.product).subscribe(() => {
        this.router.navigate(['/products']);
      }, error => {
        console.error("Error updating product", error);
      });
    }
  }
}
