import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: Profile;
  totalItems: number = 0;
  showExtraMenu: boolean;
  constructor(
    private profileService: ProfileService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe((profile) => {
      this.user = profile;
    });
    this.cartService.getCart(1).subscribe((cart) => {
      this.totalItems = cart.length || 0;
    });
  }

  showProfileMenu() {
    this.showExtraMenu = !this.showExtraMenu;
  }

  changeUser(userId) {}

  searchProduct(searchTerm) {}

  redirectHome() {
    this.router.navigate(['/']);
  }

  goToCart() {
    this.router.navigate(['cart']);
  }
}
