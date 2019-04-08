import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageComponent } from './component/page/page.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PlpComponent } from './component/plp/plp.component';
import { FacetComponent } from './component/plp/facet/facet.component';
import { ProductlistComponent } from './component/plp/productlist/productlist.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { RatingComponent } from './component/common/rating/rating.component';
import { PdpComponent } from './component/pdp/pdp.component';
import { CartComponent } from './component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    PlpComponent,
    FacetComponent,
    ProductlistComponent,
    RatingComponent,
    PdpComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
