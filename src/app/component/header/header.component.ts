import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Profile } from '../../models/profile.model';
import { AppState } from '../../app.state';
import * as profileActions from '../../actions/profile.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  $profile: Observable<Profile>;
  profile: any;
  showExtraMenu: boolean;
  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {

    this.$profile = this.store.select('profile');
    this.$profile.subscribe(result => {
      this.profile = result;
      this.cd.detectChanges();
    }
    );
    this.store.dispatch(new profileActions.LoadProfile(2));

  }
  showProfileMenu() {
    this.showExtraMenu = !this.showExtraMenu;
  }
  changeUser(userId){
    if(userId) {
    this.store.dispatch(new profileActions.LoadProfile(userId.target.value));
    this.showExtraMenu = false;
    }
  }
}
