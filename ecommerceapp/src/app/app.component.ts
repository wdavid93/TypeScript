import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Ajoutez cette ligne pour marquer le composant comme autonome
})

export class AppComponent {
  title = 'Mon Application Angular';
  products: any[] = []; // Liste de produits

  // Méthode pour ajouter un produit
  addProduct(newProduct: any) {
    this.products.push(newProduct);
    console.log('Produit ajouté : ', newProduct);
    // Vous pouvez également appeler ici un service pour enregistrer le produit dans la base de données
  }
    // Méthode pour modifier un produit
    updateProduct(index: number, updatedProduct: any) {
      if (index >= 0 ) {
        this.products[index] = updatedProduct;
        console.log('Produit modifié : ', updatedProduct);
        // Vous pouvez également appeler ici un service pour mettre à jour le produit dans la base de données
      }
    }
      // Méthode pour supprimer un produit
  deleteProduct(index: number) {
    if (index >= 0 ) {
      const deletedProduct = this.products.splice(index, 1)[0];
      console.log('Produit supprimé : ', deletedProduct);
      // Vous pouvez également appeler ici un service pour supprimer le produit de la base de données
    }
  }
    // Méthode pour lister les produits
    getProducts() {
      return this.products;
    }
}


// // import { Component } from '@angular/core';
// // import { RouterOutlet } from '@angular/router';

// // @Component({
// //   selector: 'app-root',
// //   standalone: true,
// //   imports: [RouterOutlet],
// //   templateUrl: './app.component.html',
// //   styleUrl: './app.component.css'
// // })
// // export class AppComponent {
// //   title = 'ecommerceapp';
// // }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Product and Cart Management';

//   // Arrays to hold products and carts
//   products: { name: string, price: number }[] = [];
//   carts: { productName: string, quantity: number }[] = [];

//   // Variables to hold form input values
//   productName: string = '';
//   productPrice: number = 0;
//   cartProductName: string = '';
//   cartQuantity: number = 1;

//   // Method to add a product
//   addProduct() {
//     if (this.productName && this.productPrice > 0) {
//       this.products.push({ name: this.productName, price: this.productPrice });
//       this.productName = '';
//       this.productPrice = 0;
//     }
//   }

//   // Method to add a product to the cart
//   addToCart() {
//     if (this.cartProductName && this.cartQuantity > 0) {
//       this.carts.push({ productName: this.cartProductName, quantity: this.cartQuantity });
//       this.cartProductName = '';
//       this.cartQuantity = 1;
//     }
//   }
// }

