import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product.model';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  products: Product[] = [];
  showlist: boolean;
  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  showListView() {
    this.showlist = true;
  }

  showGridView() {
    this.showlist = false;
  }

  openPDP(id) {
    this.router.navigate(['/pdp/' + id]);
  }

  addToCart(id) {
    this.cartService
      .addItemToCart(1, id, 1)
      .subscribe((result) => console.log(result));
  }
}
