import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss']
})
export class PdpComponent implements OnInit {
  $products: Observable<Product>;
  productDetails: any;
  profile: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  addToCart() {}
}
