import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart[] = [];
  profile: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.getCart(1).subscribe((cart) => (this.cart = cart));
  }

  goToPlp() {
    this.router.navigate(['/']);
  }

  getTotalPrice() {
    return this.cart.reduce((total, item) => {
      return (total += item.quantity * item.product.price);
    }, 0);
  }
}
