import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../../../models/product.model';
import { AppState } from '../../../app.state';
import * as productActions from '../../../actions/product.actions';
import { Router} from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  $products: Observable<Product>;
  products: any;
  showlist: boolean;
  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef,  private router: Router) {
  }

  ngOnInit() {
    this.$products = this.store.select('product');
    this.$products.subscribe(result => {
      this.products = result;
      this.cd.detectChanges();
    }
    );
    this.store.dispatch(new productActions.LoadProduct());
  }
  showListView() {
    this.showlist = true;
  }

  showGridView() {
    this.showlist = false;
  }
  openPDP(id) {
    this.router.navigate(['/pdp/'+id]);
  }

}
