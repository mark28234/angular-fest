import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Profile } from '../../models/profile.model';
import { AppState } from '../../app.state';
import * as profileActions from '../../actions/profile.actions';
import * as productActions from '../../actions/product.actions';
import * as cartActions from '../../actions/cart.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  $profile: Observable<Profile>;
  profile: any;
  totalItems: any = [];
  showExtraMenu: boolean;
  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit() {

    this.$profile = this.store.select('profile');
    this.$profile.subscribe(result => {
      this.profile = result;
      this.cd.detectChanges();
      if(this.profile) {
        this.store.dispatch( new cartActions.LoadCart(this.profile.id));
      }
    });
    this.store.select('cart').subscribe(result => {
      if(result && result[0]){
        this.totalItems= result;
        console.log(this.totalItems)
      } else {
        this.totalItems= "";
      }
      this.cd.detectChanges();
    });

    this.store.dispatch(new profileActions.LoadProfile(2));


  }
  showProfileMenu() {
    this.showExtraMenu = !this.showExtraMenu;
  }
  changeUser(userId) {
    if (userId) {
      this.store.dispatch(new profileActions.LoadProfile(userId.target.value));
      this.showExtraMenu = false;
    }
  }
  searchProduct(searchTerm) {
    this.store.dispatch(new productActions.LoadProduct(searchTerm.target.value))
  }
  redirectHome() {
    this.router.navigate(['/']);
  }
  goToCart() {
    this.router.navigate(['cart']);
  }
}
