import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-cart-empty',
    template: `
    <div class="empty-cart">
    Your<i class="material-icons mat-48 cart">shopping_cart</i> is empty
    </div>
  `,
    styles: [
        `
    .empty-cart {
        text-align: center;
        white-space: nowrap;
        color: #757575;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .empty-cart .cart {
        font-size: 100px !important;
        margin-top: 50px;
    }
    `
    ]
})
export class CartEmptyComponent {


}
