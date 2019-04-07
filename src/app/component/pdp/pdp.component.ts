import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { AppState } from '../../app.state';
import * as productActions from '../../actions/product.actions';
import * as cartActions from '../../actions/cart.actions';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss']
})
export class PdpComponent implements OnInit {
  $products: Observable<Product>;
  productDetails: any;
  profile: any;
  constructor(private activatedRoute: ActivatedRoute,  private router: Router, private store: Store<AppState>, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    
    this.$products = this.store.select('product');
    this.$products.subscribe(result => {
      this.productDetails = result[0];
      this.cd.detectChanges();
    }
    );
    this.store.select('profile').subscribe(profile => {
      this.profile = profile;
      this.cd.detectChanges();
    })
    this.store.dispatch(new productActions.LoadProduct());
    this.activatedRoute.params.subscribe((params: Params) => {
      let productId = params['id'];
      if(productId) {
      this.store.dispatch(new productActions.LoadProductDetail(productId));
      }
      
    });
  }

  addToCart() {

    this.store.dispatch( new cartActions.PostCart({
      "quantity": 1,
      "productId": this.productDetails.id,
      "userId": this.profile.id
    }))

  }

}
