// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'ecommerceapp';
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to Ecommerce App</h1>
    <app-product-list></app-product-list>
    <app-cart></app-cart>
  `,
  styles: []
})
export class AppComponent {
  title = 'ecommerce-app';
}


