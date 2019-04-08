import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss']
})
export class PdpComponent implements OnInit {
  productDetails: any;
  profile: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.productService
        .getProductDetails(params['id'])
        .subscribe((pd) => (this.productDetails = pd));
    });
  }

  addToCart(id) {
    this.cartService
      .addItemToCart(1, id, 1)
      .subscribe((result) => console.log(result));
  }
}
