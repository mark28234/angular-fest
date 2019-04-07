import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Cart } from '../../models/cart.model';
import { AppState } from '../../app.state';
import * as cartActions from '../../actions/cart.actions';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  $cart: Observable<Cart>;
  cart: any;
  profile: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.store.select('profile').subscribe((profile) => {
      this.profile = profile;
      this.cd.detectChanges();
      if (this.profile) {
        this.store.dispatch(new cartActions.LoadCart(this.profile.id));
      }
    });
    this.$cart = this.store.select('cart');
    this.$cart.subscribe((cart) => {
      this.cart = cart;
      console.log(cart);
      this.cd.detectChanges();
    });
  }
  goToPlp() {
    this.router.navigate(['/']);
  }
}
